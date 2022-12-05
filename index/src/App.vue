<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  </head>
  <v-app>
    <v-app-bar
      absolute
      color="#ffffff"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-container>
        <v-row
          align="center"
        >
          <v-col>
            <v-card
              width="100"
              to="/"
              flat
            >
              <v-img 
                src="@/assets/logo.png" 
              />
            </v-card>
          </v-col>
          <v-col class="d-flex justify-end mb-6">
            <v-btn
              v-if="login"
              @click="(profile_dialog = !profile_dialog)"
            >
              Profile
            </v-btn>
            <v-btn
              v-if="login"
            >
              Message
            </v-btn>
            <v-btn
              @click="login_dialog = !login_dialog"
              color="pink accent-3"
              v-model="login"
              v-if="login === false"
            >
              <span>Login</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer />
      <template
        v-slot:extension
      >
        <v-tabs>
          <v-tab
            to="/">
            Home
          </v-tab>
          <v-tab
            to="/matching">
            Matching
          </v-tab>
          <v-tab
            to="/study">
            Study Group
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
      >
        <v-container>
          <router-view />
        </v-container>
      </v-sheet>      
    </v-main>
    <!-- <v-footer    >
      <v-card
        height="100"
        width="100%"
        color="grey-lighten-3"
        flat
        align="end"
      >
        <v-card-title>
          2022-2. Software Engineering Project
        </v-card-title>
        <v-card-text>
          Made by Lonely Guys
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>


  <v-dialog
    v-model="login_dialog"
    width="400"
  >
    <v-card>
      <v-card-title class="text-h5">
        Login
      </v-card-title>
      <v-card-text>
        <v-row
          dense
          justify="center"
          >
          <v-col
            cols="12">
            <v-text-field 
              label="ID" 
              v-model="login_data.id"
            />
          </v-col>
          <v-col
            cols="12">
            <v-text-field 
              label="Password" 
              type="password"
              v-model="login_data.pw"
          />
          </v-col>
          <v-col>
            <v-btn
              @click="login=true; login_dialog=false;"  
            >
                Login
            </v-btn>
            <v-btn
                style="margin-left:10px;"
                color="blue"
                @click="login_dialog = false; register_dialog=true"
            >
                Register
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="register_dialog"
    width="600"
  >
    <v-card>
      <v-card-title class="text-h5">
        Register
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12">
            <v-text-field 
              label="ID" 
              v-model="register.id"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="6"
          >
            <v-text-field 
              label="Password" 
              type="password"
              v-model="register.pw"
            />
          </v-col>
          <v-col
            cols="6">
            <v-text-field 
              label="Password Check"
              type="password"
              v-model="register.pw_check"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-divider />
          <v-col
            cols="12">
            <v-text-field 
              label="Nick Name" 
              v-model="register.nickname"
            />
          </v-col>   
        </v-row>
        <v-row>
          <v-col
            cols="12">
            <v-text-field label="Profile Message" />
          </v-col>          
        </v-row>
        <v-row>
          <v-col
            cols="6">
            <v-select
              label="Major" 
              :items="register.major"
            />
          </v-col>
          <v-col
            cols="6">
            <v-select
              label="Sex" 
              :items="register.sex"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="6">
            <v-select
              label="Student Number" 
              :items="register.student_number"
            />
          </v-col>          
          <v-col
            cols="6">
            <v-select
              label="Grade" 
              :items="register.grade"
            />
          </v-col>   
        </v-row>
        <v-row>
          <v-col
            align-self="center"
            cols="6"
          >
            <p style="text-align: center;">MBTI</p>
          </v-col>
          <v-col cols="6">
            <v-tabs slider-color="red">
              <v-tab>I</v-tab>
              <v-tab>E</v-tab>
            </v-tabs>
            <v-tabs slider-color="orange">
              <v-tab>S</v-tab>
              <v-tab>N</v-tab>
            </v-tabs>
            <v-tabs slider-color="yellow">
              <v-tab>T</v-tab>
              <v-tab>F</v-tab>
            </v-tabs>
            <v-tabs slider-color="green">
              <v-tab>J</v-tab>
              <v-tab>P</v-tab>
            </v-tabs>
          </v-col>
        </v-row>        
      </v-card-text>
      <v-card-actions>
        <v-row
          justify="center"
        >
          <v-btn
            width="40%"
            height="40"
            style="margin-left:10px;"
            color="blue"
            @click="register_dialog=false"
          >
              Register
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="profile_dialog"
    width="600"
  >
    <v-card
      height="600"
    >
      <v-card-title>
        <v-row
          justify="center"
        >
          <v-avatar
            size="200"
          >
            <v-img
              src="@/assets/INTJ.png"
            />
          </v-avatar>
        </v-row>
        <v-row
          justify="center"
        >
          <v-chip
            class="ma-2"
            color="blue"
            label
          >
            {{user_info.nickname}}
          </v-chip>
        </v-row>
        <v-row
          justify="center"
          style="font-size: medium; margin-top: 10px; margin-bottom: 10px;"
        >
          " {{user_info.profile_message}} "
        </v-row>
      </v-card-title>
      <v-divider />
      <v-card-text align="center">
        <v-row justify="center">
          <v-col cols="3">
            Sex
          </v-col>
          <v-col cols="3">
            <v-chip color="green">{{user_info.sex}}</v-chip>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="3">
            Major
          </v-col>
          <v-col cols="3">
            <v-chip color="green">{{user_info.major}}</v-chip>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="3">
            학번
          </v-col>
          <v-col cols="3">
            <v-chip color="green">{{user_info.student_number}}</v-chip>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="3">
            Grade
          </v-col>
          <v-col cols="3">
            <v-chip color="green">{{user_info.grade}}</v-chip>
          </v-col>
        </v-row>
        <v-row style="margin-top:10px; margin-bottom:10px;">
          <v-divider></v-divider>
        </v-row>
        <v-row
          justify="center"
        >
          <v-col cols="3">
            궁합 TOP 3
          </v-col>
          <v-col cols="6">
            <v-chip color="pink">aaaa</v-chip>
            <v-chip color="pink">aaaa</v-chip>
            <v-chip color="pink">aaaa</v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row 
          justify="center"
        >
          <v-btn
            width="40%"
            elevation="1"
          >
            Send Message
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    login: false,
    login_dialog: false,
    register_dialog: false,
    profile_dialog: false,
    overlay: true,
    login_data: {
      id: '',
      pw: '',
    },
    user_info: {
      nickname: '밥친구',
      profile_message: '밥 같이 먹어요. 우리. 그대만의 밥친구가 되어드릴게요.',
      sex: '남자',
      major: '소프트웨어학부',
      student_number: '2019',
      grade: '4',
    },
    register: {
      id: '',
      pw: '',
      pw_check: '',
      nickname: '',
      MBTI: '',
      sex: ['남자', '여자'],
      major: ['소프트웨어학부', '의공학부', '디자인예술학부', '디지털헬스케어'],
      student_number: ['2018', '2019', '2020', '2021', '2022', '2023'],
      grade: ['1', '2', '3', '4', '5', '6'],
      profile_message: ''
    }
  }),  

  methods: {
    loginBtn() {
      axios.get('http://localhost:8080/', {
        'id': this.login_data.id,
        'pw': this.login_data.pw,
      }).then(res => {
        console.log(res);
      }).then(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
*{
  text-decoration-line: none;
}
</style>