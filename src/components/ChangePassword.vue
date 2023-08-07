<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <v-btn icon="mdi-arrow-left" flat rounded variant="text" class="float-left ml-2" to="/edit-profile" />
                    <p class="mt-3">Change My Password</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card flat style="background-color: #cdeae4; margin: auto" max-width="600">
                    <form>
                        <v-row>
                            <v-col cols="12">
                                <label>
                                    Old Password
                                    <v-text-field required type="password" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    New Password
                                    <v-text-field required type="password" />
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label>
                                    Retype New Password
                                    <v-text-field required type="password" />
                                </label>
                            </v-col>
                        </v-row>
                        <v-btn block color="#64938c" class="text-black">Save</v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ChangePassword',
}
</script>