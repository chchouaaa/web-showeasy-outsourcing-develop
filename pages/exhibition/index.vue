<template>
  <div class="exhibition-view">
    <!-- Carousel -->
    <ExhibitionBannerArea />
    <ExhibitionCarousel />
    <v-responsive max-width="1247" class="mx-auto">
      <!-- Sort By -->
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <Breadcrumbs />
          </v-col>
          <v-col cols="12">
            <v-card rounded="xl" outlined elevation="0">
              <v-card-text>
                <v-row class="pl-3">
                  <v-col cols="12">
                    <h3>
                      <span class="warning--text">{{ exhibitionList.length }}</span>
                      Results
                    </h3>
                  </v-col>
                  <v-col class="sort-by-text">
                    <h3>Sort By</h3>
                  </v-col>
                  <v-col>
                    <SortByGroup @change="onChangeSort" />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--list-->
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-row no-gutters>
              <v-col cols="12">
                <v-card outlined class="rounded-xl">
                  <v-card-title>Hello Title</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <ExhibitionListCard
                  v-for="(exhibit, i) in currentPageExhitibCards"
                  :key="`exhibit_i_${i}`"
                  :item="exhibit"
                  @toggle-favorite="onToggleFavorite"
                />
              </v-col>
              <v-col cols="12">
                <v-pagination
                  class="exhibition-pagination"
                  v-model="page"
                  :length="pages"
                  color="transparent"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import ExhibitionBannerArea from '~/components/exhibition/ExhibitionBannerArea.vue'
import ExhibitionCarousel from '~/components/exhibition/ExhibitionCarousel.vue'
import SortByGroup from '~/components/exhibition/SortByGroup.vue'
import ExhibitionListCard from '~/components/exhibition/ExhibitionListCard.vue'
import { ExhibitCardStatus } from '~/utils/constant'

export default {
  name: 'ExhibitionView',
  meta: {
    name: 'Exhibition'
  },
  components: {
    Breadcrumbs,
    ExhibitionBannerArea,
    ExhibitionCarousel,
    SortByGroup,
    ExhibitionListCard,
  },
  asyncData() {
    // TODO: fetch list data api
    return {
      exhibitionList: Array(22).fill(1).map((_, i) => ({
        id: i + 1,
        title: 'CES 2022, International Consumer Electronics Show',
        location: 'America - U.S.A. - Las Vagas',
        rate: Math.ceil(Math.random() * 5),
        rateNumber: 344,
        exhibitNumber: Math.floor(Math.random() * 1000),
        visitorNumber: Math.floor(Math.random() * 1000),
        category: 'Aerospace, Maritime & Transportation',
        image: 'https://picsum.photos/180/120',
        description:
          'MEDICAL JAPAN is Japan’s leading trade show consisting of specialised shows for Medical, Elderly Care and Pharmacy industry. A large number of visitors specialised in medical ... ',
        startDate: new Date('2022-03-25').getTime(),
        endDate: new Date(`2022-04-0${i+1}`).getTime(),
        favorite: Math.floor(Math.random() * 10) > 5,
        recommend: Math.floor(Math.random() * 10) > 5,
        status: Math.floor(Math.random() * 5), // 0: upcoming, 1: finished, 2: canceled, 3: postponed, 4: ongoing
      }))
    }
  },
  data: () => ({
    StatusMap: ExhibitCardStatus,
    page: 1,
    perPage: 10,
    exhibitionList: [],
  }),
  computed: {
    pages() {
      return Math.ceil(this.exhibitionList.length / this.perPage)
    },
    exhibitionIdMap() {
      return this.exhibitionList.reduce((t, c) => {
        t[c.id] = c
        return t
      }, {})
    },
    currentPageExhitibCards() {
      const start = (this.page - 1) * this.perPage
      const end = Math.min(this.exhibitionList.length, this.page * this.perPage)
      return this.exhibitionList.slice(start, end)
    }
  },
  watch: {
    page() {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    onChangeSort(sortFnName) {
      if (typeof this[sortFnName] === 'function') {
        this[sortFnName]()
        this.page = 1
      }
    },
    onToggleFavorite(id) {
      const targetCard = this.exhibitionIdMap[id]
      targetCard.favorite = !targetCard.favorite
      // TODO: trigger favorite api
    },
    // sort functions
    sortByRate() {
      this.exhibitionList.sort((a, b) => b.rate - a.rate)
    },
    sortByRecommend() {
      const { recommend, normal } = this.exhibitionList.reduce((t, e) => {
        if (e.recommend) t.recommend.push(e)
        else t.normal.push(e)
        return t
      }, {
        recommend: [],
        normal: [],
      })
      this.exhibitionList = [].concat(recommend, normal)
    },
    sortByNewest() {
      this.exhibitionList.sort((a, b) => b.endDate - a.endDate)
    },
    sortByExhibitNumber() {
      this.exhibitionList.sort((a, b) => b.exhibitNumber - a.exhibitNumber)
    },
    sortByVisitorNumber() {
      this.exhibitionList.sort((a, b) => b.visitorNumber - a.visitorNumber)
    }
  }
}
</script>

<style scoped lang="scss">
.sort-by-text {
  max-width: 142px;
  > h3 {
    border-right: 1px solid #e5e5e5;
  }
}
</style>

<style lang="scss">
.exhibition-pagination {
  .v-pagination {
    justify-content: flex-end;
  }
  .v-pagination__navigation,
  .v-pagination__item  {
    box-shadow: none;
    margin: 0;
    min-width: 28px;
    &.v-pagination__item--active {
      color: $primary-orange !important;
    }
  }
}
</style>
