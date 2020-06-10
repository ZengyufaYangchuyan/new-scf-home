<template>
  <div class='e-banner'>
		<ul class='banner-list'>
			<li
				class='banner-list-item'
				:class='{"active": item.display}'
				v-for='(item, index) in bannerdData'
				:key='index'>
				<img :src='item.imgUrl' v-if='item.imgUrl'>
			</li>
		</ul>
		<ul class='banner-list-btn'>
			<li
				class='banner-list-btn-item'
				v-for='(item, index) in bannerdData'
				@click='checkBanner(index)'
				:key='index'>
				<span class='btn' v-if='item.imgUrl' :class='{"active": item.display}'></span>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'e-banner',
  props: {
    bannerdData: Array,
  },
  data () {
    return {
      timer: null, // 定时器
      indexMark: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    // banner动画
    bannerTimer () {
      let length = this.bannerdData.length
      if (!length) return
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
	height: 100%;
	.banner-list {
		height: 100%;
		.banner-list-item {
			position: absolute;
			top: 0;
			transition: opacity 1s;
			width: 100%;
			height: 100%;
			opacity: 0;
			img {
				width: 100%;
				height: 100%;
			}
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
			width: 16px;
			height: 16px;
			margin: 0 4px;
			cursor: pointer;
			.btn {
				margin: 4px;
				display: inline-block;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: #ccc;
			}
			.active {
				background-color: #f08200;
			}
		}
	}
}
</style>
