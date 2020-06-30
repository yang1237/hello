<template>
  <nav-bar class="nav-bar">
      <template v-slot:center>
          <div>
              购物街
          </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
    name:'HomeNav',
    components:{
        NavBar,
    }
}
</script>

<style scoped>
.nav-bar {
  background: var(--color-high-text);
  color: #fff;
  font-weight: 800;
}
</style>