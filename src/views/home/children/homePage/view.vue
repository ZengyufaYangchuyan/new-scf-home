<template>
  <div class='home-page'>
    <EBanner :bannerdData='basic.bannerListUrl' :height='bannerHight'></EBanner>
    <div class='content-1'>
      <ul class='icon-wrap'>
        <li v-for='(item, index) in iconList' class='icon-item' :key='index'>
          <img :src='item.img'>
          <p class='icon-text'>{{item.label}}</p>
        </li>
      </ul>
    </div>
    <div class='content-2'>
      <ul class='menu-wrap'>
        <li
        class='menu-item'
        :style='{"background-image": `url(${item.img})`}'
        v-for='(item, index) in menuList'
        :key='index'>
          <p class='title' @click='toPath(item)'>{{item.label}}</p>
          <p class='title-path' @click='toPath(item)'>了解更多</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// components
import EBanner from '../../components/EBanner.vue'
// vuex
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'home-page',
  components: {
    EBanner
  },
  data () {
    return {
      bannerHight: 543,
      iconList: [
        {index: 0, label: '专业', img: require('../../../../assets/image/home/icon/icon-major.png')},
        {index: 1, label: '协同', img: require('../../../../assets/image/home/icon/icon-cooperative.png')},
        {index: 2, label: '安全', img: require('../../../../assets/image/home/icon/icon-security.png')},
        {index: 3, label: '智能', img: require('../../../../assets/image/home/icon/icon-intelligence.png')},
      ],
      menuList: [
        {index: 0, label: '关于我们', path: '/about', img: require('../../../../assets/image/home/background/menu_bg01.jpg')},
        {index: 1, label: '业务介绍', path: '/product', img: require('../../../../assets/image/home/background/menu_bg03.jpg')},
        {index: 2, label: '新闻中心', path: '/news', img: require('../../../../assets/image/home/background/menu_bg02.jpg')},
      ]
    }
  },
  computed: {
    ...mapGetters(['basic']),
  },
  watch: {},
  methods: {
    ...mapActions(['changeActiveTab']),
    // 路由跳转
    toPath (target) {
      this.changeActiveTab(target.path)
      this.$router.push(target.path)
    }
  }
}
</script>

<style lang='scss' scoped>
.home-page {
  background-color: #fff;
  .content-1 {
    width: 100%;
    min-width: 1000px;
    .icon-wrap {
      margin: auto;
      padding: 20px 0;
      width: 1000px;
      display: flex;
      .icon-item {
        width: 25%;
        text-align: center;
        img {
          margin: auto;
          display: block;
        }
        .icon-text {
          display: inline-block;
          font-size: 16px;
          line-height: 60px;
          color: #f08200;
          border-bottom: 2px solid #f08200;
        }
      }
    }
  }
  .content-2 {
    width: 100%;
    min-width: 1000px;
    .menu-wrap {
      width: 100%;
      height: 142px;
      display: flex;
      .menu-item {
        flex: auto;
        background-size: cover;
        .title {
          margin: 20px 0 0 25px;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }
        .title-path {
          margin: 70px 0 0 25px;
          color: #fff;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
