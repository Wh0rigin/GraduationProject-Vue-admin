<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { string } from 'clipboard'
import { GetRecentData } from '@/api/sensor'

const sensorColors = { 'temperature': '#40c9c6', 'humidity': '#36a3f7', "light": '#f4516c' }
// var timer = self.setInterval("clock()",1000);


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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    sensorName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      dataList: [],
      dateList: [],
      timer: null
    }
  },
  watch: {
    sensorName: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      clearInterval(this.timer)
      this.timer = null
      this.setTimer()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.setOptions(this.sensorName)
        }, 5000)
      }
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.sensorName)
    },
    setOptions(sensorName) {
      GetRecentData({ name: sensorName, limit: 7 }).then(response => {
        // console.log(response)
        if (response.data.code == 200) {
          this.dataList = []
          this.dateList = []
          for (let value of response.data.data.payload) {
            // console.log(value)
            this.dataList.push(value.Value)
            this.dateList.push(value.RecordTime)
          }
          // console.log(this.dateList)
          this.chart.setOption({
            xAxis: {
              data: this.dateList,
              boundaryGap: false,
              axisTick: {
                show: false
              }
            },
            grid: {
              left: 10,
              right: 10,
              bottom: 20,
              top: 30,
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              },
              padding: [5, 10]
            },
            yAxis: {
              axisTick: {
                show: false
              }
            },
            legend: {
              data: [this.sensorName]
            },
            series: [{
              name: this.sensorName, itemStyle: {
                normal: {
                  color: sensorColors[this.sensorName],
                  lineStyle: {
                    color: sensorColors[this.sensorName],
                    width: 2
                  }
                }
              },
              smooth: true,
              type: 'line',
              data: this.dataList,
              animationDuration: 2800,
              animationEasing: 'cubicInOut'
            },
            ]
          })
        }
      })
    }
  }
}
</script>
