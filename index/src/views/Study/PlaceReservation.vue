<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-img src="@/assets/PlaceReservation.png" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-chip class="ma-2" href="https://space.yonsei.ac.kr/">
        강의동 세미나실
      </v-chip>
      <v-chip class="ma-2" href="https://wlib.yonsei.ac.kr/relation/seat">
        중앙도서관 세미나실
      </v-chip>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-textarea
          v-model="place"
          :counter="30"
          :rules="placeRules"
          label="대관 장소 입력"
          rows="2"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
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

  <div v-show="is_show">
    <p>스터디 장소가 등록되었습니다.</p>

    <button @click="handle_toggle" type="button">확인</button>
  </div>

  <Nav />
</template>

<script>
import Nav from "@/views/Study/StudyNav.vue";

export default {
  data() {
    return {
      place: "",
      placeRules: [
        (v) => !!v || "스터디 이름을 적으세요",
        (v) => (v && v.length <= 30) || "장소는 30자 이내여야 합니다.",
      ],
      is_show: false,
    };
  },

  components: {
    Nav,
  },
  methods: {
    reservationDone() {
      this.$http
        .post("/api/placestudy", {
          place: place,
          studyid: $route.parmas.studyid,
        })
        .then((res) => {
          this.handle_toggle();
          this.push();
        });
    },

    handle_toggle() {
      this.is_show = !this.is_show;
    },

    push() {
      this.$router.push({
        name: "study",
        params: { uid: $route.uid, studyid: $route.studyid },
      });
    },
  },
};
</script>
