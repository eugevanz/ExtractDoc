<template>
    <div>
        <v-hover>
            <template v-slot:default="{ hover }">
                <v-img :src="data" aspect-ratio="0.7">
                    <v-card-title style="color: white; bottom: 0; left: 0; position: absolute;">Classification</v-card-title>
                    <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#036358">
                            <v-btn @click.stop="dialog = true" icon><v-icon>mdi-magnify</v-icon></v-btn>
                        </v-overlay>
                    </v-fade-transition>
                </v-img>
            </template>
        </v-hover>

        <v-dialog v-model="dialog" max-width="640">
            <v-card>
                <v-img @click="overlay = false" height="90vh" :src="data"></v-img>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {
            dialog: false,
        }
    },
}
</script>