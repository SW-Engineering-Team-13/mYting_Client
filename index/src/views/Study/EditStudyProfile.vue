<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-col cols="12" md="10">
        <v-textarea
          v-model="name"
          :counter="30"
          :rules="nameRules"
          label="스터디 이름"
          rows="1"
        ></v-textarea>
      </v-col>

      <v-col cols="12" md="10">
        <v-textarea
          v-model="introduction"
          :counter="200"
          :rules="introductionRules"
          label="스터디 소개"
          rows="4"
        ></v-textarea>
      </v-col>

      <v-col cols="12" md="10">
        <v-textarea
          v-model="rules"
          :counter="400"
          :rules="rulesRules"
          label="스터디 규칙"
          rows="8"
        ></v-textarea>
      </v-col>

      <v-select
        v-model="select"
        :items="memcount"
        :rules="[(v) => !!v || '정원제한을 설정해주세요!']"
        label="스터디 정원"
        required
      ></v-select>

      <v-app>
        <div>
          <v-btn
            value="left"
            color="warning"
            elevation="2"
            small
            @click="editDone"
            >수정완료
          </v-btn>

          <v-btn value="right" color="error" elevation="2" small @click="exit"
            >취소
          </v-btn>
        </div>
      </v-app>
    </v-form>
  </v-container>

  <div v-show="is_show">
    <p>스터디가 수정되었습니다.</p>

    <button @click="handle_toggle" type="button">확인</button>
  </div>
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
        .post("/api/editstudy", {
          uid: uid,
          studyname: this.name,
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
      tthis.$router.push({ name: "study", params: { uid: $route.uid } });
    },
  },
};
</script>
