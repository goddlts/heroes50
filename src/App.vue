<template>
  <div id="myapp">
    <!-- header -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- sidebar -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入AppHeader组件
import AppHeader from './components/AppHeader.vue';
// 导入AppSidebar组件
import AppSidebar from './components/AppSidebar.vue';

// ES6中模块化的语法，导出一个对象
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar
  },
  data () {
    return {
    };
  }
};
</script>

<style>
</style>
