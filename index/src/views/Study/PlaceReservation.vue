<template>
  <v-container>
    <v-img
      max-height="200"
      max-width="1280"
      src="@/assets/PlaceReservation.png">
    </v-img>
  <a
    href="https://space.yonsei.ac.kr/"
    target="_blank"
  >강의동 세미나실 대관</a>|
  <a
    href="https://wlib.yonsei.ac.kr/relation/seat"
    target="_blank"
  >중앙도서관 세미나실 대관</a>
  <v-col
      cols="12"
      md="10"
    >
      <v-textarea
        v-model="place"
        :counter="30"
        label="대관 장소 입력"
        rows="2"
      ></v-textarea>
    </v-col>
    <v-app>
    <div>
      <v-btn
      color="primary"
      elevation="2"
      small
      @click="reservationDone"
      >대관완료
      </v-btn>

    </div>
  </v-app>
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