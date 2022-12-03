<template>
  <v-app>
    <div id="Result">
      <div class="Nickname">
        Other Nickname:
        <!--db받아오기-->
        <br /><br />
      </div>
      <div class="MBTI">
        Other MBTI:
        <!--db받아오기-->
        <br /><br />
      </div>
      <div class="Sex">
        Other Sex:
        <!--db받아오기-->
        <br /><br />
      </div>
      <v-btn class="Start" @click="matchingstart">Want Retry?</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    matchingstart: function () {
      window.open('/', '_blank')
    }
  }
}
</script>

<style>
#Result {
  text-align: left;
  font-size: 25pt;
}
</style>
