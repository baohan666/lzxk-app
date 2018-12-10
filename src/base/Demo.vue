<template>
  <div>
    <button @click="add">增加</button>   {{$store.state.count}}
  </div>
</template>
<script>
  import home from '../api/home/index.js'
  import {mapActions,mapGetters} from 'vuex'
  export default{
    components:{},
    props:{},
    data(){
      return {}
    },
    created(){
      home.getHomeData({"type":3}).then(res=>{
        console.log(res)
      });
    },
    methods:{
      ...mapActions([
        'add'
      ])
    },
    computed:{
      ...mapGetters([])
    },
    watch:{},
  }
</script>
<style scoped>
</style>
