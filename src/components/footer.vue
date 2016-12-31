<style>
  footer {
    font-size: 12px;
    padding: 1em;
    line-height: 1.5;
    color: #bbb;
    text-shadow: 0 -1px 1px hsla(0,0%,0%,.1);
  }
  footer > * {
    white-space: nowrap;
  }
  footer .police {
    position: relative;
  }
  footer .police::before {
    content: "";
    position: relative;
    top: 4px;
    display: inline-block;
    width: 18px;
    height: 20px;
    background-image: url("../images/police.png");
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0 2px 0 5px;
  }
</style>

<template>
  <footer class="center">
    <a href="http://www.miitbeian.gov.cn/" target="_blank" class="red">浙ICP备16015127号</a>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602005267" target="_blank" class="police red">浙公网安备 33010602005267号</a>
    <span>Copyright©2015-2017 <a href="http://weibo.com/u/3887741159" target="_blank" class="azure">Shiro</a> All Rights Reserved</span>
  </footer>
</template>

<script>
  export default {}
</script>