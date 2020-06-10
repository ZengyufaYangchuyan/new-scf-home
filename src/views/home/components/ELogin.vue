<template>
  <div class='login'>
	<div class='login-content'>
		你好，请<a href='https://www.primelink.cn/cloud' class='login-btn'>登录</a><span class='default'>，免费注册</span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'e-login',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.login {
	width: 100%;
	min-width: 1000px;
	background-color: #f7f7f7;
	.login-content {
		margin: auto;
		width: 1000px;
		height: 30px;
		line-height: 30px;
		text-align: right;
		color: #7f8080;
		font-size: 12px;
		.login-btn {
			color: #02B089;
			font-size: 14px;
			cursor: pointer;
			text-decoration: none;
		}
		.default {
			font-size: 14px;
		}
	}
}
</style>
