<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  </head>
  <div class="banner">
    <v-carousel
      hide-delimiter-background      
    >
      <v-carousel-item>
        <v-img
          src="@/assets/banner.jpg"
        >
          <div class="banner-text">
            <p class="main-text">우리 학교</p>
            <p class="main-text">찰떡궁합 내 친구</p>
            <p class="main-text">어디있니..?</p>
            <p class="side-text" style="  margin-bottom: 5px; ">MBTI를 기반으로 친구를 찾아보세요.</p>
            <v-btn
              color="secondary"
              elevation="2"
              x-large
              to="/matching"
            ><p class="side-text">GO!</p></v-btn>
          </div>
        </v-img>
      </v-carousel-item>
      <v-carousel-item transition="fade-transition">
        <v-img
          src="@/assets/banner_study.jpg"
        >
          <div class="banner-text">
            <p class="main-text">혼자</p>
            <p class="main-text">공부하기</p>
            <p class="main-text">외롭지 않아요?</p>
            <p class="side-text" style="  margin-bottom: 5px; ">궁합 맞는 스터디메이트를 찾아보세요.</p>
            <v-btn
              color="secondary"
              elevation="2"
              x-large
              to="/study"
            ><p class="side-text">GO!</p></v-btn>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
  <v-container>
    <v-row
      justify="center"
    >
      <v-col cols="12"/>
      <v-col cols="1">
          <h4>OUR SERVICE</h4>
      </v-col>
      <v-col cols="12"/>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        cols="2">
        <v-card>
          <v-img
            src="@/assets/intro_friend.png"
            max-height="150"
          />
        </v-card>
      </v-col>
      <v-col
        cols="2">
        <v-card>
          <v-img
            src="@/assets/intro_date.png"
            max-height="150"
          />
        </v-card>
      </v-col>
      <v-col
        cols="2">
        <v-card>
          <v-img
            src="@/assets/intro_study.png"
            max-height="150"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row
      justify="center"
    >
      <v-col
        cols="2">
        <h5>Make Your Friends</h5>
      </v-col>
      <v-col
        cols="2">
        <h5>Find Your Soulmate</h5>
      </v-col>
      <v-col
        cols="2">
        <h5>Study with Schoolmates</h5>
      </v-col>
      <v-col cols="12"/>
    </v-row>

    <v-divider />

    <v-row
      justify="center"
    >
      <v-col cols="12"/>
      <v-col
        cols="1"
      >
          <h4>HOW IT WORKS</h4>
      </v-col>
      <v-col cols="12"/>
    </v-row>
    <v-row
      justify="center"
      style="margin-bottom: 20px;"
    >
      <v-col cols="4">
        <v-img
          src="@/assets/MBTI.png"
          max-height="250"
        />
      </v-col>
      <v-col 
        cols="4"
      >
        <v-card
          flat
        >
          <v-card-title
            style="opacity: 80%"
          >
            <h5>MBTI based Matching System</h5>
          </v-card-title>
          <v-card-text
            style="opacity: 60%"
          >
            <br>
            <p>mYting 서비스는 당신의 MBTI 유형에 따라 최적의 상대를 매칭해주는 서비스입니다.</p><br>
            <p>매칭을 신청하면, 미리 설정된 MBTI 궁합 테이블에 따라 당신의 유형과 궁합이 가장 잘 맞는 상위 3개의 MBTI 유형의 사람들과 매칭해 그들의 프로필을 전송해줍니다.</p><br>
            <p>쪽지를 통해 마음을 나누고 소울메이트로 발전할 수 있습니다.</p><br>
            <p>mYting을 통해 연세대 미래캠퍼스 학우들과 행복한 School Life를 즐겨보세요.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col cols="4">
        <v-img
          src="@/assets/intro_study.jpg"
          max-height="250"
        />
      </v-col>
      <v-col 
        cols="4"
      >
        <v-card
          flat
        >
          <v-card-title
            style="opacity: 80%"
          >
            <h5>Find Your Study Group</h5>
          </v-card-title>
          <v-card-text
            style="opacity: 60%"
          >
            <br>
            <p>mYting 서비스는 친구, 연인 매칭과 더불어 함께 공부할 친구를 찾을 수 있습니다.</p><br>
            <p>직접 스터디 그룹을 생성하거나, 또 다른 친구가 생성한 스터디 그룹의 참가 인원, 정보 등을 확인해보실 수 있습니다.</p><br>
            <p>MBTI 및 프로필을 확인하고 나와 잘 맞는 성공적인 스터디 그룹에 참가해보세요!</p><br>
            <p>혼자 하기 외로운 공부, 함께 같은 목표를 가지고 즐겁게 공부해보세요!</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default{
  data: () => ({
      absolute: true,
      overlay: false,
  }),  
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