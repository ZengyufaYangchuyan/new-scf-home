<template>
  <div class='cms-system'>
    <my-header></my-header>
    <div class='cms-container'>
      <div class='menu-scroll-wrap'>
        <my-menu
          :open-child-menu='openChildMenu'
          :default-active='defaultActive'
          :menus='menus'>
        </my-menu>
      </div>
      <div class='cms-content-wrap'>
        <div class='default-page'>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import MyHeader from './components/MyHeader.vue'
import MyMenu from './components/MyMenu.vue'
export default {
  name: 'cms-login',
  components: {
    MyHeader,
    MyMenu,
  },
  data () {
    return {
      defaultActive: 'workbench',
      openChildMenu: true, // 默认打开子菜单
    }
  },
  computed: {
    menus () {
      return [
        // {index: 'workbench', label: '工作台', route: {path: '/system/workbench'}},
        {index: 'news/list', label: '新闻管理', icon: 'el-icon-tickets', route: {path: '/system/news/list'}},
        {
          index: 'basic',
          label: '基础管理',
          icon: 'el-icon-setting',
          children: [
            {index: 'basic/header', label: '头部设置', route: {path: '/system/basic/header'}},
            {index: 'basic/footer', label: '底部设置', route: {path: '/system/basic/footer'}},
            {index: 'basic/banner', label: 'Banner设置', route: {path: '/system/basic/banner'}}
          ]
        },
        {
          index: 'statistics',
          label: '统计管理',
          icon: 'el-icon-date    ',
          children: [
            {index: 'statistics/dataView', label: '数据统计', route: {path: '/system/statistics/dataView'}},
            {index: 'statistics/statisticsCode', label: '百度统计', route: {path: '/system/statistics/statisticsCode'}},
            {index: 'statistics/seoSetting', label: 'SEO设置', route: {path: '/system/statistics/seoSetting'}},
          ]
        },
      ]
    }
  },
  watch: {},
  methods: {
    updateActive () {
      let path = ''
      let pathList = this.$route.path.split('/')
      for (let i = 2; i < pathList.length; i++) {
        path = i === 2 ? `${pathList[i]}` : `${path}/${pathList[i]}`
      }
      this.defaultActive = path
    },
  },
  mounted () {
    this.updateActive()
  },
}
</script>

<style lang='scss'>
.cms-system {
  width: 100%;
  min-width: 1200px;
  height: 100%;
  background-color: #edeeee;
  .cms-container {
    display: flex;
    height: calc(100% - 60px);
    .menu-scroll-wrap {
      width: 200px;
      overflow-y: auto;
      scrollbar-width: none
    }
    .menu-scroll-wrap::-webkit-scrollbar {
      display: none;
    }
    .cms-content-wrap {
      flex: auto;
      min-width: 1000px;
      box-sizing: border-box;
      padding: 10px 10px 0 10px;
      height: 100%;
      .default-page {
        width: 100%;
        height: 100%;
        background-color: #fff;
        box-shadow: 0 0 10px #ddd;
        border-radius: 3px;
        overflow-y: auto;
      }
    }
  }
}
</style>
