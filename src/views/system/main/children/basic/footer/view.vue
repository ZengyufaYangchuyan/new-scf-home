<template>
  <div class='footer-setting' v-loading='loading'>
    <div class='qr-code-setting'>
      <box-title title='公众号设置'></box-title>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='上传二维码'>
          <img-upload :imgUrl.sync='params.qrcode' :box-width='boxWidth' :box-height='boxHeight' :max-img-size='maxImgSize'></img-upload>
          <p class='tips'>建议尺寸：120px * 120px，大小不超过100KB</p>
        </el-form-item>
      </el-form>
    </div>
    <div class='text-setting'>
      <box-title title='文本设置'></box-title>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='服务热线'>
          <el-input v-model='params.serviceHotline' placeholder='请输入服务热线' class='input'></el-input>
        </el-form-item>
        <el-form-item label='版权所有者'>
          <el-input v-model='params.copyRight' placeholder='请输入版权所有者' class='input'></el-input>
        </el-form-item>
        <el-form-item label='版权附加信息'>
          <el-input v-model='params.copyRightOthers' placeholder='请输入备案号' class='input'></el-input>
        </el-form-item>
      </el-form>
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
  name: 'footer-setting',
  components: {
    BoxTitle,
    ImgUpload,
    ControlButton
  },
  data () {
    return {
      loading: false,
      boxWidth: 120,
      boxHeight: 120,
      maxImgSize: 200, // 图片上传最大内存
      params: {
        id: '',
        qrcode: '', // 二维码
        serviceHotline: '', // 服务热线
        copyRight: '', // 版权所有者
        copyRightOthers: '' // 版权附加信息
      },
      controlButton: ['save'],
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
    // 保存
    async save () {
      this.loading = true
      const {code} = await basicApi.saveBasicSetting({
        id: this.params.id,
        qrcode: this.params.qrcode,
        serviceHotline: this.params.serviceHotline,
        copyRight: this.params.copyRight,
        copyRightOthers: this.params.copyRightOthers
      }).catch(e => e)
      this.loading = false
      if (code !== 200) return this.$message.error('保存失败！')
      return this.$message.success('信息保存成功！')
    }
  },
  mounted () {
    this.loadingBasicSetting()
  },
}
</script>

<style lang='scss'>
.footer-setting {
  padding: 20px;
  .qr-code-setting {
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
  .text-setting {
    .form-wrap {
      margin-top: 30px;
      .input {
        width: 300px;
      }
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
