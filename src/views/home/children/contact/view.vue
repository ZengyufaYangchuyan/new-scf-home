<template>
  <div class='contact-page'>
    <div class='contact-title'></div>
    <div class='content-1'>
      <div class='title-wrap'>
        <h3 class='title'>联系方式</h3>
      </div>
      <div class='contact-collect'>
        <div class='left'>
          <contact-information
            v-for='(item, index) in contactInfomation.left'
            :information='item'
            :icon='contactInfomation.icon'
            :key='index'>
          </contact-information>
        </div>
        <div class='center'>
          <contact-information
            v-for='(item, index) in contactInfomation.center'
            :information='item'
            :icon='contactInfomation.icon'
            :key='index'>
          </contact-information>
        </div>
        <div class='right'>
          <contact-information
            v-for='(item, index) in contactInfomation.right'
            :information='item'
            :icon='contactInfomation.icon'
            :key='index'>
          </contact-information>
        </div>
      </div>
      <div class='map-wrapper'>
        <b-map :config='mapConfig'></b-map>
      </div>
    </div>
  </div>
</template>

<script>
// comonents
import ContactInformation from './components/ContactInformation.vue'
import BMap from '../../../../components/common/BMap.vue'
export default {
  name: 'contact-page',
  components: {
    ContactInformation,
    BMap
  },
  data () {
    return {
      mapConfig: {
        currentCity: '广州',
        point: [113.270927, 23.214637], // 经纬度
        level: 15, // 地图等级
        inforOpts: { // 弹窗信息
          width: 240,
          height: 60,
          offset: {width: 0, height: -15},
          title: '广东有贝信息科技有限公司',
          content: '地址：广州市白云区机场路1962号国际单位F栋'
        }
      },
      contactInfomation: {
        icon: require('../../../../assets/image/home/icon/contact_icon.png'),
        left: [
          {label: '地址：', text: ['广州市白云区机场路1962号国际单位F栋'], iconLocation: [0, 0]},
          {label: '传真：', text: ['020-86181078'], iconLocation: [0, -35]},
          {label: '邮编：', text: ['020-86181078'], iconLocation: [0, -70]},
        ],
        center: [
          {label: '联系电话：', text: ['', '020-86181068', '400-990-2929'], iconLocation: [0, -105]},
        ],
        right: [
          {label: '联系邮箱：', text: ['', 'ybkeji@ebon.com'], iconLocation: [0, -140]},
        ]
      },

    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.contact-page {
  .contact-title {
    width: 100%;
    min-width: 1000px;
    height: 420px;
    background: url('../../../../assets/image/home/background/contact_title_bg.png') center center no-repeat;
    background-size: cover;
  }
  .content-1 {
    margin: auto;
    width: 1000px;
    .title-wrap {
      padding: 35px 0 30px;
      width: 1000px;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      .title {
        font-size: 20px;
        color: #7f8080;
        border-bottom: 2px solid #f47115;
        display: inline-block;
        line-height: 60px;
      }
    }
    .contact-collect {
      padding: 60px 20px 30px;
      width: 960px;
      display: flex;
      .left {
        width: 400px;
      }
      .center {
        width: 300px;
      }
      .right {
        width: 260px;
      }
    }
    .map-wrapper {
      margin-bottom: 50px;
    }
  }
}
</style>
