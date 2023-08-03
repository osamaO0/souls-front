<template>
    <v-container>
        <v-row>
            <v-col>
                <v-banner lines="one" text="My Profile" class="text-center text-subtitle-1 d-none d-md-flex darken" border
                    :stacked="false" />
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="text-center py-2" style="cursor: pointer; background-color: #64938c" v-ripple>
                    <v-icon icon="mdi-plus" class="float-left ml-2" />
                    Add new Pet
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="profile">You Don't have any pet now.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="d-flex justify-center">
                    <v-card width="1200" class="mt-3 pa-6 card">
                        <v-card-subtitle class="summary mb-3">My Adoptions & Lost Pets</v-card-subtitle>
                        <v-list :items="items" item-title="name" item-value="id" bg-color="#64938c" class="px-3">
                            <template v-slot:append>
                                <v-icon icon="mdi-arrow-right-thin" />
                            </template>
                        </v-list>
                    </v-card>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="d-flex justify-center">
                    <v-card width="1200" class="mt-3 pa-6 card">
                        <v-row>
                            <v-col cols="6">
                                <v-card-title style="color: #737373">Username</v-card-title>
                                <p class="ml-4" style="color: #838887">test@test.com</p>
                                <p class="ml-4" style="color: #838887">12131</p>
                                <span class="ml-4">
                                    <span class="font-weight-bold" style="color: #838786">Your Mobile Number</span>
                                    <p class="d-inline ml-2" style="color: #89918f">+201022655742</p>
                                </span>
                            </v-col>
                            <v-col cols="6">
                                <v-btn icon="mdi-file-edit-outline" class="float-right" size="small" flat variant="text"
                                    color="#64938c" />
                            </v-col>
                        </v-row>
                    </v-card>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: 'MyProfile',

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
};
</script>

<style scoped>
.darken {
    background-color: #64938c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    color: #013d40;
}

.profile {
    font-weight: 800;
    font-size: 16px;
    color: #64938c;
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