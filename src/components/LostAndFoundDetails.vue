<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="text-center py-2" style="background-color: #64938c">
                    <v-btn icon="mdi-close" flat rounded variant="text" class="float-right mr-2" to="/" />
                    <p class="mt-3">Found</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="text-center card">
                    <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FDlKW9mZMILIF3YAYms2B%2F15508162607.321676.jpeg?alt=media&token=45a752f2-43c2-4061-8280-6cdef99b789d" />
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="py-2" id="card" elevation="6">
                    <v-card-subtitle class="ceres">Ceres</v-card-subtitle>
                    <v-row>
                        <v-col cols="3">
                            <v-card class="small-card">
                                <v-img src="../../public/cats.svg" class="img" />
                                <p class="mt-4 content">Cats</p>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="small-card">
                                <v-img src="../../public/female.svg" class="img" />
                                <p class="mt-4 content">Female</p>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="small-card">
                                <v-img src="../../public/date.svg" class="img" />
                                <p class="mt-4 content">2022-07-10</p>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="small-card">
                                <v-img src="../../public/kg.svg" class="img" />
                                <p class="mt-4 content">1</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <p class="ml-3 mt-4">Lost Area</p>
                    <v-row>
                        <v-col cols="6">
                            <v-card id="small-card">
                                <p class="mt-4 content">omariya</p>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card id="small-card">
                                <p class="mt-4 content">Block 5</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p class="ml-3 adoption">More Details</p>
                            <div class="ml-3 mt-3 div">
                                <span>gray small spot in his head</span>
                            </div>
                            <div class="ml-3 mt-11 text-center">
                                <v-btn color="#013d40" rounded="xl" flat size="large">Claim It</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LostAndFoundDetails',
}
</script>

<style scoped>
.card {
    margin: auto;
    background-color: #64938c;
    max-width: 600px;
}

#card {
    margin: auto;
    background-color: #cdeae4;
    max-width: 600px;
    width: 100%;
}

.ceres {
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    line-height: 26px;
    color: #000000;
}

.small-card {
    width: 100px;
    height: 6rem;
    background-color: #cdeae4;
    margin: auto;
    border-radius: 15px;
    border: solid #64938c;
    text-align: center;
}

#small-card {
    width: 230px;
    height: 3rem;
    background-color: #cdeae4;
    margin: 6px auto;
    border-radius: 15px;
    border: solid #64938c;
    text-align: center;
}

.img {
    height: 40px;
    margin-top: 10px;
}

.content {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64938c;
}

.adoption {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #64938c;
}

.div {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #013d40;
}
</style>