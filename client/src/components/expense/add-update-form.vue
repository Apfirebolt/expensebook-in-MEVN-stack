<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Note" rules="required">
          <t-input-group
            label="Note"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="expenseData.note"
              type="text"
              name="Title"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Amount" rules="required">
          <t-input-group
            label="Expense Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="expenseData.amount"
              type="number"
              name="Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Due Date">
          <t-input-group
            label="Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="expenseData.date" />
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
  name: 'AddExpenseForm',
  props: {
    expense: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      expenseData: {},
    };
  },
  mounted() {
    if (this.expense) {
      this.expenseData = this.expense;
    }
  },
  methods: {
    submitForm() {
      if (this.expense) {
        this.$emit('updateExpense', this.expenseData);
      } else {
        this.$emit('submit', this.expenseData);
      }
    },
  },
};
</script>
