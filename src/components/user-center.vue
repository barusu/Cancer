<style lang="sass">
  .user-center {
    width: 13rem;
    pointer-events: none;
    .headImg {
      display: block;
      text-align: center;
      width: 100%;
      height: 1.8rem;
      cursor: default;
    }
    .user-img {
      width: 1.6rem;
      height: 1.6rem;
      margin: .1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all .5s;
      pointer-events: auto;
    }
    .profile {
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      transition: all 500ms;
      padding-top: 0;
      color: #444;
      font-size: .7rem;
      pointer-events: auto;
      .hover-tag {
        max-height: 0;
        overflow: hidden;
        transition: all 500ms;
      }
      li.hover-tag:hover {
        color: #f77;
      }
      .user-info {
        text-align: center;
        font-size: 12px;
        line-height: 2;
        overflow: hidden;
      }
      .menu {
        margin: 0 1em;
        &::before {
          content: "";
          display: block;
          height: 0;
          box-shadow: 0 -1px 0 0 #ccc;
        }
        > li {
          display: inline-block;
          float: left;
          width: 50%;
          line-height: 2;
          overflow: hidden;
          > span {
            line-height: 1;
            cursor: pointer;
          }
        }
        i.base {
          display: inline-block;
          width: 1em;
          height: 1em;
          margin: 0 .5em 0 1em;
        }
      }
      .foot {
        overflow: hidden;
        line-height: 2;
        background-color: rgba(0,0,0,.1);
        text-align: right;
        padding-left: 1em;
        padding-right: 1em;
        > button {
          padding: 0;
          border: 0;
          font-size: inherit;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }
      }
    }
    .user-name {
      font-weight: 600;
    }
    &:hover {
      .user-img {
        width: 3rem;
        height: 3rem;
        margin: .2rem;
      }
      .profile {
        padding-top: 1.6rem;
        .hover-tag {
          max-height: 2em;
        }
        .menu {
          &::before {
            height: .2rem;
          }
        }
      }
    }
    .base.img-user {
      background: url('../images/user.png') 50% 50% / 100% auto no-repeat;
    }
  }
</style>

<template>
  <div class="user-center">
    <div class="headImg">
      <img class="user-img" :src="user.img">
    </div>
    <div class="profile">
      <div class="user-info hover-tag">
        <i class="fa fa-mars"></i>
        <span class="user-name" v-html="user.name"></span>
        <i class="fa fa-venus-mars"></i>
      </div>
      <ul class="menu clearfix">
        <li class="hover-tag"><span><i class="base img-user"></i>用户中心</span></li>
        <li class="hover-tag"><span><i class="base img-user"></i>修改密码</span></li>
        <li class="hover-tag"><span><i class="base img-user"></i>用户中心</span></li>
      </ul>
      <div class="foot hover-tag">
        <button type="button" @click="logout">退出</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'libs/store/lawliet';

  export default {
    data() {
      return {
        user: store.state
      };
    },
    methods: {
      logout() {
        store.clear();
        this.$router.push('login');
      }
    }
  };
</script>
