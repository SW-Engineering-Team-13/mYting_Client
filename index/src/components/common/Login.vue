<template>
    <div class="text-center">
      <v-btn
        color="error"
        @click="overlay = !overlay"
      >
        Show Overlay
      </v-btn>
  
      <v-overlay 
        dark="true"
        :value="overlay"
        :opacity="opacity"
      ></v-overlay>
    </div>
</template>
<script>
  export default {
    data: () => ({
      overlay: false,
      opacity: 1,
    }),

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 2000)
      },
    },
  }
</script>

<style scoped>
</style>