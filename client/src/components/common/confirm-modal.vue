<template>
  <form class="font-medium text-gray-700" @submit.prevent="submitForm">
    <p>
      {{ message }}
    </p>
    <div class="flex justify-between mt-6">
      <t-button type="button" variant="error" @click="$emit('cancel')">
        Cancel
      </t-button>
      <t-button type="submit">
        Submit
      </t-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    submitForm() {
      this.$emit('confirm');
    },
  },
};
</script>
