<template>
  <nav-bar>
      <template v-slot:center>
          <div>
             购物车 ( {{cartLength}} )
          </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
    name:'ShopNav',
    components:{
        NavBar,
    },
    computed: {
        ...mapGetters(['cartLength'])
    },
}
</script>

<style scoped>

</style>