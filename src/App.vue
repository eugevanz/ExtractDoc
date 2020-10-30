<template>
  <div>
    <v-navigation-drawer permanent expand-on-hover app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="margin-left: 10px;">
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/upload">
          <v-list-item-icon>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-icon>
        
          <v-list-item-content style="margin-left: 10px;">
            <v-list-item-title>Uploads Documents</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main><router-view/></v-main>
  </div>
</template>

<style>
body {
  font-family: "Lato";
}
</style>