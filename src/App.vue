<script>
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  components:{
    AppMain,
  },
  data(){
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <div class="btn btn-sm btn-primary m-3">
          <router-link :to="{ name: store.navbar[0].name}" class="text-white"> {{ store.navbar[0].label }} </router-link>
        </div>
        <div class="btn btn-sm btn-primary m-3">
          <router-link :to="{ name: store.navbar[1].name}" class="text-white"> {{ store.navbar[1].label }} </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/generals.scss';

</style>
