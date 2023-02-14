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
        <button
          @click="
            formDisplay = true;
            isSubmitButton = true;
          "
          class="btn btn-primary"
        >
          New Product
        </button>
        <div v-if="formDisplay">
          {{ JSON.stringify(formValues, null, 2) }}
          <form name="productForm">
            <div class="col-12">
              <div class="form-group">
                <label class="form-label" for="product_name"
                  >Product Name</label
                >
                <div class="form-control-wrap">
                  <input
                    type="text"
                    class="form-control"
                    id="product_name"
                    v-model="formValues.p_name"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="form-label" for="product_details"
                  >Product Details</label
                >
                <div class="form-control-wrap">
                  <textarea
                    id="product_details"
                    cols="30"
                    rows="6"
                    class="form-control"
                    v-model="formValues.p_details"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label" for="regular-price">Price</label>
                <div class="form-control-wrap">
                  <input
                    type="number"
                    class="form-control"
                    id="product_price"
                    v-model="formValues.p_price"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label" for="product_stock">Stock</label>
                <div class="form-control-wrap">
                  <input
                    type="number"
                    class="form-control"
                    id="product_stock"
                    v-model="formValues.p_stock"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="form-label" for="category">Category</label>
                <div class="form-control-wrap">
                  <select
                    id="product_category"
                    class="form-control"
                    v-model="formValues.p_cat"
                  >
                    <option value="">Select one</option>
                    <option value="1">Shirt</option>
                    <option value="2">Pant</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-12">
              <!-- <div class="upload-zone small bg-lighter my-2"> -->
              <label class="form-label" for="product_image"
                >Product Image</label
              >
              <input
                type="file"
                class="form-control"
                id="product_image"
                name="product_image"
              />

              <!-- </div> -->
            </div>
            <div class="col-12" v-if="isSubmitButton">
              <button
                type="button"
                @click="product_submit()"
                class="btn btn-primary"
              >
                SUBMIT
              </button>
            </div>
            <div class="col-12" v-if="isUpdateButton">
              <button
                @click="product_update"
                type="button"
                class="btn btn-primary"
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
        <div v-if="productList">
          <div v-for="post in posts" :key="post.id">
            <h2>{{ post.product_name }}</h2>

            <h5>Title description, Dec 7, 2020</h5>
            <div class="fakeimg">Fake Image</div>
            <p>
              {{ post.product_details }}
            </p>
            <button @click="product_delete(post.id)" class="btn btn-danger">
              Delete
            </button>
            <button
              @click="
                edit_product(post);
                isUpdateButton = true;
              "
              class="btn btn-info"
            >
              Edit
            </button>

            <hr />
          </div>
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
      formDisplay: false,
      productList: true,
      isSubmitButton: false,
      isUpdateButton: false,
      formValues: {
        p_name: "",
        p_details: "",
        p_price: "",
        p_stock: "",
        p_cat: "",
      },
    };
  },
  mounted() {
    this.get_products();
  },
  methods: {
    edit_product(product) {
      this.formDisplay = true;
      this.formValues.id = product.id;
      this.formValues.p_name = product.product_name;
      this.formValues.p_details = product.product_details;
      this.formValues.p_stock = product.product_stock;
      this.formValues.p_price = product.product_price;
      this.formValues.p_cat = product.product_category;
      this.productList = false;
    },
    product_update() {
      axios
        .put("http://127.0.0.1:8000/api/products/" + this.formValues.id, {
          product_name: this.formValues.p_name,
          product_details: this.formValues.p_details,
          product_price: this.formValues.p_price,
          product_stock: this.formValues.p_stock,
          product_category: this.formValues.p_cat,
        })
        .then((response) => {
          this.get_products();
          alert(response.data);
        });
    },

    product_delete(id) {
      axios
        .delete("http://127.0.0.1:8000/api/products/" + id)
        .then((response) => {
          this.get_products();
          alert(response.data.msg);
        });
    },
    product_submit() {
      axios
        .post("http://127.0.0.1:8000/api/products", {
          //prod_details: this.formValues,
          product_name: this.formValues.p_name,
          product_details: this.formValues.p_details,
          product_price: this.formValues.p_price,
          product_stock: this.formValues.p_stock,
          product_category: this.formValues.p_cat,
        })
        .then((response) => {
          this.formDisplay = false;
          this.formValues = {};
          this.get_products();
          alert(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    get_products() {
      axios.get("http://127.0.0.1:8000/api/products").then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>
<style>
</style>