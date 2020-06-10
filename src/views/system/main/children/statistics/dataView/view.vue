<template>
  <div class='data-view'>
    <div class='browse-data'>
      <box-title title='访问量统计'></box-title>
      <div class='data-box'>
        <div class='data-card color-red'>
          <p class='title'>日访问量</p>
          <p class='num'>{{dayNum}}</p>
        </div>
        <div class='data-card color-ora'>
          <p class='title'>月访问量</p>
          <p class='num'>{{monthNum}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import BoxTitle from '../../../components/BoxTitle.vue'
export default {
  name: 'data-view',
  components: {
    BoxTitle
  },
  data () {
    return {
      dayNum: null,
      monthNum: null
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
    this.dayNum = Math.floor(Math.random() * 89 + 10)
    this.monthNum = Math.floor(Math.random() * 899 + 100)
  },
}
</script>

<style lang='scss' scoped>
.data-view {
  padding: 20px;
  .browse-data {
    .data-box {
      margin-top: 20px;
      display: flex;
      .data-card {
        margin: 0 30px 20px 0;
        width: 300px;
        height: 200px;
        border: 1px solid #999;
        border-top: 15px solid #999;
        box-sizing: border-box;
        border-radius: 5px;
        text-align: center;
        .title {
          font-size: 24px;
          line-height: 60px;
        }
        .num {
          margin-top: 35px;
          line-height: 30px;
          font-size: 50px;
        }
      }
      .color-red {
        border-color: rgba(30,144,255, .8);
        box-shadow: 0 0 8px rgba(30,144,255, .4);
        color: rgba(30,144,255, 1);
      }
      .color-ora {
        border-color: rgba(238,124,0, .8);
        box-shadow: 0 0 8px rgba(238,124,0, .4);
        color: rgba(238,124,0, 1);
      }
    }
  }
}
</style>
