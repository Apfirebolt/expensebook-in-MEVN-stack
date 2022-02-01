<template>
  <div class="bg-white shadow-sm rounded-md">
    <p class="text-2xl p-3 text-center text-blue-700">Reports Home</p>
    <!-- <hero-section message="Dashboard" /> -->
    <line-chart v-if="loaded"
      style="height: 100%"
      chart-id="big-line-chart"
      :chart-data="chartData"
      :extra-options="extraOptions"
    >
    </line-chart>
    {{ loaded }}
    <p v-if="expenseAmount.length" class="text-red-500">{{ expenseAmount }}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as expenseTypes from '../../store/modules/expense/expense-types';
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
      loaded: false,
      extraOptions: chartConfig.chartOptionsMain
    }
  },
  computed: {
    ...mapGetters({
      allExpenses: expenseTypes.GET_ALL_EXPENSES,
      expenseCount: expenseTypes.GET_EXPENSE_COUNT,
    }),
    expenseAmount() {
      let expenseAmount = [];
      this.allExpenses.map((item) => {
        expenseAmount.push(item.amount);
      })
      return expenseAmount;
    },
    expenseLabels() {
      let expenseLabels = [];
      this.allExpenses.map((item) => {
        expenseLabels.push(item.note);
      })
      return expenseLabels;
    },
  },
  async created() {
    await this.getAllExpenses();
  },
  async mounted() {
    this.loaded = false;
    await this.fillChartData();
    this.loaded = true;
  },
  methods: {
    ...mapActions({
      getAllExpenses: expenseTypes.GET_ALL_EXPENSES_ACTION,
    }),
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
            data: this.expenseAmount
          },
        ],
        labels: this.expenseLabels
      }
    }
  },
};
</script>
