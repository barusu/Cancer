<style lang="sass">
  .sidebar-wrapper {
    float: left;
    width: 11rem;
    padding: 1rem;
    > ul {
      background: hsla(0,0%,100%,.8);
      border: 1px solid #d8d8d8;
      border-radius: 3px;
      overflow: hidden;
      > li {
        line-height: 1rem;
        font-size: .65rem;
        border-top: 1px solid #eee;
        background: hsla(0,0%,100%,.95);
        font-weight: 300;
        color: #555;
      }
      > .head {
        padding: .4rem .5rem;
        font-weight: 600;
        background: hsla(0,0%,97%,.9);
        border: 0;
      }
    }
    li > a {
      display: block;
      padding: .4rem .5rem;
      color: inherit;
      &.router-link-active {
        border-left: 2px solid #d84315;
      }
    }
  }
  main {
    > .content-wrapper {
      padding: 1rem;
      overflow: hidden;
    }
    &.user {
      background-color: inherit;
      > .content-wrapper {
        padding-left: 0;
      }
    }
  }
</style>

<template>
  <main class="user">
    <div class="sidebar-wrapper">
      <ul>
        <li class="head">Personal settings</li>
        <li><router-link :to="{name: 'Profile'}">个人信息</router-link></li>
        <li><router-link :to="{name: 'Account'}">账号设置</router-link></li>
      </ul>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {}
</script>
