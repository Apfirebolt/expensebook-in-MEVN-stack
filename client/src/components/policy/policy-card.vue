<template>
  <div class="p-2 bg-blue-600 text-white rounded">
    <p class="truncate bg-green-500 p-2 font-semibold text-center my-2">
      {{ policy.vendorName }} - {{ policy.name }}
    </p>
    <p class="truncate font-semibold text-center my-2">
      {{ policy.description }}
    </p>
    <p class="truncate my-1 text-center">
      Policy Premium Period : {{ policy.premiumPeriod }}
    </p>
    <p class="truncate my-1 text-center">
      Cover Amount : Rs {{ policy.coverAmount }}
    </p>
    <p class="truncate my-1 text-center">
      Premium Amount : Rs {{ policy.premiumAmount }}
    </p>
    <div class="flex items-center justify-center my-2">
      <span class="mx-1 cursor-pointer" @click.prevent="editPolicy">
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
      <span class="mx-1 cursor-pointer" @click.prevent="deletePolicy">
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
  name: 'PolicyCard',
  props: {
    policy: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePolicy() {
      this.$emit('deletePolicy', this.policy._id);
    },
    editPolicy() {
      this.$emit('updatePolicy', this.policy._id);
    },
  },
};
</script>
