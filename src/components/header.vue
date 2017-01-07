<style>
  body header {
    padding: 0 1.5rem;
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
    overflow: hidden;
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
  header .headImg img {
    width: 1.6rem;
    height: 1.6rem;
    margin: .1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all .5s;
    pointer-events: auto;
  }
  header .user .profile {
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    pointer-events: auto;
  }



  header nav > ul {
    height: 44px;
    width: auto;
    text-align: justify;
    user-select: none;
    margin: 0 -10px;
  }
  header nav > ul::after {
    content: "";
    display: inline-block;
    width: 100%;
    line-height: 0;
    font-size: 0;
  }
  header nav > ul > li {
    height: 44px;
    display: inline-block;
  }
  header li > a {
    display: inline-block;
    height: 44px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 2.75;
    cursor: pointer;
  }


  header nav > ul > li:first-child {
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
  }
</style>

<template>
  <header>
    <div class="bgdiv"></div>
    <div class="user">
      <div class="headImg"><img src="http://i1.hdslb.com/bfs/face/9529116397158d565fe4ed2121b7c9c963f1db65.jpg"></div>
      <div class="profile">
        <div class="user-info"></div>
        <div class="user-info">
          <i class="fa fa-mars"></i>
          <span class="user-name">Shiro</span>
          <i class="fa fa-venus-mars"></i>
        </div>
        <ul class="menu">
          <li><span><i class="fa fa-bank"></i>用户中心</span></li>
          <li><span><i class="fa fa-bank"></i>修改密码</span></li>
          <li><span><i class="fa fa-bank"></i>用户中心</span></li>
        </ul>
        <div class="bottom">
          <button type="button">退出</button></div>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <template v-for="r in data"><li><router-link :to="r.link" v-html="r.name"></router-link></li>&nbsp;</template>
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