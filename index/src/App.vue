<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  </head>
  <v-app>
    <v-app-bar app
      height="80">
      <Header></Header>
    </v-app-bar>

    <v-main>
      <v-container 
        fluid
        >
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
      max-height="50">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>
