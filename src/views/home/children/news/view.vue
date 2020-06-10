<template>
  <div class='news-page'>
    <div class='news-header'></div>
    <div class='news-content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// apis
import * as newsApi from '../../../../apis/newsApi.js'
// import * as fileApi from '../../../../apis/fileApi.js'
export default {
  name: 'news-page',
  components: {},
  data () {
    return {
      loading: false,
      query: {
        page: 1,
        pageSize: 5,
        total: 0
      },
      newsList: {
        total: 1,
        list: [],
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 加载新闻列表
    async getNewsList () {
      this.loading = true
      const {data, code} = await newsApi.newsList({
        page: this.query.page,
        size: this.query.pageSize
      }).catch(e => e)
      if (code !== 200) {
        this.loading = false
        return this.$message.error('新闻列表加载失败！')
      }
      this.query = {
        page: data.current,
        pageSize: data.size,
        total: data.total
      }

      this.newsList.list = data.records
      this.loading = false
    },
    // 换页
    onCurrentPageChange (page) {
      this.query.page = page
      this.getNewsList()
    },
  },
  mounted () {
    this.getNewsList()
  },
}
</script>

<style lang='scss'>
.news-page {
  .news-header {
    width: 100%;
    min-width: 1000px;
    height: 420px;
    background: url('../../../../assets/image/home/background/news_center_title.png') center center no-repeat;
    background-size: cover;
  }
  .news-content {
    padding: 30px 0 20px;
  }
}
</style>
