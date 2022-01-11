<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Income Source" rules="required">
          <t-input-group
            label="Income Source"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-select
              v-model="incomeData.source"
              placeholder="Select Income Source"
              :options="sourceChoices"
              name="Source"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div v-if="incomeData.period === 'One Time'" class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Income Date">
          <t-input-group
            label="Income Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="incomeData.date" />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Income Amount" rules="required">
          <t-input-group
            label="Enter Income Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="incomeData.amount"
              type="number"
              name="Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Income Duration">
          <t-select
            v-model="incomeData.period"
            placeholder="Select Duration"
            :options="periodChoices"
            name="Duration"
          />
        </t-input-group>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Income Desription">
          <t-textarea
            v-model="incomeData.content"
            rows="10"
            cols="60"
            placeholder="Describe your income in some detail"
          />
        </t-input-group>
      </div>

      <div class="flex justify-between mt-6">
        <t-button type="button" variant="error" @click="$emit('cancel')">
          Cancel
        </t-button>
        <t-button type="submit">
          Submit
        </t-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'AddUpdateIncomeForm',
  props: {
    income: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      incomeData: {
        content: '',
      },
      periodChoices: ['1 Month', '3 Months', '6 Months', '1 Year', 'One Time', 'NA'],
      sourceChoices: ['Monthly Full-Time Salary', 'Freelance', 'Investment', 'Other'],
    };
  },
  mounted() {
    if (this.income) {
      this.incomeData = this.income;
    }
  },
  methods: {
    submitForm() {
      if (this.income) {
        this.$emit('updateIncome', this.incomeData);
      } else {
        this.$emit('submit', this.incomeData);
      }
    },
    handleContentUpdate(content) {
      this.incomeData = {
        content,
      };
    },
  },
};
</script>
