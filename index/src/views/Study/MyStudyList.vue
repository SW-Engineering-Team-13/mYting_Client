<template>
  <v-container>
    <v-row
      justify="center"
    >
      <v-col
        cols="6">
        <v-img src="@/assets/MyStudyList.png"/>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        cols="6">
        <v-card class="StudyProfile" >
          <v-card-title>스터디이름</v-card-title>
          <v-card-text>스터디소개</v-card-text>
          <v-card-text>스터디정원: 1/10</v-card-text>
        </v-card>
      </v-col>
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
}
</script>