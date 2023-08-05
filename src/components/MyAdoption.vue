<template>
    <v-container>
        <v-row>
            <v-col>
                <v-banner lines="one" text="My Adoptions" class="text-center text-subtitle-1 d-none d-md-flex darken" border
                    :stacked="false" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'MyAdoption',
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
  