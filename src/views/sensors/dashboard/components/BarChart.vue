<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { bookNumber, bookRentedNumber, bookAvailableNumber } from '@/api/book'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
  },
  data() {
    return {
      chart: null,
      chartData: [0, 0, 0]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    fetchData() {
      bookNumber().then(response => {
        console.log(response)
        if (response.data.code == 200) {
          this.chartData[0] = response.data.data.number
          bookRentedNumber().then(response => {
            if (response.data.code == 200) {
              this.chartData[1] = response.data.data.number
              bookAvailableNumber().then(response => {
                if (response.data.code == 200) {
                  this.chartData[2] = response.data.data.number
                  console.log(this.chartData)
                  this.setOptions(this.chartData)
                }
              })
            }
          })
        }
      })
    },
    initChart() {
      this.fetchData()
      console.log(this.chartData)
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['馆存书目', '借出书目', '剩余书目'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '数量',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.chartData,
          animationDuration
        }]
      })
    }
  }
}
</script>
