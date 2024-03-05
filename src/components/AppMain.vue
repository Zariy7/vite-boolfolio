<script>
import axios from 'axios';

export default {
  name: 'AppMain',
  data(){
    return {
      projects: [],
    }
  },
  created(){
    this.getProjects();
  },
  methods: {
    getProjects(){
      axios.get(`http://127.0.0.1:8000/api/projects`).then((response) =>{
        console.log(response.data.response);
      });
    }
  }
}
</script>

<template>
</template>

<style scoped>
</style>
