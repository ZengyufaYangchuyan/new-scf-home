<template>
  <div id='wangEditor'>
    <div class='editor' ref='editorElem' :style='style'></div>
  </div>
</template>

<script>
// components
import {Loading} from 'element-ui'
// libs
import WangEditor from 'wangeditor'
import menus from './menus.js'
// apis
import * as fileApi from '../../../apis/fileApi.js'

export default {
  name: 'wangEditor',
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '500px'
    },
  },
  data () {
    return {
      editor: this.value,
      content: this.value,
    }
  },
  computed: {
    style () {
      const styles = {}

      if (this.height) {
        styles.height = this.height
      }
      return styles
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (html) {
        if (this.value === this.content) {
          return
        }
        this.content = html
        if (this.editor) {
          this.editor.txt.html(html)
        }
      }
    }
  },
  methods: {
    createEitor () {
      this.editor = new WangEditor(this.$refs.editorElem)
      this.editor.customConfig.menus = menus

      // 使用base664保存图片
      // this.editor.customConfig.uploadImgShowBase64 = true

      // 上传图片到服务器
      this.editor.customConfig.customUploadImg = async (files, insert) => {
        // files 是 input 中选中的文件列表
        // insert 是获取图片 url 后，插入到编辑器的方法
        const loading = Loading.service({
          text: '上传中'
        })

        for (const i in files) {
          const item = files[i]

          const imgData = new FormData()
          imgData.append('file', item)
          const {data, code} = await fileApi.uploadImg(imgData)
          if (code !== 200) return loading.close()

          // 上传代码返回结果之后，将图片插入到编辑器中
          insert(data)
        }

        loading.close()
      }

      this.editor.customConfig.onchange = (html) => {
        if (this.editor.txt.text()) {
          // 有文字输入
          this.onChange(html)
        } else if (html.indexOf('<img') !== -1) {
          // 没有文字，只有图片输入
          this.onChange(html)
        } else {
          // 没有文字、图片
          this.noValue()
        }
      }
      this.editor.create() // 创建富文本实例
    },
    onChange (html) {
      this.content = html
      this.$emit('update:value', html)
    },
    noValue () {
      this.content = ''
      this.$emit('update:value', '')
    }
  },
  mounted () {
    this.createEitor()
  },

}
</script>

<style lang='scss'>
#wangEditor {
  background-color: #fff;
  .editor {
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    .w-e-text-container {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
