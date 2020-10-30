<template>
  <v-card outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">Uploaded {{ data.upload }}</v-list-item-title>
        <v-list-item-subtitle>Status {{ data.status }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
      <v-card-title style="color: white; bottom: 0; left: 0; position: absolute;">Classification</v-card-title>
    </v-img>
    
    <v-card-title>Filename: {{ data.name }}</v-card-title>
    <v-card-subtitle>uploaded by {{ data.user }}</v-card-subtitle>

    <v-card-actions>
      <v-btn text style="color: blue;">Download</v-btn>
      <v-btn :to="{ name: 'Pages', params: { data: this.data, id: this.data.id } }" text style="color: orange;">View</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['data'],
    data: () => ({
      dialog: false,
    }),
  }
</script>