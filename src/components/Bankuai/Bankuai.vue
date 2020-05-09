<template>
  <div>
    <div>版块页面</div>
    <div>跳转到</div>
    <div>
      <router-link to="/bankuai/radio">radio</router-link>
      <router-link to="/bankuai/radio2">radio2</router-link>
    </div>
    <button v-on:click="to">跳转到主题</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Bankuai",
  // data() {

  //   }
  methods:{
    to:function(){
      this.$router.push({path:'/shouye',query:{userid:"66666666"}});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
