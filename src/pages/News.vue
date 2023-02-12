<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h2>News Page</h2>
        <h5>Photo of me:</h5>
        <div class="fakeimg">Fake Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3 class="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <hr class="d-sm-none" />
      </div>
      <div class="col-sm-8">
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <h5>Title description, Dec 7, 2020</h5>
          <div class="fakeimg">Fake Image</div>
          <p>
            {{ post.body }}
          </p>
        </div>
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
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
<style>
</style>