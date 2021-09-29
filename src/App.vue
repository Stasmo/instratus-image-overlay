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
                  <v-file-input
                    accept=".csv"
                    label="Select CSV file"
                    v-model="csvFile"
                  ></v-file-input>
                </v-col>
                <v-col>
                  <h3>Image files</h3>
                  <v-file-input
                    accept="image/*"
                    label="Select images"
                    multiple
                    v-model="files"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-data-table
                v-if="files"
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
          <v-btn @click="download" color="primary" :disabled="!fileData || !fileData.length">Download</v-btn>
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
      color: '#16bbee',
      fontSize: null,
      alerts: [],
      previewDialog: false,
      previewImage: '',
      headers: [
        { text: 'Name', value: 'name'},
        { text: 'Created At', value: 'created' },
        { text: 'Thumbnail', value: 'url', align: 'end'},
        { text: 'Description', value: 'description' },
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
        };
        reader.readAsText(file);
      }
    },
    computed: {
      fileData() {
        return this.files && this.files.map(file => {
          let item = { name: file.name, created: null, url: URL.createObjectURL(file), file, description: '', top: false, alerts: [] }
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
      }
    },
    methods: {
      async download() {
        var zip = new JSZip();
        var img = zip.folder("images");
        for (let image of this.fileData) {
          let imageData = await this.addTextToImage(image)
          img.file(image.name, imageData.split(',')[1], {base64: true});
        }
        zip.generateAsync({type:"blob"})
        .then((content) => {
            // see FileSaver.js
            window.saveAs(content, `${this.company}-${this.project}-stamped-images-${Date.now()}.zip`);
        });
      },
      preview(item) {
        this.addTextToImage(item)
        this.previewDialog = true
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
              let numberOfLines = 7
              let top = (fontSize + 5) * (numberOfLines - 1);
              if (image.top) top = imageObj.height - fontSize - 5;
              context.font = fontSize + "pt Calibri";
              context.strokeText(this.company, 5, imageObj.height - top);
              context.fillText(this.company, 5, imageObj.height - top);
              context.strokeText(this.project, 5, imageObj.height - top + fontSize + 5);
              context.fillText(this.project, 5, imageObj.height - top + fontSize + 5);
              context.strokeText(image.name, 5, imageObj.height - top + (fontSize + 5) * 2);
              context.fillText(image.name, 5, imageObj.height - top + (fontSize + 5) * 2);
              context.strokeText(image.location, 5, imageObj.height - top + (fontSize + 5) * 3);
              context.fillText(image.location, 5, imageObj.height - top + (fontSize + 5) * 3);
              context.strokeText(image.description, 5, imageObj.height - top + (fontSize + 5) * 4);
              context.fillText(image.description, 5, imageObj.height - top + (fontSize + 5) * 4);
              if (image.created) {
                context.strokeText(image.created.format('LLL'), 5, imageObj.height - top + (fontSize + 5) * 5);
                context.fillText(image.created.format('LLL'), 5, imageObj.height - top + (fontSize + 5) * 5);
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