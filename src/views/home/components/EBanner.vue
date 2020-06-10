<template>
  <div class='e-banner'>
	<ul class='banner-list' v-if='bannerdData && bannerdData.length > 0'>
		<li
			class='banner-list-item'
			:class='{"active": item.display}'
			:style='{"background-image": `url(${item.imgUrl})`, "height": `${height}px`}'
			v-for='(item, index) in bannerdData'
			@click='clickLink(item)'
			:key='index'>
		</li>
	</ul>
	<ul class='banner-list-btn'>
		<li
			class='banner-list-btn-item'
			:class='{"active": item.display}'
			v-for='(item, index) in bannerdData'
			@click='checkBanner(item.index)'
			:key='index'>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'e-banner',
  props: {
    bannerdData: {
      type: Array
    },
    height: {
      type: Number,
      default: 600
    }
  },
  data () {
    return {
      timer: null, // 定时器
      indexMark: 0
    }
  },
  computed: {
    // banner长度
    BannerLength () {
      return this.bannerdData.length
    }
  },
  watch: {},
  methods: {
    // banner动画
    bannerTimer () {
      let length = this.bannerdData.length
      this.bannerdData[this.indexMark % length].display = false
      this.indexMark++
      this.bannerdData[this.indexMark % length].display = true
    },
    // 选择banner
    checkBanner (index) {
      let length = this.bannerdData.length
      this.bannerdData[this.indexMark % length].display = false
      this.indexMark = index
      this.bannerdData[this.indexMark % length].display = true
    },
    // 跳转
    clickLink (item) {
      if (item.linkType === 1) {
        return window.open(item.link, '_self')
      }
      return false
    },
  },
  mounted () {
    this.timer = setInterval(() => {
      this.bannerTimer()
    }, 6000)
  }
}
</script>

<style lang='scss' scoped>
.e-banner {
	position: relative;
	width: 100%;
	min-width: 1000px;;
	.banner-list {
		position: relative;
		height: 543px;
		.banner-list-item {
			position: absolute;
			top: 0;
			transition: opacity 1s;
			width: 100%;
			background-size: 100% 100%;
			background: no-repeat center center;
			opacity: 0;
			height: 543px;
			cursor: pointer;
		}
		.active {
			opacity: 1;
		}
	}
	.banner-list-btn {
		position: absolute;
		left: 50%;
		bottom: 20px;
		display: flex;
		transform: translate(-50%);
		.banner-list-btn-item {
			width: 12px;
			height: 12px;
			margin: 0 8px;
			background-color: #ccc;
			border-radius: 50%;
			cursor: pointer;
		}
		.active {
			background-color: #f08200;
		}
	}
}
</style>
