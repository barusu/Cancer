<style lang="sass">
  .sidebar-wrapper {
    float: left;
    width: 11rem;
    padding: 1rem;
    > ul {
      background: hsla(0,0%,100%,.8);
      border: 1px solid #d8d8d8;
      border-radius: 3px;
      > li {
        padding: .4rem .5rem;
        line-height: 1rem;
        font-size: .65rem;
        background: hsla(0,0%,100%,.95);
        font-weight: 300;
        color: #555;
      }
      > .head {
        font-weight: 600;
        background: hsla(0,0%,97%,.9);
        border: 0;
      }
    }
  }
  main {
    > .content {
      overflow: hidden;
    }
  }
</style>

<template>
  <main>
    <div class="sidebar-wrapper">
      <ul>
        <li class="head">Personal settings</li>
        <li>修改密码</li>
      </ul>
    </div>
    <div class="content"></div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
      };
    }
  }
</script>
