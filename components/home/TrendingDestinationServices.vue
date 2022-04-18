<template>
  <div class="trending-destination-services">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="row1 mb-5">
          <v-col class="orange--text text--darken-1 text-h4 mt-10">
            Trending Destination Services
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card style="position: relative">
              <v-img
                :src="require('@/assets/img/Taipei.png')"
                class="rounded-lg"
              ></v-img>
              <p class="card-text white--text text-h6">Taipei</p>
            </v-card>
          </v-col>
          <v-col cols="2" v-for="k in 4" :key="k">
            <v-card height="100%" style="position: relative">
              <v-img
                height="100%"
                :src="require('@/assets/img/Taipei.png')"
                class="rounded-lg"
              ></v-img>
              <p class="card-text white--text text-h6">Taipei</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-container>
        <v-row class="row1 mb-5">
          <v-col class="orange--text text--darken-1 text-h4 mt-10 ml-12">
            Trending Destination Services
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="1000">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 5" :key="n">
                <v-card height="100%" style="position: relative" class="mx-3">
                  <v-img
                    max-width="180"
                    min-height="200"
                    :src="require('@/assets/img/Taipei.png')"
                    class="rounded-xl"
                  ></v-img>
                  <p class="card-text white--text text-h6">Taipei</p>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-row>
      </v-container>
    </div>
    <div class="phone hidden-sm-and-up">
      <v-container>
        <v-row class="row1 mb-5">
          <v-col class="orange--text text--darken-1 text-h6 mt-10 ml-5">
            Trending Destination Services
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="1000">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 5" :key="n">
                <v-card height="100%" style="position: relative" class="mx-3">
                  <v-img
                    max-width="180"
                    min-height="200"
                    :src="require('@/assets/img/Taipei.png')"
                    class="rounded-xl"
                  ></v-img>
                  <p class="card-text white--text text-h6">Taipei</p>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-text {
  position: absolute;
  bottom: 0%;
  left: 10%;
}
</style>