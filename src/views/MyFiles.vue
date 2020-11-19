<template>
  <v-container>
    <v-row no-gutters style="margin: 8px; position: relative">
        <v-text-field placeholder="Search" v-model="searchTerm" outlined></v-text-field>
        <div style="position: absolute; top: 12%; right: 4px" v-if="searchTerm != ''">
            <v-btn icon @click="onreload"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <div style="position: absolute; top: 12%; right: 4px" v-else>
            <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        </div>
    </v-row>
    
    <v-spacer></v-spacer>
      <v-row style="display: flex; flex-wrap: wrap; align-items: flex-end">
        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <Document :data="card"/>
        </v-col>
      </v-row>
  </v-container>

</template>

<script>
// @ is an alias to /src
import Document from '@/components/Document.vue'

export default {
  components: {
    Document
  },
  data: () => ({
    cards: [
      {name: "Company", status: 'active', upload: '08/18/2020', user: 'Saagar Enjeti', id: 1, filepath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'}, 
      {name: "Represent", status: 'active', upload: '08/18/2020', user: 'Krystal Ball', id: 2, filepath: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'}, 
      {name: "Seldom", status: 'active', upload: '08/18/2020', user: 'Marques Brownley', id: 3, filepath: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'}, 
      {name: "Field", status: 'inactive', upload: '08/18/2020', user: 'Jimmy Dore', id: 4, filepath: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'}, 
      {name: "Dog", status: 'active', upload: '08/18/2020', user: 'Jaspreet Singh', id: 5, filepath: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'},
      {name: "Company", status: 'active', upload: '08/18/2020', user: 'Saagar Enjeti', id: 6, filepath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'}, 
      {name: "Represent", status: 'active', upload: '08/18/2020', user: 'Krystal Ball', id: 7, filepath: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'}, 
      {name: "Seldom", status: 'active', upload: '08/18/2020', user: 'Marques Brownley', id: 8, filepath: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'}, 
      {name: "Field", status: 'inactive', upload: '08/18/2020', user: 'Jimmy Dore', id: 9, filepath: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'}, 
      {name: "Dog", status: 'active', upload: '08/18/2020', user: 'Jaspreet Singh', id: 10, filepath: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'}
    ],
    searchTerm: ''
  }),
  methods: {
    onreload() { this.searchTerm = '' }
  }
}
</script>
