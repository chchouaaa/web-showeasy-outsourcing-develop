<template>
  <div class="featured-exhibiton-themes">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h4">
            Featured Exhibiton Themes
          </v-col>
        </v-row>
        <v-row v-for="k in 2" :key="k">
          <v-col v-for="k in 2" :key="k">
            <v-card align="center" flat style="position: relative">
              <v-img
                max-width="550"
                :src="require('@/assets/img/MedicalCare.png')"
                class="rounded-lg"
              ></v-img>
              <p class="card-text text-h5 white--text">Medical care</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h4 ml-12">
            Featured Exhibiton Themes
          </v-col>
        </v-row>
        <v-row v-for="k in 2" :key="k">
          <v-col cols="6" v-for="k in 2" :key="k">
            <v-card
              align="center"
              flat
              style="position: relative"
              class="my-card"
            >
              <v-img
                max-width="400"
                min-height="200"
                :src="require('@/assets/img/MedicalCare.png')"
                class="rounded-xl"
              ></v-img>
              <p class="card-text text-h5 white--text">Medical care</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="phone hidden-sm-and-up">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h6 ml-5">
            Featured Exhibiton Themes
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 3" :key="n">
                <v-container>
                  <v-row v-for="n in 2" :key="n">
                    <v-card
                      align="center"
                      flat
                      style="position: relative"
                      class="my-card ma-3 "
                    >
                      <v-img
                        max-width="400"
                        max-height="200"
                        :src="require('@/assets/img/MedicalCare.png')"
                        class="rounded-xl"
                      ></v-img>
                      <p class="card-text text-h5 white--text">Medical care</p>
                    </v-card>
                  </v-row>
                </v-container>
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
.row1 {
  position: relative;
}
.right-arrow {
  position: absolute;
  top: 20%;
  right: -20px;
  border: 2px solid;
  padding: 10px 15px;
  border-radius: 10px;
}
.card-text {
  position: absolute;
  top: 45%;
  left: 37.5%;
}
.my-card {
}
</style>