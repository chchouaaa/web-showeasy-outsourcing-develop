<template>
  <div class="NavBar">
    <v-app-bar
      hide-on-scroll
      prominent
      elevation="0"
      scroll-target="#scrolling-techniques-4"
      class="app-bar mb-0 white"
      height="115px"
    >
    <v-container class="container pb-0">
      <v-row class="ma-0">
        <img src="@/assets/svg/logo.svg" alt="" class="px-5">
        <v-spacer></v-spacer>
          <v-btn
            depressed
            class="text-capitalize orange--text text--darken-1 white"
            >
          Blog
        </v-btn>
        <v-btn depressed class="white">
          ENG(US)
          <img src="@/assets/svg/down-arrow.svg" alt="" class="ml-5">
        </v-btn>
        <v-btn depressed class="white">
          USD
          <img src="@/assets/svg/down-arrow.svg" alt="" class="ml-5">
        </v-btn>
        <v-btn depressed class="white">
          <img src="@/assets/svg/help-circle.svg" alt="">
        </v-btn>
        <v-btn depressed class="white">
          <img src="@/assets/svg/shopping-bag.svg" alt="">
        </v-btn>
        <v-btn
          depressed
          dark
          class="orange darken-1 rounded-lg text-capitalize"
        >
          Log in/Sign up
        </v-btn>
      </v-row>
      <v-row class="navBar-row2 mt-5 ml-1">
        <v-btn depressed class="white text-capitalize" @click="onChangeRoute('/exhibition')">
          Exhibition
        </v-btn>
        <span class="vertical-line"></span>
        <v-btn depressed class="white text-capitalize">
          Rental cars
        </v-btn>
        <v-btn depressed class="white text-capitalize">
          Flowers
        </v-btn>
        <v-btn depressed class="white text-capitalize">
          Hotel
        </v-btn>
      </v-row>
    </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onChangeRoute(target) {
      this.$router.push(target)
    }
  }
}
</script>

<style lang="scss" scoped>
.NavBar {
  border-bottom: 1px solid #e5e5e5;
}
.vertical-line{
  display: inline-block;
  border-left: 1.5px solid;
  margin: 10px 20px 0 20px;
  height: 15px;
}
</style>