<template>
  <div class='box-title'>
    <div :class='typeStyle[type]'>
      <h3>{{title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box-title',
  components: {},
  props: {
    title: {
      type: String,
      default: '请输入标题'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {}
  },
  computed: {
    // 采用策略模式，可扩展样式，在尾部添加
    typeStyle () {
      return {
        'default': 'default'
      }
    }
  },
  watch: {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.box-title {
  margin: 10px 0;
  .default {
    padding: 0 0 5px 3px;
    box-sizing: border-box;
    width: 130px;
    border-bottom: 1px solid #ccc;
    h3 {
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
