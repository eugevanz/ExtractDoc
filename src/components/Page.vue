<template>
    <v-app>
        <v-dialog v-model="dialog" width="640">
            <template v-slot:activator="{ on, attrs }">
                <v-card outlined>
                    <v-img height="240px" :src="data.filepath">
                        <v-card-title style="color: white; bottom: 0; left: 0; position: absolute;">{{ data.tagName }}</v-card-title>
                    </v-img>
                    <v-card-actions>
                        <v-btn text v-bind="attrs" v-on="on"><v-icon left>mdi-magnify</v-icon> Zoom</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
            <v-card>
                <v-img :src="data.filepath" height="100%" width="100%" @click="dialog = false"></v-img>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            dialog: false,
        }
    },
}
</script>