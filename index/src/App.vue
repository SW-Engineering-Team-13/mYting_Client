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
              @click="(profile_dialog = !profile_dialog)"
            >
              Profile
            </v-btn>
            <v-btn
              @click="login_dialog = !login_dialog"
              color="pink accent-3"
              v-model="login"
            >
              <span v-if="login">Logout</span>
              <span v-else>Login</span>
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
              @click="login=true; loginBtn();"  
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
        <v-row
          dense
          justify="center"
          >
          <v-col
            cols="12">
            <v-text-field label="ID" />
          </v-col>
          <v-col
            cols="6"
          >
            <v-text-field 
              label="Password" 
              type="password"
            />
          </v-col>
          <v-col
            cols="6">
            <v-text-field 
              label="Password Check"
              type="password"
            />
          </v-col>
          <v-divider />
          <v-col
            cols="12">
            <v-text-field label="Nick Name" />
          </v-col>          
          <v-col
            cols="12">
            <v-text-field label="MBTI" />
          </v-col>          
          <v-col
            cols="6">
            <v-text-field label="Sex" />
          </v-col>          
          <v-col
            cols="6">
            <v-text-field label="Major" />
          </v-col>          
          <v-col
            cols="6">
            <v-text-field label="Student Number" />
          </v-col>          
          <v-col
            cols="6">
            <v-text-field label="Grade" />
          </v-col>          
          <v-col
            cols="12">
            <v-text-field label="Profile Message" />
          </v-col>          
          <v-col>
            <v-btn
              style="margin-left:10px;"
              color="blue"
              @click="register_dialog=false"
            >
                Register
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="profile_dialog"
    width="600"
  >
    <v-card
      height="600"
    >
      <v-card-title
        align="center"
      >
        <v-avatar
          size="200"
        >
          <v-img
            src="@/assets/INTJ.png"
          />
        </v-avatar>
      </v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
        <v-btn>
          Message
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { assertExpressionStatement } from '@babel/types';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
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