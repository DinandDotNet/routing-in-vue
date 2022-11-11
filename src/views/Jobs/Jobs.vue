<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
  <div v-for="job in jobs" :key="job.id">
    <a class="jobs" :href="'/jobs/' + job.id">
      <span class="stretch">{{ job.title }}</span>
    </a>
  </div>
  </div>
  <div v-else>Loading Jobs ....</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted(){
  fetch(' http://localhost:3000/jobs')
  .then((res) => res.json())
  .then(data => this.jobs = data)
  .catch(err => console.log(err.message))
  }
};
function jobId(id) {
  return "/jobs/" + id;
}
</script>

<style>
.jobs {
  width: 500px;
  padding: 0 15px;
  background: lightgray;
  margin: 10px 35%;
  border-radius: 10px;
  color: black;
  display: inline-block;
}

.jobs:hover {
  background: darkgray;
}
.stretch {
  padding: 10px;
  display: inline-block;
  margin: 0 35px;
  transform: scale(2,1);
}
</style>