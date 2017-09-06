<template>
  <div class="circle-chart"></div>
</template>

<script>
import Echarts from 'echarts'
import { initChart } from './utils'
let chartInstance

export default {
  name: 'circle-chart',

  props: {
    title: String,
    subtitle: String,
    process: {
      type: Number,
      validator: val => val <= 1 && val >= 0
    },
    color: {
      type: String
    }
  },

  mounted () {
    chartInstance = Echarts.init(this.$el)
    initChart(chartInstance, {
      title: this.title,
      subtitle: this.subtitle,
      value: this.process,
      color: this.color
    })
  }
}

</script>

<style lang="scss" scoped>
.circle-chart {
  height: 15rem;
  width: 15rem;
}

</style>
