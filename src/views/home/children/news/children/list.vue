<template>
  <div class='news-list-page'>
    <div class='news-wrap' v-loading='loading'>
      <ul class='news-list'>
        <li class='news-item' v-for='(item, index) in newsList.list' @click='newsDetail(item)' :key='index'>
          <div class='news-item-img'>
            <img :src='item.cover'>
          </div>
          <div class='news-item-content'>
            <h3 class='title'>{{item.title}}</h3>
            <p class='time'>{{$day(item.publishTime).format('YYYY-MM-DD')}}</p>
            <p class='descript'>{{item.briefly}}</p>
          </div>
        </li>
      </ul>
      <div class='pagination-wrap'>
        <el-pagination
          layout='prev, pager, next'
          :current-page.sync='query.page'
          :page-size='query.pageSize'
          :total='query.total'
          @current-change='getNewsList'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// apis
import * as newsApi from '../../../../../apis/newsApi.js'
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
    // 跳转新闻详情
    newsDetail (item) {
      this.$router.push({
        path: '/news/detail',
        query: {
          newId: item.newid
        }
      })
    },
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
.news-list-page {
  .news-wrap {
    margin: 0 auto;
    width: 1000px;
    .news-list {
      .news-item {
        margin-bottom: 30px;
        display: flex;
        background-color: #f9f9f9;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        transition: box-shadow ease .2s 0s;
        -moz-transition: box-shadow ease .2s 0s;
        -webkit-transition: box-shadow ease .2s 0s;
        .news-item-img {
          width: 350px;
          height: 225px;
          line-height: 0;
          img {
            width: 350px;
            height: 225px;
          }
        }
        .news-item-content {
          flex: auto;
          padding: 20px 0;
          box-sizing: border-box;
          height: 225px;
          padding-left: 30px;
          box-sizing: border-box;
          .title {
            // margin-top: 16px;
            font-size: 16px;
            color: #333333;
            line-height: 30px;
          }
          .time {
            margin-top: 10px;
            max-width: 562px;
            color: #666666;
            text-align: left;
            font-size: 14px;
            line-height: 22px;
          }
          .descript {
            margin-top: 10px;
            max-width: 562px;
            color: #666666;
            text-align: left;
            font-size: 14px;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
        }
      }
      .news-item:hover {
        box-shadow: 0 0 15px rgba(128, 128, 128, .5);
      }
    }
  }
  .pagination-wrap {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
