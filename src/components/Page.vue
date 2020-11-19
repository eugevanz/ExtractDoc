<template>
    <v-dialog v-model="dialog" width="640">
        <template v-slot:activator="{ on, attrs }">
            <v-card outlined style="margin: 8px">
                <v-img :src="data.filepath"></v-img>
                <v-card flat color="#194B99" style="margin-top: -6px;">
                    <div style="display: flex; align-items: center">
                        <span style="color: white; margin: 8px;">{{ data.tagName }}</span>
                        <v-spacer></v-spacer>
                        <v-divider vertical dark></v-divider>
                        <v-btn icon dark v-bind="attrs" v-on="on">
                            <v-icon>mdi-fullscreen</v-icon>
                        </v-btn>
                    </div>
                </v-card>
            </v-card>
        </template>
        <v-card>
            <v-img :src="data.filepath" height="100%" width="100%"></v-img>
        </v-card>
    </v-dialog>
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