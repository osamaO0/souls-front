<template>
  <v-container>
    <v-row>
      <v-col>
        <Banner />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Profile />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Adoption />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LostAndFound />
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Banner from '../layout/Banner.vue';
import Profile from '../components/Profile.vue';
import Adoption from '../components/Adoption.vue';
import LostAndFound from '../components/LostAndFound.vue';
import Footer from '../layout/Footer.vue';

export default {
  name: 'Home',

  components: { Banner, Profile, Adoption, LostAndFound, Footer }
}
</script>