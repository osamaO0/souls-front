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
                                    <v-img src="https://souls.care/assets/addhere.svg"
                                        class="animate__animated animate__pulse" height="500" cover />
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Pet name
                                    <v-text-field required type="text" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label class="clickable-label">
                                    Pet type
                                    <v-text-field required @click="dialog2 = true" />
                                </label>
                                <v-dialog v-model="dialog2" width="auto" location="Anchor">
                                    <v-card>
                                        <v-card-text>
                                            <v-list min-width="300" class="text-center" :items="items"></v-list>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Microchip Number
                                    <v-text-field required type="number" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Retype Microchip Number
                                    <v-text-field required type="number" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Birthday
                                    <VueDatePicker v-model="date" utc style="color: #cdeae4" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <p class="gender">Gender</p>
                                <v-radio-group>
                                    <v-radio label="Male" value="1" />
                                    <v-radio label="Female" value="2" />
                                </v-radio-group>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Weight Kg (optional)" type="number" required />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Behaviors (optional)" type="number" required />
                            </v-col>
                            <v-col cols="12">
                                <v-textarea label="Further Details and Description" type="number" required />
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
import { ref } from 'vue';

export default {
    name: 'AddNewPitDialog',

    setup() {
        const date = ref();

        return {
            date,
        };
    },

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

.clickable-label {
    cursor: pointer;
}
</style>