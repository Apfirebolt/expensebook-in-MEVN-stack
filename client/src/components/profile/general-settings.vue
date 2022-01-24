<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium container py-3 px-4 text-gray-700 border-2 my-2 border-rose-600" @submit.prevent="handleSubmit(submitForm)">
      <h3 class="text-xl text-center text-red-600 my-2">
        CHANGE GENERAL SETTINGS
      </h3>
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{errors}" name="First Name" rules="required">
          <t-input-group label="Enter First Name" :feedback="errors[0]" :variant="errors.length > 0?'danger':''">
            <t-input v-model="firstName" type="text" name="First Name" :variant="errors.length > 0?'danger':''" />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{errors}" name="Last Name" rules="required">
          <t-input-group label="Enter Last Name" :feedback="errors[0]" :variant="errors.length > 0?'danger':''">
            <t-input v-model="lastName" type="text" name="Last Name" :variant="errors.length > 0?'danger':''" />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{errors}" name="Email" rules="required">
          <t-input-group label="Enter Email" :feedback="errors[0]" :variant="errors.length > 0?'danger':''">
            <t-input v-model="email" type="email" name="Email" :variant="errors.length > 0?'danger':''" />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="flex justify-center mt-6">
        <t-button type="submit">
          Change Settings
        </t-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'ChangeProfileSettingsForm',
  props: {
    profileData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
  mounted() {
    this.firstName = this.profileData.firstName;
    this.lastName = this.profileData.lastName;
    this.email = this.profileData.email;
  },
  methods: {
    submitForm() {
      this.$emit('updateProfile', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      });
    },
  },
};
</script>
