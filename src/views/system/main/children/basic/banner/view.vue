<template>
  <div class='banner-setting' v-loading='loading'>
    <box-title title='Banner设置'></box-title>
    <div class='banner-preview'>
      <div class='img-wrap'>
        <my-banner :bannerdData='bannerList'></my-banner>
      </div>
      <p class='tips'>效果预览</p>
    </div>
    <div class='upload-wrap'>
      <p class='banner-header-tips'>Tips：拖动卡片可变换顺序</p>
      <ul class='img-list'>
        <draggable v-model='bannerList' class='draggable-wrap'>
          <li class='img-item' v-for='(item, index) in bannerList' :key='index'>
            <div class='index'>{{index + 1}}.</div>
            <div class='img-box'>
              <img-upload
                ref='imgUpload'
                :imgUrl.sync='item.imgUrl'
                :box-width='boxWidth'
                :box-height='boxHeight'
                 :max-img-size='maxImgSize'
                :can-reset='canReset'>
              </img-upload>
            </div>
            <div class='config'>
              <el-form label-position='right' label-width='85px' class='form-wrap'>
                <el-form-item label='跳转'>
                  <el-radio-group v-model='item.linkType'>
                    <el-radio :label='1'>是</el-radio>
                    <el-radio :label='0'>否</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label='跳转地址' v-if='item.linkType !== 0' class='link-input'>
                  <el-input size='small' v-model='item.link' placeholder='http://'></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class='delete'>
              <i class='el-icon-delete' @click='deleteBanner(index)'></i>
            </div>
          </li>
        </draggable>
        <li class='img-item-btn' @click='add' v-if='bannerList.length < bannerLength'>
          <div class='text-box'>
            <p class='text'>+ 新增 （{{bannerList.length}}/{{bannerLength}}）</p>
            <p class='tips'>建议尺寸：1400px * 540px，每张图片大小不超过500KB</p>
          </div>
        </li>
      </ul>
    </div>
    <div class='save-wrap'>
      <control-button position='left' :button='controlButton' @save='save'></control-button>
    </div>
  </div>
</template>

<script>
// components
import MyBanner from '../../../components/MyBanner.vue'
import BoxTitle from '../../../components/BoxTitle.vue'
import ImgUpload from '../../../../../../components/common/ImgUpload.vue'
import draggable from 'vuedraggable'
import ControlButton from '../../../components/ControlButton.vue'
// apis
import * as basicApi from '../../../../../../apis/basicApi.js'
// import * as fileApi from '../../../../../../apis/fileApi.js'

export default {
  name: 'banner-setting',
  components: {
    MyBanner,
    BoxTitle,
    ImgUpload,
    draggable,
    ControlButton
  },
  data () {
    return {
      loading: false,
      imgShow: true,
      params: {
        id: '',
      },
      bannerList: [
        // {index: 0, display: true, img: ''}
      ],
      bannerLength: 6, // 最大banner图数
      boxWidth: 225,
      boxHeight: 100,
      maxImgSize: 500,
      controlButton: ['save'],
      canReset: true,
    }
  },
  methods: {
    // 加载信息
    async loadingBasicSetting () {
      this.loading = true
      const {data, code} = await basicApi.getBasicSetting().catch(e => e)
      this.loading = false
      if (code !== 200) return this.$message.error('信息加载失败！')

      this.params.id = data.id

      if (data && data.banner) {
        let list = JSON.parse(data.banner)
        list.forEach((item, index) => {
          item.display = index === 0
        })
        this.bannerList = list
      }
    },
    // 新增
    add (value) {
      this.bannerList.push({
        linkType: 0,
        link: '',
        display: false,
        imgUrl: ''
      })
    },
    // 删除
    deleteBanner (index) {
      if (this.bannerList.length === 1) {
        return this.$message.warning('不能再删除了')
      }
      this.$messageBox.confirm('确认删除？', '提示', {
        confirmButton: '确认',
        cancelButton: '取消'
      }).then(() => {
        this.bannerList.splice(index, 1)
        this.bannerList.forEach((item, index) => {
          item.index = index
        })
      })
    },
    // 保存
    async save () {
      this.loading = true
      let params = []
      this.bannerList.forEach((item, index) => {
        params.push({
          index,
          linkType: item.linkType,
          link: item.link,
          imgUrl: item.imgUrl
        })
      })
      const {code} = await basicApi.saveBasicSetting({
        id: this.params.id,
        banner: JSON.stringify(params)
      }).catch(e => e)
      this.loading = false
      if (code !== 200) return this.$message.error('信息保存失败！')
      return this.$message.success('信息保存成功！')
    }
  },
  mounted () {
    this.loadingBasicSetting()
  },
}
</script>

<style lang='scss'>
.banner-setting {
  padding: 20px;
  .banner-preview {
    margin: 20px 0 0 10px;;
    width: 920px;
    .img-wrap {
      height: 260px;
      box-shadow: 0 0 10px #ccc;
    }
    .tips {
      margin-top: 8px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  }
  .upload-wrap {
    margin-top: 20px;
    .banner-header-tips {
      padding-left: 15px;
      margin-bottom: 15px;
      font-size: 14px;
      color: #888;
    }
    .img-list {
      .img-item {
        display: flex;
        padding: 20px 20px 20px 0;
        margin: 0 0 25px 15px;
        width: 800px;
        height: 100px;
        box-shadow: 0 0 10px rgba(128, 128, 128, .4);
        border-radius: 0 10px 10px 0;
        .index {
          width: 50px;
          text-align: center;
          line-height: 100px;
          color: #434343;
        }
        .config {
          box-sizing: border-box;
          flex: auto;
          .el-form-item {
            margin-bottom: 10px;
          }
          .link-input {
            width: 450px;
          }
        }
        .delete {
          font-size: 24px;
          color: #f56c6c;
          .el-icon-delete {
            cursor: pointer;
          }
        }
      }
      .img-item-btn {
        position: relative;
        margin: 0 0 25px 15px;
        width: 820px;
        height: 70px;
        box-sizing: border-box;
        border: 2px dashed rgba(155, 155, 155, .4);
        cursor: pointer;
        .text-box {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -22px 0 0 -210px;
          width: 420px;
          height: 44px;
          text-align: center;
          .text {
            line-height: 30px;
            text-align: center;
            color: rgb(155, 155, 155);
          }
          .tips {
            font-size: 12px;
            color: #888;
          }
        }
      }
      .img-item-btn:hover {
        border: 2px dashed #f08200;
        .text {
          color: #f08200;
        }
        .tips {
          color: #f08200;
        }
      }
    }
  }
  .save-wrap {
    z-index: 999;
    padding: 30px 50px 30px;
  }
}
</style>
