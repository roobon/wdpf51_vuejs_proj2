<template>
  <ol>
    <li v-for="(fr, i) in fruits" v-bind:key="i">{{ i }} -> {{ fr }}</li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      fruits: ["Mango", "Orange", "Apple", "Grape"],
    };
  },
};
</script>
