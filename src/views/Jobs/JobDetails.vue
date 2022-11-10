<template>
  <h1>Job details</h1>
  <p>Job output is: {{ $route.params.id }}</p>
</template>

<script>
export default {
props:['id'],
//   data() {
//   return{
//     id: this.$route.params.id
//     }
//   },
};
</script>

<style></style>
