<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Policy Name" rules="required">
          <t-input-group
            label="Policy Name"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="policyData.name"
              type="text"
              name="Asset Name"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Policy Premium Period">
          <t-select
            v-model="policyData.premiumPeriod"
            placeholder="Select Policy Premium Period"
            :options="periodChoices"
            name="Policy Preimum Period"
          />
        </t-input-group>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Provider Name">
          <t-input-group
            label="Poilicy Vendor Name"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="policyData.vendorName"
              type="text"
              name="Vendor Name"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Policy Cover Amount" rules="required">
          <t-input-group
            label="Policy Cover Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="policyData.coverAmount"
              type="number"
              name="Cover Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Policy Premium Amount" rules="required">
          <t-input-group
            label="Policy Premium Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="policyData.premiumAmount"
              type="number"
              name="Premium Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Policy Desription (Optional)">
          <t-textarea
            v-model="policyData.description"
            rows="10"
            cols="60"
            placeholder="Describe your policy in some detail"
          />
        </t-input-group>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Policy Premium Date" rules="required">
          <t-input-group
            label="Policy Premium Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="policyData.premiumDate" />
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
  name: 'AddPolicyForm',
  props: {
    policy: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      policyData: {},
      periodChoices: ['1 Month', '3 Months', '6 Months', '1 Year'],
    };
  },
  mounted() {
    if (this.policy) {
      this.policyData = this.policy;
    }
  },
  methods: {
    submitForm() {
      if (this.policy) {
        this.$emit('updatePolicy', this.policyData);
      } else {
        this.$emit('submit', this.policyData);
      }
    },
  },
};
</script>
