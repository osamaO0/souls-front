<template>
    <p class="profile">My Profile</p>
    <div class="d-flex justify-center">
        <v-card variant="outlined" width="800" class="text-center pa-4 card">
            <v-card-text>
                <span>You Don't have any pet now.</span>
                <!-- <v-btn block rounded class="mt-3 btn" color="#013d40" prepend-icon="mdi-plus">Add New Pet</v-btn> -->
                <AddNewPetDialog />
            </v-card-text>
        </v-card>
    </div>
    <div class="d-flex justify-center">
        <v-card width="1200" class="mt-3 pa-4 card">
            <v-card-subtitle class="summary">Summary</v-card-subtitle>
            <v-list :items="items" item-title="name" item-value="id" bg-color="#cdeae4" class="px-3">
                <template v-slot:append>
                    <v-btn color="#013d40" rounded size="x-small" class="text-white">0</v-btn>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import AddNewPetDialog from '../dialogs/AddNewPetDialog.vue';

export default {
    name: 'MyProfile',

    components: { AddNewPetDialog },

    data: () => ({
        items: [
            {
                name: 'My Pets',
                id: 1,
            },
            {
                name: 'My Adoptions',
                id: 2,
            },
            {
                name: 'My Lost Pets',
                id: 3,
            },
        ],
    }),
}
</script>

<style scoped>
.profile {
    font-weight: 800;
    font-size: 16px;
    color: #64938c;
}

span {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
}

.card {
    border-radius: 15px;
    background-color: #cdeae4;
}

.summary {
    font-weight: 500;
    font-size: 14px;
    color: #737373;
}
</style>