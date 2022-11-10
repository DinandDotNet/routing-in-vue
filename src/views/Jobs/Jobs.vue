<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <a class="jobs" :href="'/jobs/' + job.id">
      <span class="stretch">{{ job.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Ninja ux designer", id: 1, details: "lorem" },
        { title: "Ninja web developer", id: 2, details: "lorem" },
        { title: "Ninja vue developer", id: 3, details: "lorem" },
      ],
    };
  },
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