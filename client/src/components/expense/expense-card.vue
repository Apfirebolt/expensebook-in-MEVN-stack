<template>
  <div class="p-2 bg-red-200 rounded">
    <p class="truncate font-semibold text-center my-2">
      {{ expense.note }}
    </p>
    <p class="truncate text-center my-1">
      Rs {{ expense.amount }}
    </p>
    <p v-if="expense.expenseType" class="w-1/2 mx-auto truncate text-center my-2 text-white p-2 rounded" :class="expense.expenseType === 'Lending' ? 'bg-red-700' : 'bg-blue-500'">
      {{ expense.expenseType }}
    </p>
    <p class="truncate text-center my-1">
      Spent on {{ expense.date | formatDateString }}
    </p>
    <div class="flex items-center justify-center my-2">
      <span class="mx-1 cursor-pointer" @click.prevent="editExpense">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </span>
      <span class="mx-1 cursor-pointer" @click.prevent="deleteExpense">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpenseCard',
  props: {
    expense: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteExpense() {
      this.$emit('deleteExpense', this.expense._id);
    },
    editExpense() {
      this.$emit('updateExpense', this.expense._id);
    },
  },
};
</script>
