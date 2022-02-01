<template>
  <div class="bg-white shadow-sm rounded-md">
    <p class="text-2xl p-3 text-center text-blue-700">Reports Home</p>
    <hero-section message="Dashboard" />
    <line-chart v-if="chartData"
      style="height: 100%"
      chart-id="big-line-chart"
      :chart-data="chartData"
      :extra-options="extraOptions"
    >
    </line-chart>
  </div>
</template>
<script>
import * as chartConfig from "../../components/reports/chart.config";
import HeroSection from "../../components/common/hero-section.vue";
import LineChart from "../../components/reports/DoughNut";

export default {
  name: "ReportsHome",
  components: {
    HeroSection,
    LineChart,
  },
  data () {
    return {
      chartData: null,
      extraOptions: chartConfig.chartOptionsMain
    }
  },
  mounted() {
    this.fillChartData();
  },
  methods: {
    randomChartData(n) {
      const data = [];

      for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200));
      }

      return data;
    },
    fillChartData () {
      this.chartData = {
        datasets: [
          {
            fill: true,
            borderColor: chartConfig.chartColors.default.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: true,
            borderColor: chartConfig.chartColors.default.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          }
        ],
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      }
    }
  },
};
</script>
