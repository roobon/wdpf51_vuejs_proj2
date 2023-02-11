<template>
  {{ name }}
  <button @click="name = 'Karim'">Click here</button>
  <button @click="name = 'Rafiq'">Click here</button>
  <button @mouseover="setName('Tokey')">Name change with Method</button>
  <hr />
  {{ count }}
  <button @mouseover="count++">Count + 1</button>
  <button @mouseover="count--">Count - 1</button>
  <button @mouseover="count += 5">Count + 5</button>
  <button @mouseover="count -= 5">Count - 5</button>
  <button @click="greet">GREET</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Rafiq",
      count: 0,
    };
  },
  methods: {
    setName(x) {
      this.name = x;
    },
    greet(event) {
      alert(`Hello ${this.name}`);
    },
  },
};
</script>

<style>
</style>