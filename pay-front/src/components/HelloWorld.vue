<template>
  <div>
    <div>
      <Button type="primary" @click="pay(8)">8分钟</Button>
    </div>
    <div>
      <Button type="primary">16分钟</Button>
    </div>
    <div>
      <Button type="primary">24分钟</Button>
    </div>
    <div>
      <a href="https://open.weixin.qq.com/connect/oauth2/authorize?
    appid=wx15c*********&redirect_uri=http%3a%2f%2fwww.***.com%2fpay.jsp&response_type=code&
    scope=snsapi_base#wechat_redirect">去支付页面pay.jsp并携带code</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    methods:{
      pay(minutes){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    margin-bottom: 10px;
  }
</style>
