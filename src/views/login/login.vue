<template>
  <div>
    <van-nav-bar left-arrow right-text="注册" :border="false" />
    <div class="main">
      <div class="wrapper">
        <div class="title">登录</div>
        <div class="welcome">欢迎使用Xchat</div>
      </div>
      <input type="text" class="name" placeholder="请输入用户名" />
      <input type="password" class="password" placeholder="请输入密码" />
    </div>
  </div>
</template>

<script>
import * as API_LOGIN from '@/api/login.js'
export default {
  name: "login",
  data() {
    return {
      params: {
        name:'小明',
        password: '123456'
      }
    }
  },
  mounted() {
    API_LOGIN.login(this.params)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper {
  margin-top: 113px;
  .title {
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #272832;
    margin-bottom: 7px;
  }
  .welcome {
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: rgba(39, 40, 50, 0.5);
    margin-bottom: 36px;
  }
}

.name,
.password {
  border: 0;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(39, 40, 50, 0.08);
}
</style>
