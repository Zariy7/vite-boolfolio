<script>
import { store } from '.././store.js';
import axios from 'axios';

export default {
  name: 'ShowProject',
  data() {
    return {
      store,
      project: null,
    }
  },
  created(){
    //console.log(this.$route.params.slug);
    this.getProject();
  },
  methods: {
    getProject(){
      axios.get(`http://127.0.0.1:8000/api/project/${this.$route.params.slug}`).then((response) =>{
        if(response.data.success){
          //console.log(response.data.response);
          this.project = response.data.response;
        }
        else{
          this.$router.push({ name: not-found });
        }
      });
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="btn btn-sm btn-primary" @click="console.log(this.project)">Check!</div>
    <h1>{{ this.project.title }}</h1>
  </div>
</template>

<style scoped>
</style>
