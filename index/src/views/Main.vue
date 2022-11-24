<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  </head>
  <div class="banner">
    <v-img
      src="@/assets/banner.jpg"
      max-width="1440"
      min-width="1200"
    >
      <div class="banner-text">
        <p class="main-text">우리 학교</p>
        <p class="main-text">찰떡궁합 내 친구</p>
        <p class="main-text">어디있니..?</p>
        <p class="side-text" style="  margin-bottom: 5px; ">MBTI를 통해 친구를 찾아보세요.</p>
        <v-btn
          color="secondary"
          elevation="2"
          x-large
        ><p class="side-text">GO!</p></v-btn>
      </div>
    </v-img>
  </div>
</template>

<script>
export default{
}
</script>

<style>
div.banner{
  display: flex;
  justify-content: center;
}
div.banner-text{
  margin-left: 10%;
  margin-top: 7%;
  color: white;
  text-shadow: 2px 2px 2px #999999;
  font-family: 'Noto Sans KR', sans-serif;
}
p.main-text{
  font-size: 32px;
  font-weight: bold;
}
p.side-text{
  padding: 3px 3px;
  font-size: 12px;
}
</style>