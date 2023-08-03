<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <LostAndFoundDialog />
                    <p class="mt-3">Lost & Found</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="6">
                <ReportFoundPetDialog />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xs="12" sm="6" class="justify-center" v-for="card in cards" :key="card">
                <v-card class="mx-auto" max-width="400" v-ripple>
                    <v-img class="align-end text-white" height="200" :src="card.img" cover>
                        <div style="position: absolute; top: 10px; left: 10px">
                            <v-chip variant="elevated" color="#013d40">
                                {{ card.status }}
                            </v-chip>
                        </div>
                        <v-card-title class="text-center">{{ card.title }}</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LostAndFoundDialog from '../dialogs/LostAndFoundDialog.vue'
import ReportFoundPetDialog from '../dialogs/ReportFoundPetDialog.vue'

export default {
    name: 'LostAndFoundPage',

    components: { LostAndFoundDialog, ReportFoundPetDialog },

    data() {
        return {
            cards: [
                { title: 'Ceres', img: 'https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FDlKW9mZMILIF3YAYms2B%2F15508162607.321676.jpeg?alt=media&token=45a752f2-43c2-4061-8280-6cdef99b789d', status: 'Lost' },
                { title: 'Bianca', img: 'https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FGG9KaOTh712lzl1gGj5c%2F5432167750.926577.jpeg?alt=media&token=d259331b-3e89-49d4-859c-e117e3ecd5a9', status: 'Found' },
                { title: 'Gigi', img: 'https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FUL287iuyOeYhc1uAm6MJ%2F6926780459.839727.jpeg?alt=media&token=96d53ad1-e2e6-4a35-8fe8-6c128ac8fa09', status: 'Lost' },
                { title: 'Manny', img: 'https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FVhuizjyI6LamucEPNuFW%2F7550570202.577116.jpeg?alt=media&token=1e85de02-56b1-48ad-9cda-5426486b15ae', status: 'Found' },
                { title: 'Luna', img: 'https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FQQmYLikgS9PU9zzFO0jf%2F13405344586.276089.jpeg?alt=media&token=6c8b5085-04c8-4306-bb2b-84dd5b0a4dda', status: 'Lost' },
            ]
        }
    }
}
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
</style>