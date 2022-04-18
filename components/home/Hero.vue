<template>
  <div class="hero d-flex justify-center pa-0">
    <div class="computer hidden-sm-and-down">
      <v-img :src="require('@/assets/img/heroBG.png')" class="hero-img"></v-img>
      <v-container class="hero-content">
        <v-row>
          <v-col>
            <v-img
              max-width="500"
              :src="require('@/assets/svg/hero-title.svg')"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="white--text">
          <v-col>
            Your best guide from trip to show and from show to the world.
          </v-col>
        </v-row>
        <v-row class="white rounded-lg" style="width: 60%">
          <v-col cols="2">
            <v-btn
              depressed
              class="text-capitalize rounded-lg orange darken-1 white--text"
              >exhibition</v-btn
            >
          </v-col>
          <v-col cols="2">
            <v-btn
              depressed
              class="text-capitalize rounded-lg orange darken-1 white--text"
              >service</v-btn
            >
          </v-col>
          <v-col cols="7" align="start" class="my-auto">
            <div class="grey--text text--lighten-1">Where are you going?</div>
          </v-col>
          <v-col cols="1" class="my-auto">
            <v-img
              max-width="50"
              :src="require('@/assets/svg/search.svg')"
              class="mr-1"
            ></v-img>
          </v-col>
        </v-row>
        <v-row style="width: 60%">
          <v-col>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              food
            </v-btn>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              Medical
            </v-btn>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              Bicycle
            </v-btn>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              Pets
            </v-btn>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              Travel
            </v-btn>
            <v-btn
              depressed
              class="rounded-lg hero-down-btn text-capitalize mx-1"
            >
              Machinery
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-img :src="require('@/assets/img/heroBG.png')" class="hero-img"></v-img>
      <v-container class="hero-content">
        <v-row>
          <v-col>
            <v-img
              max-width="500"
              :src="require('@/assets/svg/hero-title.svg')"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="white--text mt-0">
          <v-col>
            Your best guide from trip to show and from show to the world.
          </v-col>
        </v-row>
        <v-row class="white rounded-lg" style="width: 60%">
          <v-col cols="11" align="start" class="my-auto">
            <div class="grey--text text--lighten-1">Where are you going?</div>
          </v-col>
          <v-col cols="1" class="my-auto mr-auto">
            <v-img
              max-width="20"
              min-width="20"
              :src="require('@/assets/svg/search.svg')"
              class="mr-2"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>





    <div class="phone hidden-sm-and-up">
      <v-img
        :src="require('@/assets/img/heroBG.png')"
        class="hero-img"
        min-height="500"
      ></v-img>
      <v-container class="hero-content">
        <v-row>
          <v-col>
            <v-img
              max-width="300"
              :src="require('@/assets/svg/hero-title.svg')"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="white--text mt-0">
          <v-col class="text-caption">
            Your best guide from trip to show and from show to the world.
          </v-col>
        </v-row>
        <v-row class="white rounded-lg" style="width: 80%">
          <v-col cols="10" align="start" class="my-auto">
            <div class="grey--text text--lighten-1">Where are you going?</div>
          </v-col>
          <v-col cols="2" class="my-auto ml-0">
            <v-img
              max-width="20"
              min-width="20"
              :src="require('@/assets/svg/search.svg')"
              class="ml-0"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
}
.hero-content {
  position: absolute;
  top: 30%;
  left: 5%;
}
.vertical-line {
  display: inline-block;
  border-left: 1.5px solid orange;
  margin: 0px 20px 0px 20px;
  height: 20px;
}
.hero-down-btn {
  opacity: 0.85;
}
.computer,
.tablet,
.phone {
  position: relative;
  width: 100%;
}
</style>