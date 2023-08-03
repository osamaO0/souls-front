<template>
    <v-layout>
        <v-app-bar color="#64938c" prominent>
            <v-app-bar-nav-icon variant="text" class="mr-6 d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-avatar size="80" class="mr-4 d-none d-md-flex">
                <v-img src="https://justfields.com/storage/projects/7M5rV059/download.webp" />
            </v-avatar>

            <v-btn flat v-ripple size="small" class="text-capitalize d-none d-md-flex btn" active
                variant="text" to="/">Home</v-btn>
            <v-btn flat v-ripple size="small" class="text-capitalize d-none d-md-flex" variant="text" to="/my-profile">My Profile</v-btn>
            <v-btn flat v-ripple size="small" class="text-capitalize d-none d-md-flex" variant="text" to="/adoption">Adoption</v-btn>
            <v-btn flat v-ripple size="small" class="text-capitalize d-none d-md-flex" variant="text" to="/lost-found">Lost & Found</v-btn>

            <v-spacer />

            <v-btn rounded>
                <v-icon icon="mdi mdi-google-translate" size="x-large" />
            </v-btn>
            <v-btn rounded>
                <v-icon icon="mdi mdi-account-lock" size="x-large" />
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-list nav bg-color="#64938c" height="200">
                <v-list-item>
                    <v-row class="ma-0">
                        <v-col cols="12" class="pa-0">
                            <v-img src="https://justfields.com/storage/projects/7M5rV059/download.webp" aspect-ratio="1/1"
                                cover>
                            </v-img>
                        </v-col>
                        <v-col cols="12" class="pa-2">
                            <v-row class="justify-end">
                                <v-col cols="12" class="mt-10">
                                    <p class="text-body-2">Welcome back</p>
                                    <p class="text-body-2">username</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main>
            <RouterView />
        </v-main>
        <Footer />
    </v-layout>
</template>

<script>
import { RouterView } from 'vue-router'
import Footer from './Footer.vue';

export default {
    name: 'Toolbar',

    components: { Footer },

    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'Home',
                value: 'home',
                props: {
                    prependIcon: 'mdi mdi-home',
                },
            },
            {
                title: 'My Profile',
                value: 'my profile',
                props: {
                    prependIcon: 'mdi mdi-account',
                },
            },
            {
                title: 'Adoption',
                value: 'adoption',
                props: {
                    prependIcon: 'mdi mdi-human-handsdown',
                },
            },
            {
                title: 'Lost & Found',
                value: 'lost & found',
                props: {
                    prependIcon: 'mdi mdi-allergy',
                },
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style scoped>
.btn {
    font-weight: 700;
    font-size: 12px;
    color: #cdeae4;
}
</style>