<template>
  <div class='news-detail-page' v-loading='loading'>
    <div class='location'><span class='back' @click='back'>首页</span> / 新闻动态</div>
    <div class='news-detail-content'>
      <h2 class='news-title'>{{newsData.title}}</h2>
      <div class='inform'>
        <span class='time'>发布时间：{{$day(newsData.publishTime).format('YYYY-MM-DD')}}</span>
        <span class='writer'>作者：{{newsData.editor}}</span>
      </div>
      <div class='journalism'>
        <html-read :value='newsData.details'></html-read>
      </div>
    </div>
    <div class='back-btn'>
      <el-button @click='back' size="small">返回</el-button>
    </div>
  </div>
</template>

<script>
// apis
import * as newApis from '../../../../../apis/newsApi.js'
// components
import HtmlRead from '../../../../../components/common/HtmlRead.vue'

export default {
  name: '',
  components: {
    HtmlRead
  },
  data () {
    return {
      loading: false,
      newsData: {
        title: '', // 标题
        publishTime: new Date(), // 发布时间
        editor: '', // 新闻作者
        briefly: null, // 简要
        details: null, // 详情
        cover: null, // 图片
      }
    }
  },
  computed: {
    newId () {
      return this.$route.query.newId
    }
  },
  watch: {},
  methods: {
    // 返回新闻列表
    back () {
      this.$router.push('/news/list')
    },
    // 加载新闻详情
    async getNewsDetail () {
      this.loading = true
      const {data, code} = await newApis.newsDetail({
        newId: this.newId
      })
      this.loading = false
      if (code !== 200) return this.$message.error('新闻详情加载失败！')
      this.newsData = {
        ...data
      }
    },
  },
  mounted () {
    this.getNewsDetail()
  }
}
</script>

<style lang='scss'>
.news-detail-page {
  width: 1000px;
  min-height: 300px;
  margin: 0 auto 20px;
  .location {
    padding-bottom: 10px;
    margin-bottom: 25px;
    font-size: 14px;
    border-bottom: 1px dashed #cccccc;
    .back {
      color: #f08200;
      cursor: pointer;
    }
  }
  .news-detail-content {
    color: #434343;
    .news-title {
      text-align: center;
      font-size: 30px;
    }
    .inform {
      padding: 20px 0;
      margin-bottom: 30px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px dashed #cccccc;
      .time {
        margin-right: 30px;
      }
    }
    .journalism {
      padding: 0 40px;
      box-sizing: border-box;
    }
  }
  .back-btn {
    text-align-last: center;
  }
}
</style>
