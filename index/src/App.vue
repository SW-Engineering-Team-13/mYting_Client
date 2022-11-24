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
      <v-app-bar-title>
        <v-row
          align="center"          
          style="height: 100px;">
          <v-col>
            <v-img 
              src="@/assets/logo.png" 
              max-width="100" 
            />
          </v-col>
          <v-col>
            <v-btn>Profile</v-btn>
            <v-btn>Logout</v-btn>
          </v-col>
        </v-row>
      </v-app-bar-title>
      <v-spacer />
      <template v-slot:extension>
        <v-tabs right
        >
          <v-tab>
            <router-link to="/">Home</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/matching">Matching</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/study">Study Group</router-link>
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
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
    }),  
}
</script>

<style>
*{
  text-decoration-line: none;
}
</style>