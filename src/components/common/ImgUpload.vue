<template>
  <div class='img-upload'>
    <div class='img-wrap' :style='{width: `${boxWidth}px`, height: `${boxHeight}px`, lineHeight: `${boxHeight}px`}'>
      <div v-if='imgUrl' @click='onClick(canReset)' :class='{"img-wrap-hover": canReset}' class='img-wrap-box' v-loading='loading'>
        <img class='img' :src='imgUrl'>
      </div>
      <span class='btn' @click='onClick' v-else>
        <i class='el-icon-plus'></i>
      </span>
    </div>
    <input v-show='false' ref='fileInput' type='file' @change='onUpload' multiple='multiple'/>
  </div>
</template>

<script>
// components
import {Message} from 'element-ui'
// apis
import * as fileApi from '../../apis/fileApi.js'
export default {
  name: '',
  components: {},
  data () {
    return {
      loading: false,
    }
  },
  props: {
    // 图片url
    imgUrl: {
      type: String,
      default: ''
    },
    imgType: {
      type: Array,
      default: () => ['image/png', 'image/jpeg']
    },
    errorImgTypeMessage: {
      type: String,
      default: '请上传 JPG 或者 PNG 格式的图片!'
    },
    maxImgSize: {
      type: Number,
      default: 2048
    },
    boxWidth: {
      type: Number,
      default: 120
    },
    boxHeight: {
      type: Number,
      default: 120
    },
    // 能否重新上传
    canReset: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 图片上传限定条件
    imgRules (file) {
      // 图片类型
      if (this.imgType && this.imgType.every(type => file.type !== type)) {
        Message.error(this.errorImgTypeMessage)
        return false
      }
      // 图片内存大小
      if (file.size > this.maxImgSize * 1024) {
        const text = this.maxImgSize / 1024 >= 1 ? `${this.maxImgSize / 1024}MB` : `${this.maxImgSize}KB`
        Message.error(`上传图片大小不能超过${text}！`)
        return false
      }
      return true
    },
    // 点击图片上传按钮
    onClick (val = true) {
      if (val) {
        this.$refs.fileInput.click()
      }
    },
    // 上传图片
    async onUpload (e) {
      this.loading = true
      let file = e.target.files[0]

      if (!this.imgRules(file)) return

      // formData
      let formData = new FormData()
      formData.append('file', file)

      const {data, code} = await fileApi.uploadImg(formData).catch(e => e)
      this.loading = false
      if (code !== 200) {
        return Message.error('图片上传失败！')
      }

      this.$emit('update:imgUrl', data)
      this.$emit('upload-success', data)
    }
  },
}
</script>

<style lang='scss' scoped>
.img-upload {
  display: inline-block;
  .img-wrap {
    text-align: center;
    font-size: 40px;
    color: #ccc;
    cursor: pointer;
    .img-wrap-box {
      line-height: 0;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height:100%;
      border: 2px dashed #fff;
      .img {
        display: inline-block;
        width: 100%;
        height:100%;
        box-shadow: 0 0 8px #ccc;
      }
    }
    .img-wrap-hover:hover {
      border: 2px dashed #ee7c00;
    }
    .btn {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;;
      border: 2px dashed #ccc;
    }
  }
}
</style>
