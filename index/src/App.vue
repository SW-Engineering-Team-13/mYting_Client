<!-- 
      - Vue 애플리케이션의 최상위 컴포넌트
-->
/* eslint-disable */

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import Main from './components/common/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body > div{
  min-height: 300px;
  background-color: #fdfdfd;
}
</style>
