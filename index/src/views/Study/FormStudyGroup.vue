<template>
  <v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-img
      max-height="200"
      max-width="1280"
      src="@/assets/MakeGroupImage.png"
    />
    <v-col
        cols="12"
        md="10"
      >
        <v-textarea
          v-model="name"
          :counter="30"
          label="스터디 이름"
          rows="1"
        ></v-textarea>
      </v-col>

      <v-col
          cols="12"
          md="10"
        >
          <v-textarea
            v-model="introduction"
            :counter="200"
            label="스터디 소개"
            rows="4"
          ></v-textarea>
        </v-col>

    <v-col
        cols="12"
        md="10"
      >
        <v-textarea
          v-model="rules"
          :counter="400"
          label="스터디 규칙"
          rows="8"
        ></v-textarea>
      </v-col>

      <v-select
        v-model="select"
        :items="memcount"
        :rules="[v => !!v || '정원제한을 설정해주세요!']"
        label="스터디 정원"
        required
        ></v-select>

  <v-app>
    <div>
      <v-btn
      value="left"
      color="primary"
      elevation="2"
      small
      @click="MakeGroup"
      >개설하기
      </v-btn>

      <v-btn
      value="right"
      color="error"
      elevation="2"
      small
      @click="exit"
      >취소
      </v-btn>
    </div>
  </v-app>
  </v-form>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        memcount:[
          '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'
        ]
      }
    }}
</script>
