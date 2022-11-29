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
      style="height: 120px;"
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
          <v-col>
            <v-btn
              @click="overlay = true"
              color="blue-grey darken-1"
            >
              Profile
            </v-btn>
            <v-btn
              @click="login = !login"
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

    <v-footer
      class="d-flex justify-center mb-6"
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">@I hope our project ends safely and I hope everyone works hard until the end. Please don't let it go down.</strong>
          <v-spacer />
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Made by Lonely Guys</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    login: false,
    overlay: true,
  }),  
}
</script>

<style>
*{
  text-decoration-line: none;
}
</style>