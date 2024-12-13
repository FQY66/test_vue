<!--<script>-->
<!--export default {-->
<!--  name:'Side_Menu',-->
<!--  methods: {-->
<!--    handleOpen(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    },-->
<!--    handleClose(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div class="box">
    <t-menu theme="light" defaultValue="item1" @change="changeHandler" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1" href="/vue" target="_blank">仪表盘</t-menu-item>
      <t-menu-item value="item2">资源列表</t-menu-item>
      <t-menu-item value="item3">根目录</t-menu-item>
      <t-menu-item value="item4" :disabled="true">调度平台</t-menu-item>
      <t-menu-item value="item5">精准监控</t-menu-item>
      <t-menu-item value="item6">消息区</t-menu-item>
      <t-menu-item value="item7">个人中心</t-menu-item>
      <t-menu-item value="item8">视频区</t-menu-item>
      <t-menu-item value="item9">资源编辑</t-menu-item>
    </t-menu>

    <t-menu theme="light" defaultValue="dashboard" style="margin-right: 40px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        资源列表
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        根目录
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        调度平台
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        精准监控
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        消息区
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        个人中心
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        视频区
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        资源编辑
      </t-menu-item>
    </t-menu>

    <t-menu theme="dark" defaultValue="dashboard">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        资源列表
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        根目录
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        调度平台
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        精准监控
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        消息区
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        个人中心
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        视频区
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        资源编辑
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  name:'Side_Menu',
  components: {
    Icon,
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
};
</script>

<!--<template>-->
<!--&lt;!&ndash;    <el-col :span="12" width=100% height=100%>&ndash;&gt;-->
<!--&lt;!&ndash;      <h1>菜单栏</h1>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-menu&ndash;&gt;-->
<!--&lt;!&ndash;        default-active="2"&ndash;&gt;-->
<!--&lt;!&ndash;        class="el-menu-vertical-demo"&ndash;&gt;-->
<!--&lt;!&ndash;        @open="handleOpen"&ndash;&gt;-->
<!--&lt;!&ndash;        @close="handleClose"&ndash;&gt;-->
<!--&lt;!&ndash;        background-color="#545c64"&ndash;&gt;-->
<!--&lt;!&ndash;        text-color="#fff"&ndash;&gt;-->
<!--&lt;!&ndash;        active-text-color="#ffd04b">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-submenu index="1">&ndash;&gt;-->
<!--&lt;!&ndash;          <template slot="title">&ndash;&gt;-->
<!--&lt;!&ndash;            <i class="el-icon-location"></i>&ndash;&gt;-->
<!--&lt;!&ndash;            <span>导航一</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </template>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">分组一</template>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="1-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="1-2">选项2</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item-group title="分组2">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="1-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-submenu index="1-4">&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">选项4</template>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="1-4-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-submenu>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-menu-item index="2">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="el-icon-menu"></i>&ndash;&gt;-->
<!--&lt;!&ndash;          <span slot="title">导航二</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-menu-item index="3" disabled>&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="el-icon-document"></i>&ndash;&gt;-->
<!--&lt;!&ndash;          <span slot="title">导航三</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-menu-item index="4">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="el-icon-setting"></i>&ndash;&gt;-->
<!--&lt;!&ndash;          <span slot="title">导航四</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-menu>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-col>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;  </el-row>&ndash;&gt;&ndash;&gt;-->


<!--</template>-->

<style scoped>
.side-menu-full {
  width: 100%;
  height: 100%;
  display: block; /* 确保以块级元素展示，方便占满空间，根据实际情况也可能是flex等其他布局相关的设置 */
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 让内边距和边框包含在设定的宽度内，避免撑大元素 */
}
</style>
