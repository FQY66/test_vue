<template>
  <div>
    <el-container>
      <el-aside :width="asideWidth" style="min-height: 98vh;background: #00071D" >
        <div
          style="height:60px;color:white;display: flex;align-items:center;justify-content: center">
          <img src="@/assets/logo1.jpg" width="40px">

            <span class="logo_title" v-show="!iscollapse" >前端大作业</span>

        </div>
        <el-menu style="border: none" :collapse="iscollapse" :collapse-transition="false" background-color="#00071D" text-color="#f6f6f6" active-text-color="#08d9d6" router :default-active="$route.path" >

          <el-menu-item index="/a">
              <i class="el-icon-house"></i>
              <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/b">
            <i class="el-icon-house"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/c">
            <i class="el-icon-house"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/d">
            <i class="el-icon-house"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/f">
            <i class="el-icon-house"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>

          <el-submenu >
            <template slot="title">
              <i class="el-icon-menu" ></i>
              <span>二级菜单</span>
            </template>
            <el-menu-item index="/f">
              <i class="el-icon-house"></i>
              <span>二级选项1</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>


      <el-container>
        <el-header >
<!--          <i class="el-icon-open"  style="font-size: 30px" @click="handlecollapse"> </i>-->

         <div style="cursor: pointer">
           <i class="el-icon-s-fold" v-show="!iscollapse" style="font-size: 30px" @click="handlecollapse"></i>
           <i class="el-icon-s-unfold" v-show="iscollapse" style="font-size: 30px" @click="handlecollapse"></i>
         </div>

            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
              <el-breadcrumb-item ></el-breadcrumb-item>
            </el-breadcrumb>

          <div style="flex: 1;width: 0;display: flex;align-items: center;justify-content: end">
          <el-dropdown placement="bottom">
            <div style="display: flex;align-items: center; cursor:default">
              <i class="el-icon-quanping" style="width: 40px;margin: 0 5px"></i>
            <img src="@/assets/logo2.png" style="width: 40px; ">
              <span>管理员</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </div>
        </el-header>
        <el-main >
        </el-main>
      </el-container>

    </el-container>
  </div>

</template>

<script>

export default {
  name: "Home",
  data(){
    return {
      iscollapse:false,
      asideWidth:'200px'
    }
  },
  methods:{
    handlecollapse(){
      this.iscollapse=!this.iscollapse;
      this.asideWidth = this.iscollapse?'64px':'200px';
    }
  }
};
</script>
<style>
.el-menu-item:hover,.el-submenu__title:hover{
  color: #08d9d6 !important;
}
.el-submenu__title:hover i{
  color: #08d9d6 !important;
}
.el-menu-item:hover i{
  color: #08d9d6 !important;
}
.el-menu-item.is-active{
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important;

  border-radius: 10px;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;

}
.el-submenu__title{
  height: 40px;
  line-height: 40px;

}

.el-submenu .el-menu-item{
  padding-left: 21px!important;
}
.el-header {
  padding-left: 0;
}
.el-aside{
  transition: width .3s;

  box-shadow: 2px 2px 4px rgba(0,0,0,.6);

}
.logo_title{
  transition: all.3s;
  color: #f6f6f6;
  font-size: 20px;
}
.el-header{
  box-shadow: 0 0 2px 2px rgba(71,167,235,.86);
  display: flex;
  align-items: center;
}
</style>
