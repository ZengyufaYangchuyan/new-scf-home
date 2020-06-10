<template>
  <div class='header-setting' v-loading='loading'>
    <div class='logo-setting'>
      <box-title title='Logo设置'></box-title>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='上传Logo'>
          <img-upload :imgUrl.sync='params.logo' :box-width='boxWidth' :box-height='boxHeight' :max-img-size='maxImgSize'></img-upload>
          <p class='tips'>建议尺寸：200px * 60px，大小不超过100KB</p>
        </el-form-item>
      </el-form>
    </div>
    <div class='nav-setting'>
      <box-title title='导航设置'></box-title>
      <div class='nav-preview'>
        <ul class='navList'>
          <li
            class='list-item'
            :class='{active: item.active}'
            v-for="(item, index) in tabList"
            @click='toPath(index)'
            :key='index'>
            <span>{{item.label}}</span>
          </li>
        </ul>
        <p class='descript'>Tips：单点菜单，控制显示/隐藏（功能暂未开放）</p>
      </div>
    </div>
    <div class='save-wrap'>
      <control-button position='left' :button='controlButton' @save='save'></control-button>
    </div>
  </div>
</template>

<script>
// compoents
import BoxTitle from '../../../components/BoxTitle.vue'
import ImgUpload from '../../../../../../components/common/ImgUpload.vue'
import ControlButton from '../../../components/ControlButton.vue'
// apis
import * as basicApi from '../../../../../../apis/basicApi.js'

export default {
  name: 'header-setting',
  components: {
    BoxTitle,
    ImgUpload,
    ControlButton,
  },
  data () {
    return {
      loading: false,
      boxWidth: 300,
      boxHeight: 90,
      maxImgSize: 200, // 图片上传最大内存
      params: {
        id: '',
        logo: '',
      },
      controlButton: ['save'],
      tabList: [
        {name: 'homePage', label: '首页', path: '/homePage', active: true},
        {name: 'news', label: '新闻动态', path: '/news', active: true},
        {name: 'about', label: '关于我们', path: '/about', active: true},
        {name: 'product', label: '业务产品', path: '/product', active: true},
        {name: 'join', label: '加入我们', path: '/join', active: true},
        {name: 'contact', label: '联系我们', path: '/contact', active: true}
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 加载信息
    async loadingBasicSetting () {
      this.loading = true
      const {data, code} = await basicApi.getBasicSetting().catch(e => e)
      this.loading = false
      if (code !== 200) return this.$message.error('信息加载失败！')
      this.params = {
        ...data
      }
    },
    // 选择菜单
    toPath (index) {
      this.tabList[index].active = !this.tabList[index].active
    },
    // 保存
    async save () {
      this.loading = true
      const {code} = await basicApi.saveBasicSetting({
        id: this.params.id,
        logo: this.params.logo
      }).catch(e => e)
      this.loading = false
      if (code !== 200) return this.$message.error('保存失败！')
      return this.$message.success('信息保存成功！')
    },
  },
  mounted () {
    this.loadingBasicSetting()
  },
}
</script>

<style lang='scss'>
.header-setting {
  padding: 20px;
  .logo-setting {
    margin-bottom: 70px;
    .form-wrap {
      margin-top: 30px;
      .tips {
        line-height: 30px;
        font-size: 14px;
        color: #888;
      }
    }
  }
  .nav-setting {
    .nav-preview {
      margin-top: 20px;
      display: inline-block;
      -moz-user-select:none;
      -khtml-user-select: none;
      user-select: none;
      .navList {
        padding: 12px 30px;
        box-shadow: 0 0 10px #ccc;
        display: flex;
        .list-item {
          position: relative;
          margin: 0 10px;
          padding: 5px 14px;
          cursor: pointer;
          border-radius: 12px;
          font-size: 14px;
          color: #aaa;
        }
        .list-item:last-child {
          margin-right: 0;
        }
        .active {
          color: #333;
        }
      }
    }
    .descript {
      margin-top: 8px;
      font-size: 12px;
      text-align: center;
      color: #888;
    }
  }
  .save-wrap {
    padding: 60px 50px 0;
  }
  .el-form-item__content {
    line-height: 0;
  }
}
</style>
