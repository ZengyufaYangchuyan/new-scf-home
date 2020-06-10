<template>
  <div class=''>
    <div>
      <el-button @click='apiTest'>接口一</el-button><span>{{data1}}</span>
    </div>
    <div>
      <el-button @click='myApiTest'>get</el-button><span>{{data2}}</span>
    </div>
    <div>
      <el-button @click='apiPostTest'>post</el-button><span>{{data3.name}}-{{data3.age}}</span>
    </div>
    <div>
      <el-button @click='apiDeleteTest'>delete</el-button><span>{{data4.name}}-{{data4.age}}</span>
    </div>
  </div>
</template>

<script>
// apis
import * as systemApi from '../../../../../apis/systemApi.js'
export default {
  name: '',
  components: {},
  data () {
    return {
      data1: '',
      data2: [],
      data3: {
        name: '',
        age: 0
      },
      data4: {
        name: '',
        age: 0
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    async apiTest () {
      const {title} = await systemApi.testApi().catch(e => e)
      this.data1 = title
    },
    // get
    async myApiTest () {
      const data = await systemApi.apiGet({
        age: 25,
        title: 'haha'
      }).catch(e => e)
      this.data2 = data
    },
    // post
    async apiPostTest () {
      const {name, age} = await systemApi.apiPost({
        age: 25,
        title: 'haha'
      }).catch(e => e)
      this.data3 = {name, age}
    },
    // delete
    async apiDeleteTest () {
      const {name, age} = await systemApi.apiDelete({
        age: 25,
        title: 'haha'
      }).catch(e => e)
      this.data4 = {name, age}
    },
  },
  mounted () {}
}
</script>

<style lang='scss' scoped>

</style>
