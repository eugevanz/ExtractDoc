<template>
  <div>
    <v-app-bar app flat>
      <v-text-field label="Search" dense style="margin-top: 16px;"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn text><v-icon left>mdi-filter-variant</v-icon> Sort</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="card in cards" :key="card.id"><Document :data="card"/></v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
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
      {name: "Company", status: 'active', upload: '18/08/2020', user: 'Saagar Enjeti', id: 1}, 
      {name: "Represent", status: 'active', upload: '18/08/2020', user: 'Krystal Ball', id: 2}, 
      {name: "Seldom", status: 'active', upload: '18/08/2020', user: 'Marques Brownley', id: 3}, 
      {name: "Field", status: 'inactive', upload: '18/08/2020', user: 'Jimmy Dore', id: 4}, 
      {name: "Dog", status: 'active', upload: '18/08/2020', user: 'Jaspreet Singh', id: 5}
    ]
  })
}
</script>
