<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn block color="#013d40" class="text-white" v-bind="props">Report A Found Pet</v-btn>
            </template>

            <v-card color="#013d40" class="card">
                <v-toolbar color="#013d40">
                    <v-spacer />
                    <v-toolbar-items>
                        <v-btn variant="text" @click="dialog = false">
                            <v-icon icon="mdi-close" color="blue-grey-lighten-1" />
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-row class="text-center">
                        <v-col>
                            <p class="mb-4 text-white">Do You Have The Microchip No. of The Pet</p>
                            <v-text-field label="Microchip Number" class="text-white" variant="outlined"
                                v-model.trim="microchipNumber" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn block rounded="xl" color="#326866" :disabled="!formIsValid">Check Microchip</v-btn>
                            <v-btn block rounded="xl" color="#013d40" class="mt-3 mb-6">I Don't Have The Microchip</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'ReportFoundPetDialog',

    data() {
        return {
            dialog: false,
            microchipNumber: ''
        }
    },

    computed: {
        formIsValid() {
            return this.microchipNumber !== ''
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    min-width: 450px;
}
</style>