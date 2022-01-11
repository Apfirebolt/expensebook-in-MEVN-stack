<template>
  <div class="p-2">
    <p class="truncate font-semibold text-center my-2">
      {{ borrow.borrowedFrom }}
    </p>
    <p class="truncate font-semibold text-center my-2">
      {{ borrow.note }}
    </p>
    <p class="text-center">
      {{ borrow.amount }}
    </p>
    <p class="truncate text-center">
      Borrowed on {{ borrow.borrowedOn | formatDateString }}
    </p>
    <p class="truncate text-center">
      Pay on {{ borrow.repayOn | formatDateString }}
    </p>
    <div class="flex items-center justify-center my-2">
      <span class="mx-1 cursor-pointer" @click.prevent="editBorrow">
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
      <span class="mx-1 cursor-pointer" @click.prevent="deleteBorrow">
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
  name: 'BorrowCard',
  props: {
    borrow: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteBorrow() {
      this.$emit('deleteBorrow', this.borrow._id);
    },
    editBorrow() {
      this.$emit('updateBorrow', this.borrow._id);
    },
  },
};
</script>
