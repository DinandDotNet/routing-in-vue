<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <!-- <router-link :to="{name : 'jobdetails'}">JobDetails</router-link> -->
  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go Forward</button>
  <router-view />
  <footer>Footer place</footer>
</template>
<script>
export default {
  methods: {
    redirect() {this.$router.push({name: 'home'})},
    back() {
    this.$router.back()
    },
    forward() {this.$router.forward()},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

a {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
  padding: 10px;
  border-radius: 10px;
}
button {
margin: 0 10px;
padding: 10px;
border:none;
border-radius: 4px;

}
</style>
