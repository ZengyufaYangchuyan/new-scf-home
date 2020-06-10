<template>
  <div class='footer'>
    <div class='footer-content'>
      <div class='content-left'>
        <ul class='link-wrap'>
          <li
            class='link-item'
            v-for='(item, index) in linkList'
            @click='toLink(item)'
            :key='index'>
            {{item.label}}
           </li>
        </ul>
        <div class='copyright-wrap'>
          <span class='text-name'>©Copyright 2020 {{basic.copyRight}} 版权所有</span>
          <a class='text-num' target='_blank' href='http://www.beian.miit.gov.cn/'>{{basic.copyRightOthers}}</a>
        </div>
      </div>
      <div class='content-right'>
        <div class='call-wrap'>
          <p class='title'>服务热线</p>
          <p class='num'> {{basic.serviceHotline}}</p>
        </div>
        <div class='qc-code'>
          <div class='qc-code-wrap'>
            <img v-if='basic.qrcode' :src='basic.qrcode' alt='星空云链公众号'>
          </div>
          <p class='description'>微信公众号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vuex
import {mapGetters} from 'vuex'
export default {
  name: 'e-footer',
  components: {},
  data () {
    return {
      linkList: [
        {name: 'login', label: '管理员登录', url: ''},
        {name: 'legalNotice', label: '法律声明', url: ''},
        {name: 'link', label: '友情连接', url: ''}
      ]
    }
  },
  computed: {
    ...mapGetters(['basic'])
  },
  watch: {},
  methods: {
    // 页面跳转
    toLink (obj) {
      if (obj.name === 'login') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='scss'>
.footer {
  width: 100%;
  min-width: 1000px;
  height: 240px;
  z-index: 999;
  background-color: #f8f8f8;
  .footer-content {
    margin: auto;
    display: flex;
    width: 1000px;
    height: 155px;
    color: #666;
    .content-left {
      width: 600px;
      .link-wrap {
        margin-top: 30px;
        display: flex;
        height: 34px;
        line-height: 34px;
        padding-left: 10px;
        .link-item {
          padding: 0 5px;
          font-size: 14px;
          cursor: pointer;
        }
        .link-item:hover {
          color: #ffa644;
        }
        .link-item:after {
          position: relative;
          top: 1px;
          margin-left: 6px;
          display: inline-block;
          content: '';
          width: 1px;
          height: 11px;
          background-color: #b1b1b1;
        }
        .link-item:last-child:after {
          content: '';
          width: 0;
        }
      }
      .copyright-wrap {
        margin-top: 5px;
        padding-left: 10px;
        height: 32px;
        line-height: 32px;
        .text-num {
          margin-left: 10px;
          text-decoration: none;
          color: #666;
        }
        .text-num:hover {
          color: #ffa644;
        }
      }
    }
    .content-right {
      display: flex;
      width: 400px;
      .call-wrap {
        width: 130px;
        .title {
          margin-top: 55px;
          display: inline-block;
          position: relative;
          left: 50%;
          margin-left: -44px;
          width: 88px;
          text-align: center;
          font-size: 14px;
        }
        .title:before {
          display: inline-block;
          position: relative;
          top: 7px;
          left: -5px;
          vertical-align: top;
          content: '';
          width: 16px;
          height: 1px;
          background-color: #666;
        }
        .title:after {
          display: inline-block;
          position: relative;
          top: 7px;
          right: -5px;
          vertical-align: top;
          content: '';
          width: 16px;
          height: 1px;
          background-color: #666;
        }
        .num {
          margin-top: 8px;
          display: block;
          text-align: center;
          font-size: 20px;
          line-height: 32px;
          font-weight: 100;
          color: #999;
        }
      }
      .qc-code {
        margin: 20px 0 0 140px;
        width: 95px;
        text-align: center;
        .qc-code-wrap {
          width: 95px;
          height: 95px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .description {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
