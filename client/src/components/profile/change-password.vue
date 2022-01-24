<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="font-medium container py-3 px-4 text-gray-700 border-2 my-2 border-rose-600" @submit.prevent="handleSubmit(submitForm)">
      <h3 class="text-xl text-center text-red-600 my-2">
        CHANGE PASSWORD
      </h3>
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <ValidationProvider v-slot="{errors}" name="Current Password" rules="required">
          <t-input-group label="Enter Your Current Password" :feedback="errors[0]" :variant="errors.length > 0?'danger':''">
            <t-input v-model="password" type="password" name="Current Password" :variant="errors.length > 0?'danger':''" />
          </t-input-group>
        </ValidationProvider>
        <ValidationProvider v-slot="{errors}" name="Confirm Password" rules="required">
          <t-input-group label="Enter Your Password Again" :feedback="errors[0]" :variant="errors.length > 0?'danger':''">
            <t-input v-model="confirmPassword" type="password" name="Confirm Password" :variant="errors.length > 0?'danger':''" />
          </t-input-group>
        </ValidationProvider>
      </div>
      <div class="flex justify-center mt-6">
        <t-button type="submit">
          Change Password
        </t-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'ChangePasswordForm',
  data() {
    return {
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('changePassword', {
        password: this.password,
      });
    },
  },
};
</script>
