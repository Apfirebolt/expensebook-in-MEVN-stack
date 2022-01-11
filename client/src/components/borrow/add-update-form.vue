<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Borrowed From" rules="required">
          <t-input-group
            label="Borrowed From"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="borrowData.borrowedFrom"
              type="text"
              name="Borrowed From"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
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
            label="Borrow Amount"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="borrowData.amount"
              type="number"
              name="Amount"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Repay Date">
          <t-input-group
            label="Repay On Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="borrowData.repayOn" />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Borrowed On">
          <t-input-group
            label="Borrowed On Date"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-datepicker v-model="borrowData.borrowedOn" />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Borrow Desription (Optional)">
          <t-textarea
            v-model="borrowData.note"
            rows="10"
            cols="60"
            placeholder="Add a Note related to this borrowing"
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
  name: 'AddBorrowForm',
  props: {
    borrow: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      borrowData: {},
    };
  },
  mounted() {
    if (this.borrow) {
      this.borrowData = this.borrow;
    }
  },
  methods: {
    submitForm() {
      if (this.borrow) {
        this.$emit('updateBorrow', this.borrowData);
      } else {
        this.$emit('submit', this.borrowData);
      }
    },
  },
};
</script>
