<template>
  <div class="highlight-exhibitions">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h4">
            Highlight Exhibitions
          </v-col>
          <div class="right-arrow">
            <v-img
              max-width="20"
              max-height="20"
              :src="require('@/assets/svg/right-arrow.svg')"
            ></v-img>
          </div>
        </v-row>
        <v-row v-for="k in 3" :key="k">
          <v-col v-for="k in 2" :key="k">
            <v-card flat class="grey lighten-4 round-lg">
              <v-container>
                <v-row>
                  <v-col cols="4">
                    <v-img
                      max-width="200"
                      :src="require('@/assets/img/Exhibition.png')"
                      class="rounded-lg"
                    ></v-img>
                  </v-col>
                  <v-col>
                    <v-container>
                      <v-row
                        >MEDICAL JAPAN OSAKA - Int’l Medical and Elderly Care
                        Expo Osaka</v-row
                      >
                      <v-row>Asia．Osaka．Japan</v-row>
                      <v-row>
                        <v-container class="pl-0">
                          <v-row>
                            <v-col class="caption pl-0 mt-3 text"
                              >2022.02.24 - 2022.02.26</v-col
                            >
                            <v-col class="caption grey--text text--lighten-1"
                              >Coming soon in
                              <span class="orange--text text--darken-1 text-h5"
                                >1</span
                              >
                              day</v-col
                            >
                          </v-row>
                        </v-container>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h4 ml-12">
            Highlight Exhibitions
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 2" :key="n">
                <v-container>
                  <v-row v-for="n in 5" :key="n">
                    <v-col>
                      <v-card flat class="grey lighten-4 round-lg">
                        <v-container>
                          <v-row>
                            <v-col cols="4">
                              <v-img
                                max-width="200"
                                :src="require('@/assets/img/Exhibition.png')"
                                class="rounded-lg"
                              ></v-img>
                            </v-col>
                            <v-col>
                              <v-container>
                                <v-row
                                  >MEDICAL JAPAN OSAKA - Int’l Medical and
                                  Elderly Care Expo Osaka</v-row
                                >
                                <v-row>Asia．Osaka．Japan</v-row>
                                <v-row>
                                  <v-container class="pl-0">
                                    <v-row>
                                      <v-col class="caption pl-0 mt-3 text"
                                        >2022.02.24 - 2022.02.26</v-col
                                      >
                                      <v-col
                                        class="
                                          caption
                                          grey--text
                                          text--lighten-1
                                        "
                                        >Coming soon in
                                        <span
                                          class="
                                            orange--text
                                            text--darken-1 text-h5
                                          "
                                          >1</span
                                        >
                                        day</v-col
                                      >
                                    </v-row>
                                  </v-container>
                                </v-row>
                              </v-container>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-row>
      </v-container>
    </div>
    <div class="phone hidden-sm-and-up">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h6 ml-5">
            Highlight Exhibitions
          </v-col>
        </v-row>
        <v-row>
          <v-container class="mx-3 mr-6">
            <v-row v-for="n in 3" :key="n">
              <v-col v-for="n in 2" :key="n">
                <v-card class="pa-2 grey lighten-3" flat>
                  <v-container>
                    <v-row>
                      <v-img
                        max-width="150"
                        :src="require('@/assets/img/Exhibition.png')"
                        class="rounded-lg"
                      ></v-img>
                    </v-row>
                    <v-row>
                      <v-container>
                        <v-row class="text-caption">
                          International Consumer Electronics Show
                        </v-row>
                        <v-row class="text-caption grey--text text--lighten-1">
                          Asia．Osaka．Japan
                        </v-row>
                        <v-row class="little-text">
                          2022.02.24-2022.02.26
                        </v-row>
                        <v-row>
                          <p class="text-caption ml-auto">
                            <span class="orange--text text--darken-1 text-h5"
                              >1</span
                            >
                            day
                          </p>
                        </v-row>
                      </v-container>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-btn class="text-capitalize mt-5 px-10 mx-auto rounded-xl" outlined>
            see more
          </v-btn>
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
.text {
  text-align: center;
}
.little-text {
  font-size: 5px;
}
.v-btn--outlined {
  border: thin solid #000;
}
</style>