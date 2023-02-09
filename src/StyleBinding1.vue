<template>
  <div :class="classObject">Hello</div>
  <button @click="toggleActive">Toggle</button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      error: true,
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive,
        error: this.error,
      };
    },
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.error = !this.error;
    },
  },
};
</script>
<style>
.active {
  background-color: green;
  font-weight: 800;
}
.error {
  color: red;
}
</style>