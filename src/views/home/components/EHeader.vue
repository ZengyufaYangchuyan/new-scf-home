<template>
  <div class='header'>
    <e-login></e-login>
    <div class='header-content'>
      <div class='logo-wrap'>
        <img v-if='basic.logo' :src='basic.logo' @click='toPath(tabList[0])' alt='星贝云链'>
      </div>
      <nav class='nav-wrap'>
        <ul class='list'>
          <li
            class='list-item'
            :class='{"list-item-active": activeTab === item.path}'
            v-for="(item, index) in tabList"
            :key='index'
            @click='toPath(item)'>
            {{item.label}}
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// components
import ELogin from './ELogin.vue'
// vuex
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'e-header',
  components: {
    ELogin
  },
  data () {
    return {
      tabList: [
        {name: 'homePage', label: '首页', path: '/homePage'},
        {name: 'news', label: '新闻动态', path: '/news'},
        {name: 'about', label: '关于我们', path: '/about'},
        {name: 'product', label: '业务产品', path: '/product'},
        {name: 'join', label: '加入我们', path: '/join'},
        {name: 'contact', label: '联系我们', path: '/contact'}
      ]
    }
  },
  computed: {
    ...mapState(['activeTab']),
    ...mapGetters(['basic'])
  },
  watch: {},
  methods: {
    ...mapActions(['changeActiveTab']),
    // 路由跳转
    toPath (target) {
      this.changeActiveTab(target.path)
      this.$router.push(target.path)
    }
  },
  mounted () {
    this.changeActiveTab(this.$route.path)
  }
}
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  width: 100%;
  min-width: 1000px;
  border-bottom: 1px solid #eee;
  .header-content {
    margin: auto;
    padding: 10px 0;
    width: 1000px;
    height: 60px;
    display: flex;
    .logo-wrap {
      width: 200px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
    .nav-wrap {
      flex: auto;
      -moz-user-select:none;
      -khtml-user-select: none;
      user-select: none;
      .list {
        position: relative;
        top: 50%;
        margin-top: -12px;
        float: right;
        display: flex;
        .list-item {
          margin: 0 10px;
          padding: 5px 14px;
          cursor: pointer;
          border-radius: 12px;
          font-size: 14px;
          color: #666666;
        }
        .list-item:last-child {
          margin-right: 0;
        }
        .list-item-active {
          color: #fff;
          background: #f08200;
        }
      }
    }
  }
}
</style>
