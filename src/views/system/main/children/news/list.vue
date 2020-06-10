<template>
  <div class='news-list' v-loading='loading'>
    <box-title title='新闻列表'></box-title>
    <div class='table-wrap'>
      <div class='add-btn-wrap'>
        <control-button position='right' :button='["add"]' @add='add'></control-button>
      </div>
      <el-table
        :data='tableData'
        style='width: 100%'>
        <el-table-column
          type='index'
          width='50'>
        </el-table-column>
        <el-table-column
          label='标题'
          width='280'>
          <template slot-scope='scope'>
            <el-tooltip class='item' effect='dark' :content='scope.row.title' placement='top-start'>
              <span class='title'>{{scope.row.title}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label='发布时间'
          width='150'>
          <template slot-scope='scope'>
            <span>{{$day(scope.row.publishTime).format('YYYY-MM-DD HH:mm')}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop='editor'
          label='作者'
          width='120'>
        </el-table-column>
        <el-table-column
          label='简要'>
          <template slot-scope='scope'>
            <span class='briefly'>{{scope.row.briefly}}</span>
          </template>
        </el-table-column>
        <el-table-column label='操作' width='200'>
          <template slot-scope='scope'>
            <el-button
              size='mini'
              @click='handleEdit(scope.row)'>编辑</el-button>
            <el-button
              size='mini'
              type='danger'
              @click='handleDelete(scope.$index, scope.row)'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
// components
import BoxTitle from '../../components/BoxTitle.vue'
import ControlButton from '../../components/ControlButton.vue'
// apis
import * as newsApi from '../../../../../apis/newsApi.js'
export default {
  name: 'news-list',
  components: {
    BoxTitle,
    ControlButton
  },
  data () {
    return {
      loading: false,
      query: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [
        // {
        //   title: '新闻标题', // 新闻标题
        //   publishTime: 1576554016000, // 发布时间
        //   editor: '有贝保理', // 作者
        //   briefly: '上海市普陀区金沙江路 1518 弄' // 简介
        // }
      ]
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
      this.loading = false
      if (code !== 200) {
        return this.$message.error('新闻列表加载失败！')
      }
      this.query = {
        page: data.current,
        pageSize: data.size,
        total: data.total
      }
      this.tableData = data.records
    },
    // 新增
    add () {
      this.$router.push('/system/news/edit')
    },
    // 编辑
    handleEdit (item) {
      this.$router.push({
        path: '/system/news/edit',
        query: {
          newId: item.newid
        }
      })
    },
    // 二次确认删除
    handleDelete (index, item) {
      this.$messageBox.confirm('确定删除这条新闻？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delete(index, item.newid)
      }).catch(e => e)
    },
    // 删除
    async delete (index, newid) {
      this.loading = true
      const {code} = await newsApi.deleteNews({newid}).catch(e => e)
      this.loading = false
      if (code === 200) {
        this.loading = false
        this.tableData.splice(index, 1)
        return this.$message.success('删除成功')
      }
    }
  },
  mounted () {
    this.getNewsList()
  },
  permissions: [
    'pc/workbench'
  ],
}
</script>

<style lang='scss' scoped>
.news-list {
  padding: 20px;
  .add-btn-wrap {
    padding: 0 20px;
  }
  .table-wrap {
    margin-top: 20px;
    font-size: 14px;
  }
  .pagination-wrap {
    margin-top: 20px;
    text-align: right;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .briefly {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>
