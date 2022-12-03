<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row justify="center">
        <v-col cols="6">
          <v-img
            max-height="200"
            max-width="1280"
            src="@/assets/MakeGroupImage.png"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-textarea
            v-model="name"
            :counter="30"
            :rules="nameRules"
            label="스터디 이름"
            rows="1"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-textarea
            v-model="introduction"
            :counter="200"
            label="스터디 소개"
            rows="4"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-textarea
            v-model="rules"
            :counter="400"
            label="스터디 규칙"
            rows="8"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="6">
          <v-select
            v-model="select"
            :items="memcount"
            label="스터디 정원"
            required
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-btn
          value="left"
          color="primary"
          elevation="2"
          small
          @click="MakeGroup"
          to="/study"
          >개설하기
        </v-btn>
      </v-row>
    </v-form>
  </v-container>

  <div v-show="is_show">
    <p>스터디가 개설되었습니다.</p>

    <button @click="handle_toggle" type="button">확인</button>
  </div>

  <Nav />
</template>

<script>
import Nav from "@/views/Study/StudyNav.vue";

export default {
  data() {
    return {
      memcount: ["2", "3", "4", "5", "6"],
      name: "",
      nameRules: [
        (v) => !!v || "스터디 이름을 적으세요",
        (v) => (v && v.length <= 30) || "이름은 30자 이내여야 합니다.",
      ],
      introduction: "",
      introductionRules: [
        (v) => !!v || "스터디 소개를 적으세요",
        (v) => (v && v.length <= 200) || "소개는 200자 이내여야 합니다.",
      ],
      rules: "",
      rulesRules: [
        (v) => !!v || "스터디 규칙을 적으세요",
        (v) => (v && v.length <= 400) || "규칙은 400자 이내여야 합니다.",
      ],
      select: 2,
      is_show: false,
    };
  },
  components: {
    Nav,
  },
  methods: {
    MakeGroup() {
      this.$http
        .post("/api/createstudy", {
          uid: uid,
          studyname: this.name,
        })
        .then((res) => {
          this.handle_toggle();
          window.open("/study", "_blank");
        });
    },
    handle_toggle() {
      this.is_show = !this.is_show;
    },
  },
};
</script>
