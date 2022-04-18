<template>
  <v-btn
    class="rounded-lg px-2 no-text-transform text-space-1 text-capitalize" elevation="0"
    :color="statusColor[StatusText[status]]"
    :outlined="!isPostponed"
    :plain="!isPostponed"
    :ripple="false"
    small
  >
    {{ StatusText[status] }}
  </v-btn>
</template>

<script>
import { StatusText } from '~/utils/constant'

export default {
  name: 'CardStatus',
  props: {
    status: {
      type: Number,
    },
  },
  data: () => ({
    statusColor: {
      canceled: '#e99e9e',
      postponed: 'error',
      ongoing: 'warning',
    },
    StatusText,
  }),
  computed: {
    isPostponed() {
      return this.status === 3
    },
  },
}
</script>