<template>
    <p class="adoption">Lost & Found</p>
    <v-row class="mt-3">
        <v-col cols="3">
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-card height="200" width="200" class="card" color="#64938c" flat v-bind="props"
                        :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }">
                        <v-img src="https://souls.care/assets/icon/lost.svg" cover />
                    </v-card>
                </template>
            </v-hover>
        </v-col>
        <v-col cols="3">
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-card height="200" width="200" class="card" flat v-bind="props" :elevation="isHovering ? 12 : 2"
                        :class="{ 'on-hover': isHovering }">
                        <div style="position: relative; height: 100%;">
                            <v-img
                                src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FDlKW9mZMILIF3YAYms2B%2F15508162607.321676.jpeg?alt=media&token=45a752f2-43c2-4061-8280-6cdef99b789d"
                                cover></v-img>
                            <v-card-subtitle class="text-black text-center"
                                style="position: absolute; bottom: 0; width: 100%; font-weight: 800">
                                Lost
                            </v-card-subtitle>
                        </div>
                    </v-card>
                </template>
            </v-hover>
        </v-col>
        <v-col cols="3">
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-card height="200" width="200" class="card" flat v-bind="props" :elevation="isHovering ? 12 : 2"
                        :class="{ 'on-hover': isHovering }">
                        <div style="position: relative; height: 100%;">
                            <v-img
                                src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FGG9KaOTh712lzl1gGj5c%2F5432167750.926577.jpeg?alt=media&token=d259331b-3e89-49d4-859c-e117e3ecd5a9"
                                cover></v-img>
                            <v-card-subtitle class="text-black text-center"
                                style="position: absolute; bottom: 0; width: 100%; font-weight: 800">
                                Found
                            </v-card-subtitle>
                        </div>
                    </v-card>
                </template>
            </v-hover>
        </v-col>
        <v-col cols="3">
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-card height="200" width="200" class="card" color="#64938c" flat v-bind="props"
                        :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }">
                        <div class="d-flex align-center justify-center" style="height: 100%;">
                            <p>View More</p>
                        </div>
                    </v-card>
                </template>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'LostAndFound',
}
</script>

<style scoped>
.adoption {
    font-weight: 800;
    font-size: 16px;
    color: #64938c;
}

.card {
    border-radius: 15px;
    background-color: #cdeae4;
}
</style>