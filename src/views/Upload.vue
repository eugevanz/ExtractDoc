<template>
    <v-container>
        <v-card outlined>
            <v-card-title>Select the location of the files</v-card-title>
            <v-card-subtitle>You can select multiple files at the same time</v-card-subtitle>
            <v-card-text>
                <v-row style="align-items: center;">
                    <v-col>
                        <v-file-input @change="getImages" small-chips multiple label="File input"></v-file-input>
                    </v-col>
                    <v-col cols="2"><v-btn text style="color: blue;">Upload</v-btn></v-col>
                </v-row>
                
                
            </v-card-text>
        </v-card>
        <v-row>
            <v-col cols="6" sm="2" v-for="image in images" :key="image">
                <Page :data="image"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
    name: 'Upload',
    components: { Page },
    data() {
        return {
            images: []
        }
    },
    methods: {
        getImages() {
            let fileList = event.target.files;
            var temp = []
            if (fileList.length > 0) {
                fileList.forEach(image => {
                    if (image.type.startsWith('image/')){
                        let reader = new FileReader();

                        reader.onload = function (e) {
                            temp.push(e.target.result);
                        }
                        reader.readAsDataURL(image);
                    }
                });
            }
            
            this.images = temp;
        }
    }
}
</script>