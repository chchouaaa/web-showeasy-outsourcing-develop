<template>
  <v-btn-toggle tile group v-model="activeIndex">
    <v-btn
      v-for="(sortBy, i) in sortByList"
      :key="`sort_by_${i}`"
      class="sort-by-item text-center"
      plain
      height="auto"
      :ripple="false"
    >
      {{ sortBy.text }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: 'SortByGroup',
  data: () => ({
    activeIndex: -1,
    sortByList: [
      {
        text: 'Ratings',
        sort: 'sortByRate',
      },
      {
        text: 'ShowEasy Recommended',
        sort: 'sortByRecommend',
      },
      {
        text: 'Date: Newest to oldest',
        sort: 'sortByNewest'
      },
      {
        text: 'Exhibitor Numbers',
        sort: 'sortByExhibitNumber'
      },
      {
        text: 'Visitor Numbers',
        sort: 'sortByVisitorNumber',
      },
    ],
  }),
  watch: {
    activeIndex(newIdx, oldIdx) {
      if (newIdx === undefined || newIdx === oldIdx) return
      this.$emit('change', this.sortByList[newIdx].sort)
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-by-item {
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ee9546;
  }
  &.v-btn--active {
    color: #ee9546;
  }
}
</style>
