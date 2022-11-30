<template lang="">
  <v-bottom-navigation>
    <v-btn to="/study">
      <v-icon>mdi-home</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn to="/creategroup">
      <v-icon>mdi-pencil</v-icon>
      <span>Create Study</span>
    </v-btn>
    <v-btn to="/findgroup">
      <v-icon>mdi-view-list</v-icon>
      <span>Study List</span>
    </v-btn>
    <v-btn to="/mystudylist">
      <v-icon>mdi-view-list</v-icon>
      <span>My Study</span>
    </v-btn>
    <v-btn to="reservation">
      <v-icon>mdi-domain</v-icon>
      <span>Reservation</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
    
}
</script>