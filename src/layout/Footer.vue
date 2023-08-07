<template>
  <v-footer app name="footer" color="#013d40" class="py-3">
    <v-row>
      <v-col cols="10">
        <div class="d-inline">
          <p class="text-white mr-3 d-inline">©2020 Souls Kuwait</p>
          <router-link to="" class="d-inline text-decoration-none text-white font-weight-thin">Terms &
            Conditions</router-link>
        </div>
      </v-col>
      <v-col cols="2">
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