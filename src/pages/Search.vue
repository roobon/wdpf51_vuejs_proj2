<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12">
        <h2>Search Product</h2>
        <form v-on:submit.prevent="search">
          <input type="text" v-model="searchItem" />
          <button type="submit">Search</button>
        </form>
        With {{ searchItem }} total {{ serchResult.length }} results found.
        <hr />
        <ol>
          <li v-for="item in serchResult" :key="item.id">
            <h2>{{ item.product_name }}</h2>
            <h5>Title description, Dec 7, 2020</h5>
            <p>
              {{ item.product_details }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      searchItem: "",
      serchResult: [],
    };
  },
  methods: {
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search/", { item: this.searchItem })
        .then((response) => {
          this.serchResult = response.data;
          console.log(response.data);
        });
    },
  },
  mounted() {},
};
</script>
<style>
</style>