<template>
  <div class='my-pagenation'>
    <div class='my-pagenation-wrap'>
      <p class='total-text'>共 {{total}} 条</p>
      <button type='button' class='btn' :class='{disabled: current === 1}' @click='prePage'>〈</button>
      <ul class='pagenation-list'>
        <li
          v-for='(item, index) in pageText'
          @click='changeCurrent(item, index)'
          :key='index'>
          <span
            class='num'
            :class='{
              active: current === item,
              "pre-icon": typeof(item) === "string" && index === 1,
              "after-icon": typeof(item) === "string" && (index === 6 || index === 7),
            }'>
            {{item}}
          </span>
        </li>
      </ul>
      <button type='button' class='btn' :class='{disabled: current === pageCount}' @click='afterPage'>〉</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pagenation',
  components: {},
  data () {
    return {
      current: 1, // 当前页
    }
  },
  props: {
    // 一页几个数据
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数据
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    // 总页数
    pageCount () {
      return Math.ceil(this.total / this.pageSize)
    },
    // 页面视图结构
    pageText () {
      let text = []
      let pageCount = this.pageCount
      let current = this.current
      if (pageCount <= 7) {
        for (let i = 1; i <= pageCount; i++) {
          text.push(i)
        }
      }
      if (pageCount > 7) {
        if (current <= 4) {
          text = [1, 2, 3, 4, 5, 6, '', pageCount]
        }
        if (current > 4 && current < pageCount - 3) {
          text = [1, '', current - 2, current - 1, current, current + 1, current + 2, '', pageCount]
        }
        if (current >= pageCount - 3) {
          text = [1, '', pageCount - 5, pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
        }
      }
      return text
    }
  },
  watch: {
    'current': 'currentChange'
  },
  methods: {
    // 前一页
    prePage () {
      if (this.current > 1) this.current--
    },
    // 下一页
    afterPage () {
      if (this.current < this.pageCount) this.current++
    },
    // 改变当前页
    changeCurrent (current, index) {
      if (typeof (current) === 'string') {
        this.current = index === 1 ? this.current - 5 : this.current + 5
        this.current = this.current < 1 ? 1 : this.current
        this.current = this.current > this.pageCount ? this.pageCount : this.current
      }
      if (typeof (current) === 'number') {
        this.current = current
      }
    },
    // 页面改变，通知父组件
    currentChange () {
      this.$emit('current-change', this.current)
    }
  },
}
</script>

<style lang='scss' scoped>
.active {
	color: #f08200;
}
.my-pagenation {
  width: 100%;
  .my-pagenation-wrap {
    margin: auto;
    display: flex;
    width: 400px;
    .total-text {
      color: #606266;
      font-weight: 700;
      font-size: 12px;
      line-height: 28px;
    }
    .btn {
      margin: 0;
      flex: auto;
      padding: 0;
      text-align: center;
      border: none;
      outline: none;
      background: 50% no-repeat;
      background-size: 16px;
      background-color: #fff;
      color: #303133;
      cursor: pointer;
      line-height: 26px;
    }
    .btn:hover {
      color: #f08200;
    }
    .disabled {
      color: #c0c4cc;
      background-color: #fff;
      cursor: not-allowed;
    }
    .disabled:hover {
      color: #c0c4cc;
    }
    .pagenation-list {
      display: flex;
      li {
        margin: 0;
        padding: 0 4px;
        background: #fff;
        vertical-align: top;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        .num {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        .pre-icon:after {
          content: '...';
          position: relative;
          top: -4px;
        }
        .pre-icon:hover:after {
          content: '《';
          top: 0;
          left: -3px;
        }
        .after-icon:after {
          content: '...';
          position: relative;
          top: -4px;
        }
        .after-icon:hover:after {
          content: '》';
          top: 0;
          left: 3px;
        }
      }
      li:hover {
        color: #f08200;
      }
    }
  }
}
</style>
