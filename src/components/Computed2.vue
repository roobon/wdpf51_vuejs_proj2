<template>
  {{ firstName }} {{ lastName }}
  {{ fullName }}
  <button v-on:click="fullName.set('Abdur Rahim')">Click Here</button>

  {{ fullName }}
</template>
<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
</script>