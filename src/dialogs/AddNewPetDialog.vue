<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" width="1024">
            <template v-slot:activator="{ props }">
                <v-btn block rounded class="mt-3 btn" color="#013d40" prepend-icon="mdi-plus" v-bind="props">Add New
                    Pet</v-btn>
            </template>
            <v-card>
                <v-card-title class="text-center" style="background-color: #013d40">
                    <div>
                        <span class="text-body-1 text-white">New Pet</span>
                        <v-btn rounded class="float-right" size="small" variant="text" @click="dialog = false">
                            <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                    </div>
                </v-card-title>
                <v-card-text class="card">
                    <v-container>
                        <v-row justify="center" class="pa-3">
                            <v-col cols="12" md="6">
                                <v-card max-width="500">
                                    <v-img src="https://souls.care/assets/addhere.svg" height="500" cover />
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Pet name" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-btn variant="plain" class="ma-2 text-capitalize" @click="dialog2 = true">
                                    Pet Type
                                </v-btn>
                                <v-dialog v-model="dialog2" width="auto">
                                    <v-card>
                                        <v-card-text>
                                            <v-list min-width="300" class="text-center" :items="items"></v-list>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Microchip Number" persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Retype Microchip Number" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Birthday" type="date" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <p class="gender">Gender</p>
                                <v-radio-group>
                                    <v-radio label="Male" value="1"></v-radio>
                                    <v-radio label="Female" value="2"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Weight Kg (optional)" type="number" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Behaviors (optional)" type="number" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea label="Further Details and Description" type="number" required></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-btn block color="#64938c" class="text-capitalize">Save</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'AddNewPitDialog',

    data: () => ({
        dialog: false,
        dialog2: false,
        items: [
            {
                title: 'Birds',
                value: 1,
            },
            {
                title: 'Dogs',
                value: 2,
            },
            {
                title: 'Horses',
                value: 3,
            },
            {
                title: 'Cats',
                value: 4,
            },
        ]
    }),
}
</script>

<style scoped>
.btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #cdeae4;
}

.card {
    background-color: #cdeae4;
}

.gender {
    font-weight: 700;
    font-size: 16px;
    color: #64938c;
}
</style>