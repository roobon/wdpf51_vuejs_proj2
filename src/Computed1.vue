<template>
  {{ author.books.length > 0 ? "Yes" : "No" }}, {{ totalBooks }} Books
  <hr />
  {{ calculateBooks() }}
  <hr />
  {{ now }}
</template>
<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    totalBooks() {
      return this.author.books.length;
    },
    now() {
      return Date.now();
    },
  },
  methods: {
    calculateBooks() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
</script>