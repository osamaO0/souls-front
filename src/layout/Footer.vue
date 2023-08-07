<template>
  <v-footer app name="footer" color="#013d40" class="py-3">
    <v-row>
      <v-col>
        <div class="d-flex">
          <p class="text-white mr-3">©2020 Souls Kuwait</p>
          <router-link to="" class="text-decoration-none text-white font-weight-thin">Terms & Conditions</router-link>
        </div>
      </v-col>
      <v-col>
        <v-icon icon="mdi-instagram" style="cursor: pointer" color="white" size="x-large" class="float-right" />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>