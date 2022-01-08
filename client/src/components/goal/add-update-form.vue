<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium text-gray-700" @submit.prevent="handleSubmit(submitForm)">
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{ errors }" name="Title" rules="required">
          <t-input-group
            label="Title"
            :feedback="errors[0]"
            :variant="errors.length > 0 ? 'danger' : ''"
          >
            <t-input
              v-model="goalData.title"
              type="text"
              name="Title"
              :variant="errors.length > 0 ? 'danger' : ''"
            />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <t-input-group label="Goal Duration">
          <t-select v-model="goalData.duration" placeholder="Select Duration" :options="durationChoices" name="Duration" />
        </t-input-group>
        <t-input-group label="Goal Status">
          <t-select v-model="goalData.status" placeholder="Select Status" :options="statusChoices" name="Status" />
        </t-input-group>
      </div>
      <editor :value="goalData.content && goalData.content.html" placeholder="Your Goal Description" @update="handleContentUpdate" />

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
import Editor from '../../components/common/editor.vue';

export default {
  name: 'AddUpdateGoalForm',
  components: {
    Editor
  },
  props: {
    goal: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      goalData: {
        content: ''
      },
      durationChoices: ["1 Month", "3 Months", "4 Months", "6 Months", "9 Months", "1 Year"],
      statusChoices: ["In Progress", "Completed", "Not Yet Started"]
    };
  },
  mounted() {
    if (this.goal) {
      this.goalData = this.goal;
    }
  },
  methods: {
    submitForm() {
      if (this.goal) {
        this.$emit('updateGoal', this.goalData);
      } else {
        this.$emit('submit', this.goalData);
      }
    },
    handleContentUpdate(content) {
      this.goalData = {
        content: content
      };
    },
  },
};
</script>
