<template>
<v-btn
    @click="dialog=!dialog">
    다이얼로그
</v-btn>
  <v-dialog
    v-model="dialog"
    width="500"
  >

    <v-card>
      <v-btn
        @click="dialog=false">off</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default{
    data: () => ({
        clicked: false,
        dialog: false,
}),
}
</script>

<style>
</style>