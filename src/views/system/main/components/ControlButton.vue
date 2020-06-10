<template>
  <div class='control-button' :style='{"text-align": position}'>
    <el-button @click='cancel' v-if='hasCancel'>取消</el-button>
    <el-button @click='reset' v-if='hasReset'>重置</el-button>
    <el-button type='primary' @click='save' v-if='hasSave'>保存</el-button>
    <el-button type='primary' @click='add' v-if='hasAdd'>新增</el-button>
  </div>
</template>

<script>
export default {
  name: 'control-button',
  props: {
    button: {
      type: Array,
      default () {
        return ['cancel', 'reset', 'save', 'add']
      }
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      buttonType: [
        {type: 'cancel', label: '取消', style: ''},
        {type: 'reset', label: '重置', style: ''},
        {type: 'save', label: '保存', style: 'primary'},
      ]
    }
  },
  computed: {
    hasCancel () {
      return this.button.indexOf('cancel') > -1
    },
    hasReset () {
      return this.button.indexOf('reset') > -1
    },
    hasSave () {
      return this.button.indexOf('save') > -1
    },
    hasAdd () {
      return this.button.indexOf('add') > -1
    },
  },
  methods: {
    // 取消
    cancel () {
      this.$emit('cancel')
    },
    // 重置
    reset () {
      this.$emit('reset')
    },
    // 保存
    save () {
      this.$emit('save')
    },
    // 新增
    add () {
      this.$emit('add')
    }
  },
}
</script>

<style lang='scss' scoped>
.control-button {
  width: 100%;
}
</style>
