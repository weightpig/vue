<template>
  <el-container style="height:100%;border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>呵呵呵呵</span>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>论坛管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><el-link href="/" target="_blank" type="primary">主题分类</el-link></el-menu-item>
              <el-menu-item index="1-2"><el-link href="/" target="_blank" type="primary">版块分类</el-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>页面部分</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Shouye"
  // data() {

  //   }
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
