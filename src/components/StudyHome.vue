<template>
  <v-container>
    <h1>mYting Study</h1>
    <p>mbti궁합이 맞는 사람들과 스터디그룹</p>
  <v-img
  max-width="1280"
  contain
  :src="require('@/assets/StudySearchImage.png')">
    </v-img>
    <v-img
  max-width="1280"
  contain
  :src="require('@/assets/StudyFormGroup.png')">
    </v-img>
    <v-img
  max-width="1280"
  contain
  :src="require('@/assets/StudyListImage.png')">
    </v-img>
</v-container>
</template>

<script>
export default {
  name: 'StudyHome',
  props: {
  }
}
</script>
