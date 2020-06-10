<template>
  <div class='statisitcs-code-setting'>
    <div class='code-wrap'>
      <box-title title='百度统计'></box-title>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='统计代码'>
            <el-input v-model='params.baiduCode' type='textarea' rows='8' placeholder='<script>'></el-input>
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
        baiduCode: '',
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
        baiduCode: this.params.baiduCode
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

<style lang='scss' scoped>
.statisitcs-code-setting {
  padding: 20px;
  .code-wrap {
    width: 800px;
    .form-wrap {
      margin-top: 30px;
    }
  }
  .save-wrap {
    padding: 40px 80px 0;
  }
}
</style>
