<template>
  <div class='cms-system-login'>
    <img class='feature-logo' src='../../../assets/image/system/logo.png' alt='logo' />
    <div class='content-inner'>
      <div class='toggle-box'>
        <span>管 理 员 登 录</span>
      </div>
      <div class='content-form'>
        <el-form ref="form">
          <el-form-item>
            <el-input class='login-input' v-model='query.loginName' placeholder='请输入登录帐号'></el-input>
          </el-form-item>
          <el-form-item>
            <el-input class='login-input' type='password' v-model='query.password' placeholder='请输入登录密码'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class='login-button' type='primary' @click='login'>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// vuex
import {mapGetters, mapMutations, mapActions} from 'vuex'
// apis
import * as accountApi from '../../../apis/accountApi.js'
export default {
  name: 'cms-system-login',
  components: {},
  data () {
    return {
      query: {
        loginName: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['loginSession']),
  },
  watch: {},
  methods: {
    ...mapMutations(['setloginUser']),
    ...mapActions(['getLoginInfo']),
    // 登录
    async login () {
      if (!this.query.loginName) {
        return this.$message.error('请输入登录帐号！')
      }
      if (!this.query.password) {
        return this.$message.error('请输入登录密码！')
      }

      const {data, code} = await accountApi.login({
        loginName: this.query.loginName,
        password: this.$md5(this.query.password)
      }).catch(e => e)

      if (code !== 200) {
        return this.$message.error('帐号或者密码错误！')
      }
      let admin = {
        sessionId: data.sessionId,
        user: JSON.parse(data.user)
      }
      this.setloginUser(admin)

      this.$message.success('登录成功！')
      this.$router.push('/system')
    },
  },
  async mounted () {
    await this.getLoginInfo()
    if (this.setloginUser) {
      this.$router.push('/system/news/list')
    }
  },
}
</script>

<style lang='scss'>
.cms-system-login {
  position: relative;
  background: url('../../../assets/image/system/bg.jpg') no-repeat 0 0;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 768px;
  .feature-logo {
    margin: 40px 0 0 40px;
  }
  .content-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 340px;
    background-color: #fff;
    box-shadow: 0 0 10px	rgba(238,124,0,.4);
    border-radius: 6px;
    .toggle-box {
      font-size: 22px;
      line-height: 60px;
      text-align: center;
      color: #ee7c00;
    }
    .content-form {
      .el-form {
        padding: 0 30px;
        .el-form-item {
          margin: 30px 0;
        }
      }
      .login-input {
        .el-input__inner {
          height: 50px;
          line-height: 48px;
          font-size: 16px;
          border-radius: 25px;
        }
      }
      .login-button {
        width: 100%;
        height: 50px;
        font-size: 20px;
        border-radius: 25px;
      }
    }
  }
}
</style>
