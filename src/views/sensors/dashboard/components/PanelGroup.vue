<template>
  <el-row :gutter="40" class="panel-group">
    
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-row :gutter="40" class="panel-group">
        <div class="card-panel" @click="handleSetLineChartData('temperature')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Temperature
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            温度
          </div>
        </div>
      </div>
    </el-row>
      <el-row :gutter="40" class="panel-group">
      <div class="card-panel" @click="handleSetLineChartData('temperature')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Temperature
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            温度
          </div>
        </div>
      </div>
    </el-row>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-row :gutter="40" class="panel-group">
        <div class="card-panel" @click="handleSetLineChartData('humidity')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Humidity
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            湿度
          </div>
        </div>
      </div>
      </el-row>
      <el-row :gutter="40" class="panel-group">
        <div class="card-panel" @click="handleSetLineChartData('humidity')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Humidity
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            湿度
          </div>
        </div>
      </div>
      </el-row>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-row :gutter="40" class="panel-group">
        <div class="card-panel" @click="handleSetLineChartData('light')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Light
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            光照度
          </div>
        </div>
      </div>
      </el-row>
      <el-row :gutter="40" class="panel-group">
        <div class="card-panel" @click="handleSetLineChartData('light')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Light
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          <div class="card-panel-num">
            光照度
          </div>
        </div>
      </div>
      </el-row>
      
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel-pie">
          <pie-chart height="300px" width="100%"  />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import PieChart from './PieChart.vue'

export default {
  components: {
    CountTo,
    PieChart
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    // margin-left: 10px;
    margin-bottom: 32px;
  }

  .card-panel-pie {
    height: 320px;
    
    cursor: pointer;
    font-size: 12px;
    position: relative;
    // overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
