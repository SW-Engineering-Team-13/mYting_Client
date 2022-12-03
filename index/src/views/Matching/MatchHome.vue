<template>
  <div id="Matching">
    <div class="My">
      My MBTI:
      <!--db받아오기-->
      <br /><br />
    </div>
    <div class="Other">
      Other MBTI:
      <!--db받아오기-->
      <br /><br />
    </div>
    <div class="Sex">
      <v-app>
        <v-container>
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1" editable>
              Select Sex
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-select
                :items="userTypeList"
                placeholder="select"
                v-model="userType"
              ></v-select>
              <v-btn color="info" @click="e6 = 2" text>다음</v-btn>
              <v-btn text @click="e6">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-btn :href="`./wait`" target="Matching Start">Matching Start</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-container>
      </v-app>
    </div>
    <br /><br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      e6: 1,
      currentStep: 1,
      userType: '',
      userTypeList: ['남자', '여자', '랜덤']
    }
  }
}
</script>

<style>
#Matching {
  text-align: left;
  font-size: 25pt;
}

.Start {
  width: 275px;
  height: 50px;
  font-size: 25pt;
  margin: auto;
  display: block;
}
</style>
