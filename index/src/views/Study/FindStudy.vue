<template>
  <v-container>
    <v-img
      max-height="200"
      contain
      src="@/assets/FindGroupImage.png"
    />
    <div>
      <v-toolbar dark
        color="indigo darken-1"
      >
        <v-toolbar-title>스터디검색</v-toolbar-title>
        <v-autocomplete
          v-model="findStudy"
          :items="items"
          v-model:search-input="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="검색어를 입력하세요."
          solo-inverted
        />
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </v-toolbar>
    </div>
    <v-card class="StudyProfile">
      <v-card-title>스터디이름</v-card-title>
      <v-card-text>스터디소개</v-card-text>
      <v-card-text>스터디정원:1/10</v-card-text>
    </v-card>
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