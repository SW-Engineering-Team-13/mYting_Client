<template>
  <v-container>
    <v-row
      justify="center">
      <v-col
        cols="6">
        <v-img src="@/assets/PlaceReservation.png" />
      </v-col>
    </v-row>
      <v-row
        justify="center">
        <v-chip 
          class="ma-2"
          href="https://space.yonsei.ac.kr/"
        >
          강의동 세미나실
        </v-chip>
        <v-chip 
          class="ma-2"
          href="https://wlib.yonsei.ac.kr/relation/seat"
        >
          중앙도서관 세미나실
        </v-chip>
      </v-row>
    <v-row
      justify="center"
    >
      <v-col
        cols="6"
      >
        <v-textarea
          v-model="place"
          :counter="30"
          label="대관 장소 입력"
          rows="2"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-btn
        color="primary"
        elevation="2"
        small
        @click="reservationDone"
        to="/study"
      >대관완료
      </v-btn>
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