<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
       <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Asset Type">
          <t-select
            v-model="investmentData.type"
            placeholder="Select Asset Type"
            :options="typeChoices"
            name="Asset Type"
          />
        </t-input-group>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Asset Name" rules="required">
          <t-input-group
            label="Asset Name"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="investmentData.assetName"
              type="text"
              name="Asset Name"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Amount" rules="required">
          <t-input-group
            label="Investment Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="investmentData.amount"
              type="number"
              name="Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
       <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Investment Duration">
          <t-select
            v-model="investmentData.duration"
            placeholder="Select Duration"
            :options="durationChoices"
            name="Duration"
          />
        </t-input-group>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Investment Desription (Optional)">
          <t-textarea
            v-model="investmentData.description"
            rows="10"
            cols="60"
            placeholder="Describe your investment in some detail"
          />
        </t-input-group>
      </div>
      <div v-if="investmentData.duration === 'Custom'" class="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Investment Start Date">
          <t-input-group
            label="Start Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="investmentData.startDate" />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Investment End Date">
          <t-input-group
            label="End Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="investmentData.endDate" />
          </t-input-group>
        </ValidationProvider>
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
  name: 'AddInvestmentForm',
  props: {
    investment: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      investmentData: {},
      typeChoices: ['Market Securities', 'Cryptocurrency', 'Fixed Deposit'],
      durationChoices: ['1 Month', '3 Months', '6 Months', '1 Year', 'Custom'],
    };
  },
  mounted() {
    if (this.investment) {
      this.investmentData = this.investment;
    }
  },
  methods: {
    submitForm() {
      if (this.investment) {
        this.$emit('updateInvestment', this.investmentData);
      } else {
        this.$emit('submit', this.investmentData);
      }
    },
  },
};
</script>
