<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <div v-show="type === 'A'">A with show</div>
</template>
<script>
export default {
  data() {
    return {
      type: "B",
    };
  },
};
</script>
