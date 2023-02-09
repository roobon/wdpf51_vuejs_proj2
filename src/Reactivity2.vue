<template>
    {{ count }}
    <button v-on:click="increment">Click Here</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    this.increment()
    console.log(this.count)
  }
}

</script>