<template>
  <div class='seo-setting'>
    <div class='seo-wrap'>
      <box-title title='百度统计'></box-title>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='SEO标题'>
            <el-input v-model='params.seoTitle' rows='8' placeholder='请输入SEO标题'></el-input>
          </el-form-item>
          <el-form-item label='SEO关键字'>
            <el-input v-model='params.seoKeys' type='textarea' rows='3' placeholder='请输入SEO关键字'></el-input>
          </el-form-item>
          <el-form-item label='SEO描述'>
            <el-input v-model='params.seoDecription' type='textarea' rows='3' placeholder='请输入SEO描述'></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class='save-wrap'>
      <control-button position='left' :button='controlButton' @save='save'></control-button>
    </div>
  </div>
</template>

<script>
// components
import BoxTitle from '../../../components/BoxTitle.vue'
import ControlButton from '../../../components/ControlButton.vue'
// apis
import * as basicApi from '../../../../../../apis/basicApi.js'

export default {
  name: '',
  components: {
    BoxTitle,
    ControlButton
  },
  data () {
    return {
      params: {
        id: '',
        seoTitle: '',
        seoKeys: '',
        seoDecription: '',
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
        seoTitle: this.params.seoTitle,
        seoKeys: this.params.seoKeys,
        seoDecription: this.params.seoDecription,
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
.seo-setting {
  padding: 20px;
  .seo-wrap {
    width: 800px;
    .form-wrap {
      margin-top: 30px;
      width: 800px;
    }
  }
  .save-wrap {
    padding: 40px 80px 0;
  }
}
</style>
