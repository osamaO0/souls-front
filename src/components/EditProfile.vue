<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <v-btn icon="mdi-arrow-left" flat rounded variant="text" class="float-left ml-2" to="/my-profile" />
                    <p class="mt-3">Edit My Profile</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card class="card" to="/change-mobile">
                    <v-btn icon="mdi-chevron-right" flat rounded variant="text" class="float-right mr-2" />
                    <p class="mt-3 ml-3">Change My Mobile Number</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card class="card" to="/change-password">
                    <v-btn icon="mdi-chevron-right" flat rounded variant="text" class="float-right mr-2" />
                    <p class="mt-3 ml-3">Change My Password</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card flat color="#cdeae4" max-width="600" style="margin: auto">
                    <form>
                        <v-row>
                            <v-col cols="12">
                                <label>
                                    Full name
                                    <v-text-field required type="text" model-value="Amr Mohamed" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Email
                                    <v-text-field model-value="test@test.com" disabled />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Civil / national ID No.
                                    <v-text-field model-value="123457" disabled />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Mobile Number
                                    <v-text-field model-value="+201022655742" disabled />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Birthday
                                    <v-text-field model-value="23/7/1990">
                                        <VueDatePicker v-model="date" utc style="color: #cdeae4" />
                                    </v-text-field>
                                </label>
                            </v-col>
                        </v-row>
                        <v-btn block color="#013d40" class="text-white">Save</v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'EditProfile',
}
</script>

<style scoped>
.card {
    background-color: #64938c;
    max-width: 1000px;
    margin: auto;
    cursor: pointer;
}
</style>