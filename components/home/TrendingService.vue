<template>
  <div class="trending-service">
    <div class="computer hidden-sm-and-down">
      <v-container>
        <v-row class="row1 mb-5 mt-10">
          <v-col class="orange--text text--darken-1 text-h4">
            Trending Service
          </v-col>
          <div class="right-arrow">
            <v-img
              max-width="20"
              max-height="20"
              :src="require('@/assets/svg/right-arrow.svg')"
            ></v-img>
          </div>
        </v-row>
        <v-row>
          <v-col v-for="k in 4" :key="k">
            <v-card flat class="card">
              <v-img
                max-width="270"
                :src="require('@/assets/img/TrendingService.png')"
                class="inline-img"
              ></v-img>
              <v-container>
                <v-row>Pilatus International co.,LTD</v-row>
                <v-row>Booth booking</v-row>
                <v-row>
                  <v-col class="orange--text text--darken-1 caption">
                    4.6
                    <v-img
                      max-width="10"
                      max-height="10"
                      :src="require('@/assets/svg/start.svg')"
                    ></v-img>
                    <span class="grey--text text--lighten-2"
                      >(344 reviews)</span
                    >
                  </v-col>
                  <v-col class="orange--text text--darken-1">
                    $100 USD up
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
            Trending Service
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 4" :key="n">
                <v-card flat class="card mx-3 rounded-xl">
                  <v-img
                    max-width="270"
                    :src="require('@/assets/img/TrendingService.png')"
                    class="inline-img"
                  ></v-img>
                  <v-container>
                    <v-row>Pilatus International co.,LTD</v-row>
                    <v-row>Booth booking</v-row>
                    <v-row>
                      <v-col class="orange--text text--darken-1 caption">
                        4.6
                        <v-img
                          max-width="10"
                          max-height="10"
                          :src="require('@/assets/svg/start.svg')"
                        ></v-img>
                        <span class="grey--text text--lighten-2"
                          >(344 reviews)</span
                        >
                      </v-col>
                      <v-col class="orange--text text--darken-1">
                        $100 USD up
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
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
            Trending Service
          </v-col>
        </v-row>
        <v-row>
          <v-sheet class="mx-auto" max-width="800">
            <v-slide-group class="pa-4" center-active>
              <v-slide-item v-for="n in 4" :key="n">
                <v-card flat class="card mx-3 rounded-xl">
                  <v-img
                    max-width="270"
                    :src="require('@/assets/img/TrendingService.png')"
                    class="inline-img"
                  ></v-img>
                  <v-container>
                    <v-row>Pilatus International co.,LTD</v-row>
                    <v-row>Booth booking</v-row>
                    <v-row>
                      <v-col class="orange--text text--darken-1 caption">
                        4.6
                        <v-img
                          max-width="10"
                          max-height="10"
                          :src="require('@/assets/svg/start.svg')"
                        ></v-img>
                        <span class="grey--text text--lighten-2"
                          >(344 reviews)</span
                        >
                      </v-col>
                      <v-col class="orange--text text--darken-1">
                        $100 USD up
                      </v-col>
                    </v-row>
                  </v-container>
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
.card {
  border: 0.5px solid rgba(200, 200, 200, 0.5);
}
.inline-img {
  display: inline-block;
}
</style>