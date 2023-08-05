<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <v-btn icon="mdi-arrow-left" flat rounded variant="text" class="float-left ml-2" to="/my-profile" />
                    <p class="mt-3 text-center d-lg-none d-xl-flex">My Address</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="text">My Address</p>
            </v-col>
            <v-col>
                <AddAddressDialog />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="text">You didn't add any address yet.</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AddAddressDialog from '../dialogs/AddAddressDialog.vue';

export default {
    name: 'MyAddress',

    components: {AddAddressDialog},
}
</script>
  
<style scoped>
.text {
    font-weight: 400;
    font-size: 16px;
    color: #64938c;
}
</style>