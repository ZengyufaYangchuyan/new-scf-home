<template>
  <div class='page'>
    <e-header></e-header>
    <router-view></router-view>
    <e-footer></e-footer>
  </div>
</template>

<script>
// components
import EHeader from './components/EHeader.vue'
import EFooter from './components/EFooter.vue'
// vuex
import {mapActions} from 'vuex'
export default {
  name: 'page',
  components: {
    EHeader,
    EFooter
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions(['getBasicSetting', 'createBaiduCode', 'settingHeadSEO']),
    async init () {
      await this.getBasicSetting()
      await Promise.all([
        this.createBaiduCode(),
        this.settingHeadSEO()
      ])
    }
  },
  mounted () {
    this.init()
  },
}
</script>

<style lang='scss'>
.page {
  background-color: #fff;
  width: 100%;
  min-width: 1000px;
}
</style>
