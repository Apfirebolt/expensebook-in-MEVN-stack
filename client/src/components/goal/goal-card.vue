<template>
  <div class="p-2">
    <p class="truncate font-semibold text-center my-2">
      {{ goal.title }}
    </p>
    <p class="text-center text-gray-700 px-2 py-1 rounded my-2 font-medium">
      Amount required is <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">{{ goal.amount }}</span>
    </p>
    <p class="w-1/2 mx-auto truncate text-center px-2 py-1 rounded text-xs my-2 font-medium" :class="applyFilterClasses">
      {{ goal.status }}
    </p>
    <div class="flex items-center justify-center my-2">
      <span class="mx-1 cursor-pointer" @click.prevent="editGoal">
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
      <span class="mx-1 cursor-pointer" @click.prevent="deleteGoal">
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
  name: 'GoalCard',
  props: {
    goal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    applyFilterClasses() {
      const value = this.goal.status;
      if (value === 'Completed') {
        return 'bg-green-400 text-white';
      } if (value === 'In Progress') {
        return 'bg-yellow-100 text-yellow-800';
      }
      return 'bg-blue-500 text-gray-200';
    },
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.goalData);
    },
    deleteGoal() {
      this.$emit('deleteGoal', this.goal._id);
    },
    editGoal() {
      this.$emit('updateGoal', this.goal._id);
    },
  },
};
</script>
