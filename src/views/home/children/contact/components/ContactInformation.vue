<template>
  <div class='contact-information-wrap'>
    <span class='logo' :style='{background: `url(${icon}) ${information.iconLocation[0]}px ${information.iconLocation[1]}px`}'></span>
    <div class='text-wrap'>
      <p class='text' v-for='(item, index) in information.text' :class='index === 0 ? "text-title" : "text-p"' :key='index'>
				<span v-if='index === 0'>{{information.label}}</span>
				{{item}}
			</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    information: {
      type: Object
    },
    icon: {
      type: String
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.contact-information-wrap {
	line-height: 0;
	margin-bottom: 20px;
	.text-wrap {
		display: inline-block;
		vertical-align: top;
		.text {
			font-size: 14px;
			color: #666;
		}
		.text-title {
			line-height: 34px;
		}
		.text-p {
			line-height: 28px;
		}
	}
	.logo {
		margin-right: 10px;
		display: inline-block;
		width: 35px;
		height: 35px;
		line-height: 0;
		background-repeat: no-repeat;
	}
}
</style>
