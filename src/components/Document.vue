<template>
  <v-card flat style="margin: 8px;">
    <v-img :src="data.filepath"></v-img>

    <v-card flat color="#194B99" style="margin-top: -6px;">
      <v-list-item style="margin-top: 3px">
        <v-list-item-content>
          <p style="font-size: 24px; color: white;">{{ data.name }}</p>
          <v-list-item-subtitle style="margin-top: 1px; font-size: 13px; color: #DCDCDC;">{{ stringDate }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon dense style="color: #DCDCDC">mdi-cloud-check</v-icon>
        </v-list-item-action>
      </v-list-item>

      <p style="font-style: italic; margin-left: 14px; margin-bottom: 8px; color: #909090; font-size: 17px">*Sent for processing</p>
      <v-card-actions>
        <v-btn icon x-large dark>
          <v-icon>mdi-cloud-download-outline</v-icon>
        </v-btn>
        <v-btn icon x-large dark>
          <v-icon>mdi-refresh-circle</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon x-large style="color: #DA7967" :to="{ name: 'Pages', params: { data: this.data, id: this.data.id } }">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    props: ['data'],
    data: () => ({
      dialog: false,
    }),
    computed: {
      stringDate() {
        var d = new Date(this.data.upload);
        return d.toDateString();
      }
    }
  }
</script>