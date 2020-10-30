<template>
  <div>
    <v-container>
      <v-card class="mx-auto" outlined>
        <v-row style="align-items: center; padding-left: 24px">
          <v-col><v-btn @click="$router.go(-1)" icon><v-icon>mdi-arrow-left</v-icon></v-btn></v-col>
          <v-col>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>Filename</v-list-item-subtitle>
                <v-list-item-title>{{ $route.params.data.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>User</v-list-item-subtitle>
                <v-list-item-title>{{ $route.params.data.user }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>Status</v-list-item-subtitle>
                <v-list-item-title>{{ $route.params.data.status }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>Upload date</v-list-item-subtitle>
                <v-list-item-title>{{ $route.params.data.upload }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="6" sm="2" v-for="link in links" :key="link">
          <Page :data="link"/>
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
      links: ['https://cdn.vuetifyjs.com/images/cards/house.jpg', 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg']
    }
  }
}
</script>