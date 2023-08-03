<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-filter-menu" flat rounded variant="text" class="float-right mr-2" v-bind="props" />
            </template>

            <v-card color="#013d40" class="card">
                <v-toolbar color="#013d40">
                    <v-btn icon @click="dialog = false">
                        <v-icon icon="mdi-close" color="blue-grey-lighten-1" />
                    </v-btn>
                    <v-toolbar-title class="text-center text-blue-grey-lighten-1">Filter</v-toolbar-title>
                    <v-toolbar-items>
                        <v-btn variant="text" @click="dialog = false">
                            <v-icon icon="mdi-check" color="blue-grey-lighten-1" />
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <div class="text-center">
                        <v-btn variant="outlined" rounded="xl" prepend-icon="mdi-filter-remove-outline" color="white">
                            Clear All Filters
                        </v-btn>
                    </div>
                    <v-row>
                        <v-col>
                            <v-radio-group label="Category" class="mt-4 text-blue-grey-lighten-3">
                                <v-radio label="Lost" value="1"></v-radio>
                                <v-radio label="Found" value="2"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-radio-group label="Category" class="text-blue-grey-lighten-3">
                                <v-radio label="Male" value="1"></v-radio>
                                <v-radio label="Female" value="2"></v-radio>
                                <v-radio label="Unknown" value="3"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-radio-group label="Type" class="text-blue-grey-lighten-3">
                                <v-radio label="Dogs" value="1"></v-radio>
                                <v-radio label="Birds" value="2"></v-radio>
                                <v-radio label="Horses" value="3"></v-radio>
                                <v-radio label="Cats" value="4"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    name: 'AdoptionFilterDialog',

    data() {
        return {
            dialog: false,
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