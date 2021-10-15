<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    ></v-navigation-drawer> -->

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Image Overlay</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col>
          <v-card class="mx-6 mt-6">
            <v-card-text>
              <v-row>
                <v-col>
                  <h3>Project Details</h3>
                  <v-text-field
                    label="Company Name"
                    v-model="company"
                  ></v-text-field>
                  <v-text-field
                    label="Project Name"
                    v-model="project"
                  ></v-text-field>
                  <v-text-field
                    label="Font Size"
                    v-model="fontSize"
                  ></v-text-field>
                  <v-btn @click="getInstalledFonts" v-if="!fonts.length">Change font</v-btn>
                  <div v-if="!fonts.length">This is based on the fonts you have installed on your PC. Enable font access API at chrome://flags</div>
                  <v-autocomplete
                    v-model="customFont"
                    v-else
                    :items="fonts"
                    label="Select font"
                  ></v-autocomplete>
                  <div v-if="customFont" :style="{ 'font-family': customFont } ">Here is what the font looks like.</div>
                </v-col>
                <v-col>
                  <h3>Text Color</h3>
                  <v-color-picker
                    class="ma-auto mt-4"
                    v-model="color"
                    mode="hexa"
                  ></v-color-picker>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>CSV file</h3>
                  <v-subheader>Columns should be "file,description,location". No spaces, all lowercase.</v-subheader>
                  <v-file-input
                    accept=".csv"
                    label="Select CSV file"
                    v-model="csvFile"
                    clearable
                  ></v-file-input>
                </v-col>
                <v-col>
                  <h3>Image files</h3>
                  <v-subheader>Make sure image names match the "file" column exactly, including upper and lower case.</v-subheader>
                  <v-file-input
                    accept="image/*"
                    label="Select images"
                    multiple
                    v-model="files"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-data-table
                    v-if="fileData.length"
                    :items="fileData"
                    :headers="headers"
                  >
                    <template v-slot:item.alerts="{ item }">
                      <v-alert
                        v-for="alert in item.alerts"
                        :key="alert.name"
                        border="left"
                        :type="alert.type"
                      >
                        {{ alert.name }}
                      </v-alert>
                    </template>
                    <template v-slot:item.url="{ item }">
                      <img :src="item.url" alt="" height="50px">
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <v-btn @click="preview(item)">Preview</v-btn>
                    </template>
                    <template v-slot:item.top="{ item }">
                      <v-switch v-model="item.top"></v-switch>
                    </template>
                  </v-data-table>
                  <v-row>
                    <v-col>
                      <v-slider
                        :label="gbPerFile + 'GB of images per zip file'"
                        v-model="gbPerFile"
                        :max="10"
                        :min="1"
                        ticks="always"
                        persistent-hint
                        :disabled="loadingDownload"
                        :hint="`Total image size: ${totalImageSizeGb.toFixed(2)}GB.
                        Will generate ${Math.ceil(totalImageSizeGb/gbPerFile)} file(s).`"
                      ></v-slider>
                    </v-col>
                    <v-col>
                    </v-col>
                  </v-row>
                  <v-btn
                    class="mt-4"
                    @click="download"
                    color="primary"
                    :disabled="!fileData || !fileData.length"
                    :loading="loadingDownload"
                  >Download</v-btn>
                </v-col>
              </v-row>
              <v-row v-if="showProgressBar">
                <v-col>
                  <v-progress-linear
                    :value="progress * 100 / fileData.length"
                    :indeterminate="progressIndeterminate"
                  ></v-progress-linear>
                  <div v-if="!progressIndeterminate">Stamping files: {{ this.progress }}/{{ this.fileData.length }}</div>
                  <div v-else>Generating zip file {{ fileCount }}</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        transition="dialog-bottom-transition"
        v-model="previewDialog"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Preview of image with text</v-toolbar>
            <v-card-text>
              <img :src="previewImage" alt="">
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-main>
    <canvas id="canvas">
       <!-- Fallback content -->
       <p>We apologize, your browser does not support canvas at this time!</p>
    </canvas>
  </v-app>
</template>

<script>
  import * as parse from 'csv-parse/lib/sync';
  import * as moment from 'moment';
  import * as JSZip from 'jszip';

  export default {
    mounted() {
    },
    data: () => ({ 
      company: 'Instratus',
      project: 'Test',
      drawer: null,
      csvFile: null,
      files: null,
      fonts: [],
      color: '#16bbee',
      gbPerFile: 2,
      fileData: [],
      fontSize: null,
      alerts: [],
      previewDialog: false,
      showProgressBar: false,
      progressIndeterminate: false,
      loadingDownload: false,
      progress: 0,
      customFont: null,
      previewImage: '',
      fileCount: 1,
      headers: [
        { text: 'Name', value: 'name'},
        { text: 'Created At', value: 'created' },
        { text: 'Thumbnail', value: 'url', align: 'end'},
        { text: 'Description', value: 'description' },
        { text: 'Location', value: 'location' },
        { text: 'Top?', value: 'top' },
        { text: 'Alerts', value: 'alerts' },
        { text: 'Actions', value: 'actions', align: 'end'},
      ]
    }),
    watch: {
      fileData(v) {
        this.alerts = []
        for (let i of v) {
          if (!i.created) {
            this.alerts.push({
              type: 'warning',
              name: 'Image ' + i.name +' missing date'
            })
          }
        }
      },
      csvFile(file) {
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            let results = parse(reader.result, {
              columns: true,
              skip_empty_lines: true
            })
            this.csvData = results.reduce((acc, next) => {
              acc[next.file] = next
              return acc
            }, {})
            if (this.files) this.fileData = this.processFileData()
          };
          reader.readAsText(file);
        } else {
          this.csvData = null
          if (this.files) this.fileData = this.processFileData()
        }
      },
      files(files) {
        this.fileData = files ? this.processFileData() : []
      }
    },
    computed: {
      totalImageSize() {
        if (!this.fileData) return 0
        console.log(this.fileData)
        let size = this.fileData.reduce((a, v) => a + v.size, 0)
        return size
      },
      totalImageSizeGb() {
        if (!this.fileData) return 0
        return this.totalImageSize/(1024*1024*1024)
      }
    },
    created() {
      this.getInstalledFonts()
    },
    methods: {
      processFileData() {
        return this.files && this.files.map(file => {
          let item = { name: file.name, size: file.size, created: null, url: URL.createObjectURL(file), file, description: '', top: false, alerts: [] }
          if (this.csvData && this.csvData[file.name]) {
            item = { ...item, ...this.csvData[file.name] }
          }
          window.EXIF.getData(file, function() {
            item.exif = this.exifdata
            item.details = this
            if (!this.exifdata) return item.alerts = [{ type: 'warning', name: 'Missing exif data'}]
            if (!this.exifdata.DateTimeOriginal) return item.alerts = [{ type: 'warning', name: 'No date in exif data'}]
            item.created = this.exifdata && moment(this.exifdata.DateTimeOriginal, 'YYYY:MM:DD HH:mm:ss')
          })

          return item
        })
      },
      async download() {
        this.loadingDownload = true
        var zip = new JSZip();
        var img = zip.folder("images");
        this.progress = 0
        this.showProgressBar = true
        let currentSize = 0;
        let maxSize = this.gbPerFile * 1024 * 1024 * 1024;
        this.fileCount = 1;
        let nowDate = Date.now()
        for (let image of this.fileData) {
          let imageData = await this.addTextToImage(image)
          img.file(image.name, imageData.split(',')[1], {base64: true});
          currentSize += image.size;
          this.fileData[this.progress++] = null
          if (currentSize > maxSize) {
            this.progressIndeterminate = true
            let content = await zip.generateAsync({type:"blob"})
            this.progressIndeterminate = false
            window.saveAs(content, `${this.company}-${this.project}-stamped-images-${nowDate}-${this.fileCount++}.zip`);
            currentSize = 0;
            zip = new JSZip();
            img = zip.folder("images");
          }
        }
        this.progressIndeterminate = true
        zip.generateAsync({type:"blob"})
        .then((content) => {
            // see FileSaver.js
            window.saveAs(content, `${this.company}-${this.project}-stamped-images-${nowDate}-${this.fileCount++}.zip`);
            this.showProgressBar = false
            this.loadingDownload = false
            this.progressIndeterminate = false
            this.progress = 0
        });
      },
      preview(item) {
        this.addTextToImage(item)
        this.previewDialog = true
      },
      async getInstalledFonts() {
        const { state } = await navigator.permissions.query({ name: "font-access" })
        
        if (state === "denied") {
            return []
        }
        
        const fonts = []
        
        try {
            for (const { fullName } of await navigator.fonts.query()) {
                fonts.push(fullName)
            }
        } catch (e) {
          console.error(e)
          console.error('Could not get available fonts')
        }
        
        this.fonts = fonts
      },
      addTextToImage(image) {
        return new Promise(resolve => {
          var canvas = document.getElementById("canvas");
          var context = canvas.getContext("2d");
          var imageObj = new Image();
          

          imageObj.onload = () => {
              canvas.height = imageObj.height
              canvas.width = imageObj.width
              context.drawImage(imageObj, 0, 0);
              context.fillStyle = this.color
              context.strokeStyle = 'black';
              context.lineWidth = 4;
              let fontSize = Math.floor(this.fontSize || imageObj.height * 0.025)
              if (fontSize < 5) fontSize = 5
              let spacing = fontSize/5;
              let numberOfLines = 7
              let top = (fontSize + spacing) * (numberOfLines - 1);
              if (image.top) top = imageObj.height - fontSize - 5;
              context.font = fontSize + `pt ${this.customFont || 'Calibri'}`;
              const strokeAndFill = (text, location, thickness = 5) => {
                context.strokeText(text, thickness, location);
                context.fillText(text, thickness, location);
              }
              strokeAndFill(this.company, imageObj.height - top);
              strokeAndFill(this.project, imageObj.height - top + fontSize + spacing);
              strokeAndFill(image.name, imageObj.height - top + (fontSize + spacing) * 2);
              strokeAndFill(image.location, imageObj.height - top + (fontSize + spacing) * 3);
              strokeAndFill(image.description, imageObj.height - top + (fontSize + spacing) * 4);
              if (image.created) {
                strokeAndFill(image.created.format('LLL'), imageObj.height - top + (fontSize + spacing) * 5);
              }
              let imageData = canvas.toDataURL(image.details.type)
              this.previewImage = imageData
              context.clearRect(0, 0, canvas.width, canvas.height);
              canvas.height = 0
              canvas.width = 0
              resolve(imageData)
          };
          imageObj.src = image.url; 
        })
      }
    }
  }
</script>