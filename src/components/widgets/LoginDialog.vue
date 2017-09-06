<template>
  <transition name="dialog-fade">
    <article class="baas-dialog-wrapper" v-show="_user.showLogin" @click.self="toggleShowLogin">
      <section ref="dialog">
        <div class="el-dialog__header">
          <span class="el-dialog__title">登录</span>
          <div class="el-dialog__headerbtn" @click="toggleShowLogin"><i class="el-dialog__close el-icon el-icon-close"></i></div>
        </div>
        <div class="bass-dialog-body">
          <section @keyup.enter="login">
            <el-form :model="loginData" label-position="top" :rules="loginRule"
              ref="loginForm" label-width="100px" class="login-form">
              <el-form-item label="手机号码" prop="mobile" style="margin-bottom: 1.75rem;">
                <el-input v-model.trim="loginData.mobile" :maxlength="11" autofocus></el-input>
              </el-form-item>
              <el-form-item label="登录密码" prop="password">
                <el-input type="password" v-model.trim="loginData.password" :maxlength="20" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="图形验证码" :class="{'is-error': captcha.error}">
                <el-input type="text" v-model.trim="captcha.code" placeholder="请输入右侧图形验证码"
                  :readonly="captcha.passed" :icon="captcha.passed ? 'check' : ''" @blur="captchaCode">
                  <figure class="image image-captcha" slot="append" v-if="!captcha.passed"
                    @click="getImageCaptcha">
                    <img :src="captchaUrl || initImgUrl" />
                  </figure>
                </el-input>
                <div class="el-form-item__error" v-show="captcha.error">图形验证码错误</div>
              </el-form-item>
            </el-form>
          </section>
          <section class="bass-dialog-operation">
            <router-link to="/forgotten">忘记登录密码？</router-link>
            <br>
            <el-button type="primary" @click="login">登录</el-button>
          </section>
        </div>
        <div class="bass-dialog-fotter">
          <router-link to="/register" class="register-btn">没有账号? 去注册</router-link>
        </div>
      </section>
    </article>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import validate from '@/utils/validation'
// import Popup from 'element-ui/src/utils/popup'

export default {
  name: 'login-dialog',

  // mixins: [Popup],

  data () {
    return {
      loginData: {
        mobile: null,
        password: null,
        graphCode: null
      },
      loginRule: {
        mobile: [{ validator: validate.mobile, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码' }]
      },
      initImgUrl: null,
      captchaUrl: null,
      captcha: {
        code: null,
        passed: false,
        error: false
      }
    }
  },
  methods: {
    ...mapActions([
      'userLogin',
      'toggleShowLogin',
      'saveState'
    ]),
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (!valid) return
        this.loginData.graphCode = this.captcha.code
        this.$http.post('/login', this.loginData).then(res => {
          let resData = res.data
          if (resData.rtnCode === 200) {
            this.$toast.success({ message: '登录成功，欢迎回来' })
            let userId = resData.data.userId
            this.userLogin(userId)
            this.$http({
              method: 'post',
              url: '/user/getUserInfo',
              headers: {
                userId: userId
              }
            }).then(res => {
              let orgName = res.data.data.companyName
              let userMobile = res.data.data.mobile
              let userInfo = {}
              userInfo.orgName = orgName
              userInfo.userMobile = userMobile
              this.saveState(userInfo)
            })
          } else if (resData.rtnCode === 302) {
            this.captchaUrl = '/api/open/captcha/graph?time=' + new Date().getTime()
            this.captcha.error = true
            this.captcha.code = null
            return
          } else if (resData.rtnCode === 303) {
            this.captcha.error = false
            this.captchaUrl = '/api/open/captcha/graph?time=' + new Date().getTime()
            this.captcha.code = null
            this.loginData.password = null
            let errorCount = parseInt(resData.data)
            if (errorCount < 5) {
              this.$toast.warning({ message: resData.rtnMsg + '您还有' + Math.abs(5 - errorCount) + '次机会' })
              return
            } else if (errorCount === 5) {
              this.$toast.warning({ message: '账户已被锁定，请30分钟后重试' })
              return
            }
          }
        }).catch(err => {
          let error = err.toString()
          error = error.slice(error.length - 3, error.length).toString()
          if (error === '423') {
            this.$toast.warning({ message: '账户已被锁定，请30分钟后重试' })
            this.captchaUrl = '/api/open/captcha/graph?time=' + new Date().getTime()
            this.loginData.password = null
            this.captcha.code = null
          } else {
            this.$toast.error({ message: '网络故障' })
          }
        })
      })
    },
    closeDialog (test) {
      console.log(test)
    },
    getImageCaptcha () {
      this.captchaUrl = '/api/open/captcha/graph?time=' + new Date().getTime()
    },
    captchaCode () {
      if (this.captcha.code) {
        this.captcha.error = false
      } else {
        this.captcha.error = true
      }
    }
  },

  computed: {
    ...mapGetters({
      _user: '_user'
    })
  },

  mounted () {
    this.rendered = true
    this.initImgUrl = '/api/open/captcha/graph?time=' + new Date().getTime()
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.baas-dialog-wrapper {
  text-align: left;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  z-index: 1024;
  background-color: rgba(245, 245, 245, 0.65);

  .el-dialog__header{
    padding: 2rem;
  }

  > section {
    position: absolute;
    left: 50%;
    top: 15%;
    height: auto;
    width: 25rem;
    border: 1px solid #D3DCE6;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12), 0 0 6px 0 rgba(0,0,0,0.04);

    > h1 {
      font-size: 2rem;
      padding: 4rem 7.3rem 3rem 2rem;
      color: $grey-darker;
      letter-spacing: 0;
      line-height: 20px;

    }
  }
}

.bass-dialog-body {
  padding: 0 2rem 2rem;
  border-bottom: 1px solid #EFF2F7;
  .image-captcha {
    margin: 0 -10px;
    max-height:36px;
    width: 120px;
    border: 0;
    &:hover {
      cursor: pointer;
    }
    img{
      max-width:100%;
      border: 0;
      height: 2.125rem;
    }
  }
  > .bass-dialog-operation {
    text-align: right;

    > a {
      font-size: 0.875rem;
    }

    > button {
      margin-top: 2rem;
      width: 100%;
    }
  }
}

.bass-dialog-fotter {
  text-align: center;

  .register-btn {
    display: block;
    font-size: 0.875rem;
    margin: 0 auto;
    padding: 2rem 0;
  }
}
.el-dialog__header {
    padding: 2rem 4rem;
}
</style>
