<style>
  body header {
    padding: 0 1.5rem 0 5%;
  }
  header {
    height: 3em;
    font-size: .6rem;
  }
  header .bgdiv {
    position: absolute;
    top: 0; left: 0;
    background: inherit;
    width: 100%;
    height: 1.8rem;
    overflow: hidden;
    z-index: 1;
  }
  header .bgdiv::before {
    content: "";
    position: absolute;
    top: -10px; left: -20px;
    display: block;
    width: 100%;
    height: 56px;
    padding: 0 20px;
    background: inherit;
    background-position: 50% 0;
    filter: blur(5px);
  }
  header nav {
    display: block;
    height: 100%;
    padding: 0 0 0 1.5rem;
  }
  header .user {
    float: right;
    width: 13rem;
    height: 100%;
    pointer-events: none;
  }
  header .user .headImg {
    display: block;
    text-align: center;
    width: 100%;
    height: 1.8rem;
    cursor: default;
  }
  .user .user-img {
    width: 1.6rem;
    height: 1.6rem;
    margin: .1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all .5s;
    pointer-events: auto;
  }
  .user:hover .user-img {
    width: 3rem;
    height: 3rem;
    margin: .2rem;
  }
  .user .profile {
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    transition: all 500ms;
    padding-top: 0;
    color: #444;
    font-size: .7rem;
    pointer-events: auto;
  }
  .user:hover .profile {
    padding-top: 1.6rem;
  }
  .user-name {
    font-weight: 600;
  }
  .user .profile .hover-tag {
    max-height: 0;
    overflow: hidden;
    transition: all 500ms;
  }
  .user:hover .profile .hover-tag {
    max-height: 2em;
  }
  .user .profile .user-info {
    text-align: center;
    font-size: 12px;
    line-height: 2;
    overflow: hidden;
  }
  .profile .menu {
    margin: 0 1em;
  }
  .profile .menu::before {
    content: "";
    display: block;
    height: 0;
    box-shadow: 0 -1px 0 0 #ccc;
  }
  .user:hover .profile .menu::before {
    height: .2rem;
  }
  .profile .menu > li {
    display: inline-block;
    float: left;
    width: 50%;
    line-height: 2;
    overflow: hidden;
  }
  .profile .menu > li > span {
    line-height: 1;
    cursor: pointer;
  }
  .profile .menu i.base {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 .5em 0 1em;
  }
  .profile .foot {
    overflow: hidden;
    line-height: 2;
    background-color: rgba(0,0,0,.1);
    text-align: right;
    padding-left: 1em;
    padding-right: 1em;
  }
  .profile .foot > button {
    padding: 0;
    border: 0;
    font-size: inherit;
    background: transparent;
    cursor: pointer;
  }
  .base.img-user {
    background: url('../images/user.png') 50% 50% / 100% auto no-repeat;
  }



  header > nav > ul {
    height: 100%;
    width: auto;
    user-select: none;
    margin: 0;
  }

  header > nav > ul > li {
    height: 100%;
    display: inline-block;
  }
  header li > a {
    display: inline-block;
    height: 100%;
    padding: 0 .5rem;
    font-size: .6rem;
    line-height: 1.8rem;
    cursor: pointer;
  }


  /* header nav > ul > li:first-child {
    margin: 0;
    border-radius: 3px 0 0 3px;
  }
  header nav > ul > li:last-child {
    border-radius: 0 3px 3px 0;
  }
  header li {
    position: relative;
  }
  header li.active {
    color: #e67e22;
  }
  header li > ul {
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 999;
    border-left: 3px solid #e67e22;
    margin-top: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms;
  }
  header li > ul > li {
    margin-top: 1px;
    background-color: #fff;
    padding: 0 6px;
    line-height: 2;
    &::after {
      content: ' ';
    }
  }
  header li > ul > li:first-child {
    margin: 0;
  }
  header li:hover > ul {
    top: 35px;
    opacity: 1;
    visibility: visible;
  } */
</style>

<template>
  <header>
    <div class="bgdiv"></div>
    <div class="user">
      <div class="headImg"><img class="user-img" src="http://i1.hdslb.com/bfs/face/9529116397158d565fe4ed2121b7c9c963f1db65.jpg"></div>
      <div class="profile">
        <div class="user-info hover-tag">
          <i class="fa fa-mars"></i>
          <span class="user-name">Shiro</span>
          <i class="fa fa-venus-mars"></i>
        </div>
        <ul class="menu clearfix">
          <li class="hover-tag"><span><i class="base img-user"></i>用户中心</span></li>
          <li class="hover-tag"><span><i class="base img-user"></i>修改密码</span></li>
          <li class="hover-tag"><span><i class="base img-user"></i>用户中心</span></li>
        </ul>
        <div class="foot hover-tag">
          <button type="button">退出</button></div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="clearfix">
        <li v-for="r in data"><router-link :to="r.link" v-html="r.name"></router-link></li>
      </ul>
    </nav>
    <nav v-if="isOpen">
      <ul>
        <li class="active">
          <span>test</span>
          <ul>
            <li>test11</li>
            <li>test121212</li>
          </ul>
        </li>
        <li>
          <span>test2</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    props: {
      data: {
        type: Array
      }
    }
  }
</script>