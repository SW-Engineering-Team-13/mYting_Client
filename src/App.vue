<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/findgroup">스터디찾기</router-link>|
      <router-Link to="/creategroup">개설하기</router-link>|
      <router-link to="/mystudylist">참여스터디</router-link>|
      <router-link to="/studyprofile">스터디프로필</router-link>|
      <router-link to="studyprofileEdit">스터디정보수정</router-link>|
      <router-link to="reservation">장소대관</router-link>
    </nav>
    <router-view/>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
