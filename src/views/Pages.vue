<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <v-list>
            <v-list-item-group>
              <v-list-item @click="$router.go(-1)">
                <v-list-item-avatar>
                  <v-icon>mdi-arrow-left-thin-circle-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title> Back</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Filename</v-list-item-subtitle>
                  <v-list-item-title>{{ $route.params.data.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>User</v-list-item-subtitle>
                  <v-list-item-title>{{ $route.params.data.user }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Status</v-list-item-subtitle>
                  <v-list-item-title>{{ $route.params.data.status }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Upload date</v-list-item-subtitle>
                  <v-list-item-title>{{ $route.params.data.upload }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" sm="10">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="link in links" :key="link.filepath">
              <Page :data="link"/>
            </v-col>
          </v-row>
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
  }
}
</script>