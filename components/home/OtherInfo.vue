<template>
  <div class="other-info">
    <div class="computer hidden-sm-and-down">
      <v-container class="my-15">
        <v-row>
          <v-col v-for="k in 3" :key="k">
            <v-card>
              <v-container>
                <v-row>
                  <v-img
                    class="mx-auto my-10"
                    max-width="150"
                    :src="require('@/assets/img/OtherInfo.png')"
                  ></v-img>
                </v-row>
                <v-row>
                  <p class="mx-auto text-h5">Blog</p>
                </v-row>
                <v-row>
                  <v-btn
                    depressed
                    outlined
                    class="mx-auto mb-15 rounded-lg white"
                    >Explore More</v-btn
                  >
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="tablet d-none d-sm-flex d-md-none">
      <v-container class="my-15">
        <v-row v-for="k in 3" :key="k">
          <v-col>
            <v-card>
              <v-container>
                <v-row>
                  <v-col class="my-auto">
                    <v-conntainer class="my-auto">
                      <v-row>
                        <p class="mx-auto text-h5">Blog</p>
                      </v-row>
                      <v-row>
                        <v-btn
                          depressed
                          outlined
                          class="mx-auto rounded-lg white"
                          >Explore More</v-btn
                        >
                      </v-row>
                    </v-conntainer>
                  </v-col>
                  <v-col>
                    <v-img
                      class="mx-auto my-10"
                      max-width="150"
                      :src="require('@/assets/img/OtherInfo.png')"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="phone hidden-sm-and-up">
      <v-container class="my-15">
        <v-row v-for="k in 3" :key="k">
          <v-col>
            <v-card flat outlined class="rounded-xl">
              <v-container>
                <v-row>
                  <v-col class="my-auto">
                    <v-conntainer class="my-auto">
                      <v-row>
                        <p class="ml-6 mr-auto text-h5">Blog</p>
                      </v-row>
                      <v-row>
                        <v-btn
                          outlined
                          class="ml-6 mr-auto rounded-lg text-capitalize"
                          >Explore More</v-btn
                        >
                      </v-row>
                    </v-conntainer>
                  </v-col>
                  <v-col>
                    <v-img
                      class="mx-auto my-10"
                      max-width="150"
                      :src="require('@/assets/img/OtherInfo.png')"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
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
</style>