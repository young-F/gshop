<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">xx外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form action="">
          <div class="on">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号" />
              <button disabled="disabled" class="get_verification">
                获取验证码
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册xx外卖账号的手机，登录时将自动注册，且代表同意
              <a href="javacript:;">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                />
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码" />
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text"></span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" />
              </section>
            </section>
          </div>
        </form>
      </div>
      <a href="javascript:;" class="go_back">
        <i class="iconfont icon-arrowLeft"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
