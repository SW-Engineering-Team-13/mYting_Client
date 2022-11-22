<template>
    <v-row 
    align="center"
    justify="space-between">
        <div>
        </div>
        <div>
            <v-btn text>
                <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn text>
                <router-link to="/intro">Introduction</router-link>
            </v-btn>
            <v-btn text>
                <router-link to="/matching">Matching</router-link>
            </v-btn>
            <v-btn text>
                <router-link to="/study">Study Group</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/login">Profile</router-link>
            </v-btn>
            <v-btn text>
                <router-link to="/login">Login</router-link>
            </v-btn>
        </div>
    </v-row>            
</template>

<script>
  export default {
    data: () => ({
      absolute: true,
      overlay: false,
    }),
  }
</script>

<style>
a{
    text-decoration:none; 
    color:#333;
}
</style>