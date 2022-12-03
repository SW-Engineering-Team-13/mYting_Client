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
            <v-img 
              src="@/assets/logo.png" 
              max-width="100" 
            />
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
              label="ID" />
          </v-col>
          <v-col
            cols="12">
            <v-text-field 
              label="Password" 
              type="password"
          />
          </v-col>
          <v-col>
            <v-btn
              @click="login_dialog = false; login=true"  
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
    width="1200"
  >
    <v-card
      height="800"
    >
      <v-row>
        <v-col
          cols="4"
        >
          <v-card
            color="grey"
            height="100%"
          >
            <v-row
              justify="center"
              style="padding-top: 50px; padding-bottom: 50px;"
            >
              <v-avatar
                size="200"
                color="white"
              >
                <v-img
                  src="@/assets/intro_friend.png"
                />
              </v-avatar>
            </v-row>
            <v-row
              justify="center"
            >
              <h5>"프로필 메시지를 입력해주세요!"</h5>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="8">
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
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
  }),  
}
</script>

<style>
*{
  text-decoration-line: none;
}
</style>