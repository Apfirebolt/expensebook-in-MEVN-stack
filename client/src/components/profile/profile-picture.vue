<template>
  <form enctype="multipart/form-data" class="border-2 font-medium border-rose-600 my-2 p-2" @submit.prevent="submitForm">
    <h3 class="text-xl text-center text-red-600 my-2">
      CHANGE PROFILE PICTURE
    </h3>
    <div class="space-y-2 flex justify-center">
      <input ref="fileinput" type="file" class="hidden" multiple @change="updateProfilePicture">
      <div class="mx-2">
        <p :class="errorText ? 'text-red-500': ''">
          Update Your Profile Picture
        </p>
        <p class="text-red-500">
          {{ errorText }}
        </p>
      </div>
      <t-button class="flex justify-right items-center" type="button" @click.prevent="$refs.fileinput.click()">
        Upload Profile Picture
      </t-button>
    </div>
    <div class="flex justify-between mt-4">
      <t-button type="submit">
        Update Profile Picture
      </t-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ChangeGeneralSettings',
  data() {
    return {
      profilePicture: null,
      errorText: '',
    };
  },
  methods: {
    updateProfilePicture() {
      this.profilePicture = { ...this.$refs.fileinput.files };
    },
    async submitForm() {
      if (!this.profilePicture) {
        this.errorText = 'No file chosen';
      } else {
        this.errorText = '';
        const formData = new FormData();
        formData.append('file', this.profilePicture[0]);
        this.$emit('updateSetting', formData);
      }
    },
  },
};
</script>
