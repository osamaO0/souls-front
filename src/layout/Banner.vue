<template>
    <v-banner lines="one" text="The First Website Dedicated to Pets in the Middle East"
        class="text-center text-subtitle-1 d-none d-md-flex darken" border :stacked="false" />
</template>
  
<script>
export default {
    name: 'Banner',
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
</style>
  