<template>
  <div
    class="
      flex flex-col
      justify-center
      bg-green-600
      overflow-hidden
      min-h-screen
    "
  >
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-8">
      <div
        class="
              bg-white
              sm:max-w-md
              sm:w-full
              sm:mx-auto
              sm:rounded-lg
              sm:overflow-hidden
            "
      >
        <div class="px-4 py-8 sm:px-10">
          <div>
            <h2 class="mb-4 text-center text-3xl font-medium text-gray-500">
              Sign Up
            </h2>
          </div>
          <div class="mt-6">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form
                class="text-gray-700 space-y-4 flex flex-col"
                @submit.prevent="handleSubmit(attemptSignUp)"
              >
                <div>
                  <ValidationProvider v-slot="{ errors }" name="Username" rules="required">
                    <t-input-group
                      label="Your Username*"
                      :feedback="errors[0]"
                      :variant="errors.length > 0 ? 'danger' : ''"
                    >
                      <t-input
                        v-model="user.username"
                        placeholder="Username"
                        type="text"
                        name="username"
                        :variant="errors.length > 0 ? 'danger' : ''"
                      />
                    </t-input-group>
                  </ValidationProvider>
                </div>
                <div>
                  <ValidationProvider v-slot="{ errors }" name="First Name" rules="required">
                    <t-input-group
                      label="First Name*"
                      :feedback="errors[0]"
                      :variant="errors.length > 0 ? 'danger' : ''"
                    >
                      <t-input
                        v-model="user.firstName"
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        :variant="errors.length > 0 ? 'danger' : ''"
                      />
                    </t-input-group>
                  </ValidationProvider>
                </div>
                <div>
                  <ValidationProvider v-slot="{ errors }" name="Last Name" rules="required">
                    <t-input-group
                      label="Last Name*"
                      :feedback="errors[0]"
                      :variant="errors.length > 0 ? 'danger' : ''"
                    >
                      <t-input
                        v-model="user.lastName"
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        :feedback="errors[0]"
                        :variant="errors.length > 0 ? 'danger' : ''"
                      />
                    </t-input-group>
                  </ValidationProvider>
                </div>
                <div>
                  <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                    <t-input-group
                      label="Email*"
                      :feedback="errors[0]"
                      :variant="errors.length > 0 ? 'danger' : ''"
                    >
                      <t-input
                        v-model="user.email"
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        :variant="errors.length > 0 ? 'danger' : ''"
                      />
                    </t-input-group>
                  </ValidationProvider>
                </div>
                <div>
                  <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:8">
                    <t-input-group
                      label="Password*"
                      :feedback="errors[0]"
                      :variant="errors.length > 0 ? 'danger' : ''"
                    >
                      <t-input
                        v-model="user.password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        :feedback="errors[0]"
                        :variant="errors.length > 0 ? 'danger' : ''"
                      />
                    </t-input-group>
                  </ValidationProvider>
                </div>
                <t-button type="submit">
                  Sign Up
                </t-button>
              </form>
            </ValidationObserver>
            <div class="flex items-center mt-4">
              <router-link :to="{ name: 'Login' }" class="text-blue-800">
                Already have an account ? Sign In
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async attemptSignUp() {
      const response = await this.$http.post('users/', this.user);
      if (response) {
        this.$toast.show({
          content: 'Your have been registered successfully, please login and continue.',
          type: 'success',
        });
        this.$router.push({ name: 'Login' });
      }
    },
  },
};
</script>
