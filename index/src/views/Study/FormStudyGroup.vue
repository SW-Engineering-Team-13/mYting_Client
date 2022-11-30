<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row
        justify="center"
      >
        <v-col
          cols="6">
          <v-img
            max-height="200"
            max-width="1280"
            src="@/assets/MakeGroupImage.png"
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="6"
        >
          <v-textarea
            v-model="name"
            :counter="30"
            label="스터디 이름"
            rows="1"
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
            cols="6"
        >
          <v-textarea
            v-model="introduction"
            :counter="200"
            label="스터디 소개"
            rows="4"
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="6"
        >
          <v-textarea
            v-model="rules"
            :counter="400"
            label="스터디 규칙"
            rows="8"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        dense
      >
        <v-col
          cols="6">
          <v-select
            v-model="select"
            :items="memcount"
            :rules="[v => !!v || '정원제한을 설정해주세요!']"
            label="스터디 정원"
            required
          />
        </v-col>
      </v-row>

      <v-row
        justify="center">
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
<Nav />
</template>

<script>
import Nav from '@/views/Study/StudyNav.vue';

export default {
  data () {
    return {
      memcount:[
        '2','3','4','5','6'
      ]
    }
  },
  components: {
    Nav
  },
}
</script>