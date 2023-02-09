<template>
   {{ obj.nested.count }}
   <p>{{ obj.arr }}</p>
   <button v-on:click="mutateDeeply">Click Here</button>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      this.obj.nested.count++
      this.obj.arr.unshift('baz')
    }
  }
}
</script>