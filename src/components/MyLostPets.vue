<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <v-btn icon="mdi-arrow-left" flat rounded variant="text" class="float-left ml-2" to="/" />
                    <p class="mt-3">My Lost Pets</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="text">You don't have any pet that is reported Lost.</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'MyLostPets',
}
</script>
  
<style scoped>
.text {
    font-weight: 400;
    font-size: 16px;
    color: #64938c;
}
</style>