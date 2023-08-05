<template>
    <v-dialog transition="dialog-bottom-transition" width="auto">
        <template v-slot:activator="{ props }">
            <v-btn variant="outlined" class="float-right" v-bind="props">Add New</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card class="card" width="450">
                <v-card-title class="text-center" style="background-color: #013d40">
                    <div>
                        <span class="text-body-1 text-white">New Pet</span>
                        <v-btn rounded class="float-right" size="small" variant="text" @click="isActive.value = false">
                            <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-col cols="12">
                        <AreaDialog />
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            Block*
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            Street*
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            Lane (Optional)
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            House*
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            Floor (Optional)
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                    <v-divider />
                    <v-col cols="12">
                        <label>
                            Apartment (Optional)
                            <v-text-field required type="text" />
                        </label>
                    </v-col>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import AreaDialog from '../dialogs/AreaDialog.vue'

export default {
    name: 'AddAddressDialog',

    data() {
        return {
            dialog: false,
        }
    },

    components: { AreaDialog }
}
</script>

<style scoped>
.card {
    background-color: #cdeae4;
}
</style>