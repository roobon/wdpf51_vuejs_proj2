<template>
  <div class="container">
    <pre>
        {{ JSON.stringify(formValues, null, 2) }}
    </pre>
    <form v-on:submit.prevent="dataSubmit" action="">
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Name:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter name"
          v-model.trim="formValues.name"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model.lazy="formValues.email"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="age" class="form-label">Age:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter age"
          v-model.number="formValues.age"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="district" class="form-label">District:</label>
        <select class="form-control" v-model="formValues.district">
          <option value="">Select one</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Khulna">Khulna</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Gender:</label>
        <input
          type="radio"
          name="gender"
          v-model="formValues.gender"
          value="Male"
        />Male
        <input
          type="radio"
          name="gender"
          v-model="formValues.gender"
          value="Female"
        />Female
      </div>
      <div class="mb-3 mt-3">
        <label for="eduction" class="form-label">Education:</label>
        <select class="form-control" v-model="formValues.education" multiple>
          <option value="">Select one</option>
          <option value="SSC">SSC</option>
          <option value="HSC">HSC</option>
          <option value="Masters">Masters</option>
          <option value="Alim">Alim</option>
        </select>
      </div>
      <div class="mb-3 mt-3">
        <label for="courses" class="form-label"
          >Courses you are Interested:</label
        >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Python"
            v-model="formValues.courses"
          />
          <label class="form-check-label">Python</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="PHP"
            v-model="formValues.courses"
          />
          <label class="form-check-label">PHP</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Java"
            v-model="formValues.courses"
          />
          <label class="form-check-label">Java</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        district: "",
        gender: "",
        education: [],
        courses: [],
        age: "",
      },
    };
  },
  methods: {
    dataSubmit(event) {
      //event.preventDefault();
      console.log(this.formValues);
      alert(JSON.stringify(this.formValues, null, 2));
    },
  },
};
</script>

<style>
</style>