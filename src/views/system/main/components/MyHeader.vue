<template>
  <div class='my-header'>
    <span class='header-logo' @click='$router.push("/homePage")'></span>
		<div class='user-wrap'>
			<div class='name-wrapper'>
				<span class='name'>{{user.loginName}}</span>
				<span class='icon'></span>
			</div>
			<div class='select-box'>
				<div class='btn' @click='logout'>退出登录</div>
				<div class='btn' @click='dialogVisible = true'>修改密码</div>
			</div>
		</div>
		<el-dialog
			title='修改密码'
			width='350px'
			top='20vh'
			class='password-dialog'
			@close='cleanData'
			:show-close='false'
			:visible.sync='dialogVisible'>
			<el-form class='password-dialog-form' :model='resetQuery'>
				<el-form-item>
					<el-input type='password' :clearable='true' v-model="resetQuery.oldPassword" placeholder='原密码'></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type='password' :clearable='true' @blur='inputPasswordFirst' v-model='resetQuery.newPassword' placeholder='新密码'></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type='password' :clearable='true' @blur='inputPasswordConfirm' v-model='resetQuery.newPasswordAgain' placeholder='确认新密码'></el-input>
					<p v-if='showTips' class='tips'>两次输入的新密码不一致，请检查</p>
				</el-form-item>
			</el-form>
			<div slot='footer' class='dialog-footer'>
				<el-button @click='dialogVisible = false'>取 消</el-button>
				<el-button type='primary' :disabled='!canSubmit' @click='reset'>确 定</el-button>
			</div>
		</el-dialog>
  </div>
</template>

<script>
// vuex
import {mapState, mapMutations} from 'vuex'
// apis
import * as accountApi from '../../../../apis/accountApi.js'

export default {
  name: 'my-header',
  components: {},
  data () {
    return {
      dialogVisible: false,
      showTips: false,
      resetQuery: {
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: '',
      }
    }
  },
  computed: {
    ...mapState(['user']),
    canSubmit () {
      if (this.resetQuery.oldPassword === '') return false
      if (this.resetQuery.newPassword === '') return false
      if (this.resetQuery.newPasswordAgain === '') return false
      if (this.showTips) return false
      return true
    }
  },
  watch: {},
  methods: {
    ...mapMutations(['logoutClearAcount']),
    // 退出登录
    logout () {
      this.$messageBox.confirm('确认退出登录？', '提示', {
        confirmButton: '确认',
        cancelButton: '取消'
      }).then(() => {
        this.logoutClearAcount()
        this.confirmLogout()
      })
    },
    // 确认退出登录
    async confirmLogout (message) {
      const {code} = await accountApi.logout().catch(e => e)
      if (code !== 200) {
        return this.$message.error('退出登录失败！')
      }
      this.$router.push('/login')
      return this.$message.success(message || '退出登录成功！')
    },
    // 修改密码
    reset () {
      this.$messageBox.confirm('确认修改密码?', '提示', {
        confirmButton: '确认',
        cancelButton: '取消'
      }).then(() => {
        this.comfirmReset()
      }).catch(e => e)
    },
    // 确认修改密码
    async comfirmReset () {
      const {code} = await accountApi.resetPassword({
        loginName: this.user.loginName,
        password: this.$md5(this.resetQuery.oldPassword),
        newPawword: this.$md5(this.resetQuery.newPassword),
      }).catch(e => e)
      if (code !== 200) return this.$message.error('密码修改失败！')
      this.logoutClearAcount()
      this.confirmLogout('密码修改成功，请重新登录！')
    },
    // 新密码
    inputPasswordFirst () {
      this.checkedFn()
    },
    // 确认新密码
    inputPasswordConfirm () {
      this.checkedFn = this.checkedPassword
      this.checkedPassword()
    },
    // 验证两次新密码的输入是否一致
    checkedPassword () {
      this.showTips = this.resetQuery.newPassword !== this.resetQuery.newPasswordAgain
    },
    // 新密码验证规则容器，默认没规则
    checkedFn: () => {},
    // 弹窗关闭，重置状态
    cleanData () {
      this.checkedFn = () => {}
      this.showTips = false
      this.resetQuery.oldPassword = ''
      this.resetQuery.newPassword = ''
      this.resetQuery.newPasswordAgain = ''
    },
  },
}
</script>

<style lang='scss'>
$icon-img: url('../../../../assets/image/system/icons.png');
.my-header {
	position: relative;
	padding: 0  14px;
	box-sizing: border-box;
	border-bottom: 1px solid #e5e5e5;
	border-left: 1px solid #e5e5e5;
	min-width: 1200px;
	height: 60px;
	line-height: 60px;
	background-color: #fff;
	.header-logo {
		position: absolute;
		top: 15px;
		display: inline-block;
		width: 120px;
		height: 30px;
		cursor: pointer;
		background-image: $icon-img;
		background-repeat: no-repeat;
		background-position: -1px -1px;
	}
	.user-wrap {
		position: absolute;
		top: 0;
		right: 15px;
		display: inline-block;
		cursor: pointer;
    padding-right: 10px;
		z-index: 999;
		.name-wrapper {
			.name {
				margin-right: 10px;
				font-size: 16px;
				color: #666;
			}
			.icon {
				position: relative;
				top: -2px;
				display: inline-block;
				width: 14px;
				height: 8px;
				background-image: $icon-img;
				background-position: -95px -35px;
			}
		}
		.select-box {
			position: absolute;
			top: 50px;
			right: 0;
			background-color: #fff;
			box-shadow: 0px 0px 9px 1px rgba(91,94,97,0.24);
			border-radius: 2px;
			display: none;
			.btn {
				font-size: 14px;
        color: #4F4F4F;
        width: 150px;
        text-align: center;
        cursor: pointer;
        transition: all .2s;
        line-height: 40px;
			}
			.btn:hover {
				background-color: #fdf2e6;
				color: #f19633;
			}
		}
	}
	.user-wrap:hover {
		.select-box {
			display: block;
		}
	}
	.password-dialog {
		.el-dialog__header {
			padding: 15px 20px;
			height: 30px;
			text-align: center;
			.el-dialog__title {
				vertical-align: top;
				line-height: 30px;
			}
		}
		.el-dialog__body {
			padding: 15px 25px 35px;
		}
		.password-dialog-form {
			.el-form-item {
				vertical-align: top;
				height: 40px;
				.el-form-item__label {
					vertical-align: top;
				}
				.tips {
					color: red;
					line-height: 24px;
				}
			}
			.el-form-item:last-child {
				margin-bottom: 0;
			}
		}
		.el-dialog__footer {
			text-align: center;
			padding: 0 15px 15px;
		}
	}
}
</style>
