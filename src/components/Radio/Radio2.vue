<template>
  <div>
    <div>radio2</div>
  </div>
</template>

<script>
export default {
  name: "Radio2",
  created: function() {
    console.log(this.$route.params);
  },
  data: function() {
    return {
      msg: "呵呵呵达"
    };
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
