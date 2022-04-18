<template>
  <v-card
    :class="['exhibit-card', 'mb-5', 'rounded-xl', {
      'disabled': item.status === StatusMap.finished // finished
    }]"
    outlined
  >
    <v-row no-gutters>
      <v-col cols="3" class="pl-5" align-self="center">
        <CardStatus
          v-if="needLeftTagStatus(item.status)"
          :status="item.status"
          class="status-tag"
        />
        <v-img :src="item.image" />
      </v-col>
      <v-col class="card__right" cols="9">
        <v-btn
          v-if="item.recommend" color="warning"
          elevation="0"
          small
          :ripple="false"
          class="recommend-tag no-text-transform text-space-1 rounded-lg ml-4 mt-2"
        >
          <img class="mr-1" src="~/assets/img/icons/u-award.png" />
          Recommend
        </v-btn>
        <v-card-title class="exhibit-title pb-6 pr-14 pt-1">
          {{ item.title }}
          <v-icon class="heart-tag mr-5" color="warning" @click="onToggleFavorite(item.id)">
            {{ item.favorite ? 'mdi-heart' : 'mdi-heart-outline' }}
          </v-icon>
        </v-card-title>
        <v-card-subtitle class="py-0">{{ item.location }}</v-card-subtitle>
        <v-card-text class="d-flex py-1 align-center">
          <h4 class="d-inline warning--text">
            {{ item.rate }}
          </h4>
          <v-icon color="warning" class="mr-2">mdi-star</v-icon>
          <span class="grey--text">
            (
              {{ item.rateNumber }} reviews
            )
          </span>
        </v-card-text>
        <v-card-text class="py-1">
          <v-btn class="category-tag mb-2 rounded-xl" outlined plain small :ripple="false" color="warning">
            {{ item.category }}
          </v-btn>
          <div class="grey--text">
            {{ item.description }}
          </div>
        </v-card-text>
        <v-card-text class="pt-1 pb-2">
          <v-row align="center" justify="space-between" no-gutters>
            <v-col>
              <h3 class="font-weight-regular">
                {{ formatDate(item.startDate) }}
                -
                {{ formatDate(item.endDate) }}
              </h3>
            </v-col>
            <v-col class="text-right pr-2">
              <h3 class="font-weight-regular">
                Coming Soon in
                <span class="last-dates text-h6">15</span>
                days
              </h3>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardStatus from '~/components/exhibition/CardStatus.vue'
import { formatDate } from '~/utils/assist'
import { ExhibitCardStatus, needLeftTagStatus } from '~/utils/constant'

export default {
  name: 'ExhibitionListCard',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    CardStatus,
  },
  data: () => ({
    StatusMap: ExhibitCardStatus,
  }),
  methods: {
    formatDate,
    needLeftTagStatus,
    onToggleFavorite(id) {
      this.$emit('toggle-favorite', id)
    }
  }
}
</script>

<style scoped lang="scss">
.exhibit-card {
  &.disabled .card__right {
    opacity: 0.5;
  }
}

.exhibit-title {
  position: relative;
  .heart-tag {
    position: absolute;
    right: 0;
    top: 0.5em;
  }
}

.status-tag {
  position: absolute;
  top: 16px;
  left: 20px;
}

.recommend-tag {
  border: 1px solid $primary-light-orange;
  img {
    width: 14px;
  }
}

.category-tag {
  border-color: #e0e0e0;
}

.last-dates {
  color: #ef5a5a;
}
</style>
