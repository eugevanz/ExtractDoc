<template>
  <div>
    <v-btn outlined small style="margin: 8px; margin-bottom: 30px" @click="$router.go(-1)">
      <v-icon left>mdi-chevron-left</v-icon>Back
    </v-btn>
    <v-container>
      <v-row no-gutters>     
        <v-col cols="11" sm="11" md="7">
            <v-row style="display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: flex-end">
              <v-col cols="12" sm="11" md="6" lg="4" v-for="link in links" :key="link.filepath">
                <Page :data="link"/>
              </v-col>
            </v-row>
        </v-col>

        <v-col cols="1" style="display: flex; justify-content: center;">
          <v-divider vertical></v-divider>
        </v-col>

        <v-col cols="11" sm="12" md="4">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle style="margin-top: 1px; font-size: 13px;">Filename</v-list-item-subtitle>
                <p style="font-size: 22px; font-weight: bold; color: #2C3E50">{{ $route.params.data.name }}</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle style="margin-top: 1px; font-size: 13px;">User</v-list-item-subtitle>
                <p style="font-size: 22px; font-weight: bold; color: #2C3E50">{{ $route.params.data.user }}</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle style="margin-top: 1px; font-size: 13px;">Status</v-list-item-subtitle>
                <p style="font-size: 22px; font-weight: bold; color: #2C3E50">{{ $route.params.data.status }}</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle style="margin-top: 1px; font-size: 13px;">Upload date</v-list-item-subtitle>
                <p style="font-size: 22px; font-weight: bold; color: #2C3E50">{{ stringDate }}</p>
              </v-list-item-content>
            </v-list-item>

            <p style="margin-top: 56px; margin-left: 8px">
              <v-btn icon x-large style="color: #194B99">
                <v-icon>mdi-cloud-download-outline</v-icon>
              </v-btn>
              <v-btn icon x-large style="color: #194B99">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </p>
            
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Pages',
  components: {
    Page
  },
  data() {
    return {
      links: [{filepath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', tagName: "House"}, {filepath: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', tagName: "Road"}, {filepath: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', tagName: "Plane"}, {filepath: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', tagName: "Sunshine"}]
    }
  },
  computed: {
      stringDate() {
        var d = new Date(this.$route.params.data.upload);
        return d.toDateString();
      }
    }
}
</script>