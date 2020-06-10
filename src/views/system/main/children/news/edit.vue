<template>
  <div class='news-edit' v-loading='loading'>
    <box-title :title='`新闻${pageTitle}`'></box-title>
    <div class='news-edit-content'>
      <el-form label-position='right' label-width='100px' class='form-wrap'>
        <el-form-item label='标题' class='title-input'>
          <el-input v-model='inform.title' placeholder='请输入新闻标题'></el-input>
        </el-form-item>
        <el-form-item label='发布时间' class='time-input'>
          <el-date-picker
            v-model='inform.publishTime'
            type='datetime'
            format='yyyy-MM-dd HH:mm'
            placeholder="选择新闻发布时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label='作者' class='owner-input'>
          <el-input v-model='inform.editor' placeholder='请输入新闻作者'></el-input>
        </el-form-item>
        <el-form-item label='封面' class='image-input'>
          <img-upload :imgUrl.sync='inform.cover' :box-width='boxWidth' :box-height='boxHeight' :max-img-size='maxImgSize'></img-upload>
          <p class='tips'>建议尺寸：700px * 450px，大小不超过200KB</p>
        </el-form-item>
        <el-form-item label='简要' class='briefly'>
          <el-input v-model='inform.briefly' type='textarea' maxlength='200' rows='6' placeholder='请输入新闻简要'></el-input>
          <p class='tips'>字数限制：{{brieflyLength}}/200</p>
        </el-form-item>
        <el-form-item label='详情' class='u-editor'>
          <u-editor :value.sync='inform.details'></u-editor>
        </el-form-item>
      </el-form>
    </div>
    <div class='save-wrap'>
      <control-button position='left' :button='controlButton' @save='confirmSave'></control-button>
    </div>
  </div>
</template>

<script>
// components
import BoxTitle from '../../components/BoxTitle.vue'
import ImgUpload from '../../../../../components/common/ImgUpload.vue'
import UEditor from '../../../../../components/common/ueditor/UEditor.vue'
import ControlButton from '../../components/ControlButton.vue'
// apis
import * as newApis from '../../../../../apis/newsApi.js'

export default {
  name: '',
  components: {
    BoxTitle,
    ImgUpload,
    UEditor,
    ControlButton
  },
  data () {
    return {
      loading: false,
      pageTitle: '新增',
      boxWidth: 280,
      boxHeight: 180,
      maxImgSize: 200, // 图片上传最大内存
      controlButton: ['save'],
      newId: null, // 编辑页面，需要取得新闻id
      inform: {
        title: '', // 标题
        publishTime: new Date(), // 发布时间
        editor: '', // 新闻作者
        briefly: '', // 简要
        details: '', // 详情
        cover: '', // 图片
      }
    }
  },
  computed: {
    // 简要输入字数计算
    brieflyLength () {
      return this.inform.briefly.length
    }
  },
  watch: {},
  methods: {
    // 初始化
    init () {
      if (this.$route.query.newId) {
        this.pageTitle = '编辑'
        this.newId = this.$route.query.newId
        this.getNewsDetail()
      }
    },
    // 富文本
    editorInput (html) {
      this.inform.details = html
    },
    // 加载新闻详情
    async getNewsDetail () {
      this.loading = true
      const {data, code} = await newApis.newsDetail({
        newId: this.newId
      })
      this.loading = false
      if (code !== 200) return this.$message.error('新闻详情加载失败！')
      this.inform = {
        ...data
      }
    },
    // 二次确认保存
    confirmSave () {
      this.$messageBox.confirm(`确认${this.pageTitle}新闻？`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.save()
      }).catch(e => e)
    },
    // 保存
    async save () {
      const {code} = await newApis.saveNews(this.inform).catch(e => e)
      if (code === 200) {
        this.$router.push('/system/news/list')
        return this.$message.success(`新闻${this.pageTitle}成功`)
      }
    }
  },
  mounted () {
    this.init()
  },
}
</script>

<style lang='scss'>
.news-edit {
  padding: 20px;
  .news-edit-content {
    margin-top: 30px;
    // width: 800px;
    .title-input {
      width: 600px;
    }
    .owner-input {
      width: 320px;
    }
    .image-input {
      .el-form-item__content {
        line-height: 0;
      }
      .tips {
        line-height: 30px;
        font-size: 14px;
        color: #888;
      }
    }
    .form-wrap {
      width: 800px;
      .briefly {
        .tips {
          text-align: right;
          font-size: 14px;
          color: #888;
        }
      }
    }
    .u-editor {
      width: 900px;
    }
  }
  .save-wrap {
    padding: 40px 80px;
  }
}
</style>
