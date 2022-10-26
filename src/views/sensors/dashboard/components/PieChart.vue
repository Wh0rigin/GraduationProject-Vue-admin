<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { GetTotalByName } from '@/api/sensor'

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
    }
  },
  data() {
    return {
      chart: null,
      dataList: []
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
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.dataList = []
      GetTotalByName({ sensorName: 'temperature' }).then(response => {
        if (response.data.code == 200) {
          this.dataList.push({ name: '温度', value: response.data.data.total })
          GetTotalByName({ sensorName: 'humidity' }).then(response => {
            if (response.data.code == 200) {
              this.dataList.push({ name: '湿度', value: response.data.data.total })
              GetTotalByName({ sensorName: 'light' }).then(response => {
                if (response.data.code == 200) {
                  this.dataList.push({ name: '光照度', value: response.data.data.total })
                  GetTotalByName({ sensorName: 'lamp' }).then(response => {
                    if (response.data.code == 200) {
                      this.dataList.push({ name: '照明灯', value: response.data.data.total })
                      this.setOption(this.dataList)
                    }
                  })
                }
              })
            }
          })
        }
      })
    },
    setOption(data) {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['温度', '湿度',  '照明灯','光照度']
        },
        series: [
          {
            name: '传感数据总数',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: data,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
