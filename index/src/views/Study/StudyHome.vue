<template>
  <v-container>
    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="800"
        to="/findgroup"
      >
        <v-img
          :src="require('@/assets/StudySearchImage.png')"
        />
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="800"
        to="/creategroup"
      >
        <v-img
          :src="require('@/assets/StudyFormGroup.png')"
        />
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center mb-6">
      <v-card 
        width="800"
        to="/mystudylist"
      >
        <v-img
          :src="require('@/assets/StudyListImage.png')"
        />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StudyHome',
  props: {
  }
}
</script>
