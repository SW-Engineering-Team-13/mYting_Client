<template>  
  <v-container>
    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="700"
        to="/creategroup"
      >
        <v-img
          :src="require('@/assets/StudyFormGroup.png')"
        />
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="700"
        to="/findgroup"
      >
        <v-img
          :src="require('@/assets/StudySearchImage.png')"
        />
      </v-card>
    </v-row>

    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="700"
        to="/mystudylist"
      >
        <v-img
          :src="require('@/assets/StudyListImage.png')"
        />
      </v-card>
    </v-row>
  </v-container>
  <Nav />
</template>

<script>
import Nav from '@/views/Study/StudyNav.vue';

export default {
  components: {
    Nav
  },
  name: 'StudyHome',
}
</script>
