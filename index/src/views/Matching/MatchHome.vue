<template>
  <v-container>
    <v-row
      class="d-flex justify-center mb-6"
      dense
    >
      <v-col
        cols="6"
      >
        <v-card
          elevation="4"
          style="padding-top: 20px;"
        >
          <v-row class="text-center" align="center">
            <v-col>나의 MBTI 유형</v-col>
            <v-col>
              <v-chip
                class="ma-2"
                color="cyan"
                label
              >
                INTJ
              </v-chip>
            </v-col>
          </v-row>
          <v-row class="text-center" align="center">
            <v-col>나와 잘 맞는 MBTI 유형</v-col>
            <v-col>
              <v-chip
                class="ma-2"
                color="green"
                label
                v-for="mbti in good_mbti"
              >
                {{mbti}}
              </v-chip>
            </v-col>
          </v-row>
          <v-row class="text-center" align="center">
            <v-col>매칭하고 싶은 성별</v-col>
            <v-col>
              <v-tabs align-tabs="center">
                <v-tab>
                  남자
                </v-tab>
                <v-tab>
                  여자
                </v-tab>
              </v-tabs>              
            </v-col>
          </v-row>
          <v-divider style="margin-top:20px" />
          <v-row 
            class = "d-flex justify-center mb-6"
            style="margin-top: 20px;"
          >
            <v-btn 
              color="primary"
              @click="result_dialog=true;"
            >
              Matching Start
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container> 
  <v-dialog
    v-model="result_dialog"
    width="300"
    height="250"
    persistent
  >
    <v-card
      height="400"  
    >
      <v-card-title class="text-h5">
        대기열 등록 완료!
      </v-card-title>
      <v-card-text>
        매칭 완료시 상대방의 프로필과 
        <br>
        함께 쪽지로 안내됩니다.
        <br><br>
        좋은 인연 만드세요!
      </v-card-text>
      <v-card-actions>
        <v-row
          justify="center"
        >
          <v-btn
            width="50%"
            color="primary"
            to="/"
            @click="result_dialog=false"
          >
            확인
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      result_dialog: false,
      good_mbti: [ 'ESFP', 'ESTP', 'ISFP']
    }
  }
}
</script>