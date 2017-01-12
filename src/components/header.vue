<style>
  body header {
    padding: 0 1.5rem 0 5%;
    color: #444;
  }
  header {
    position: relative;
    height: 3em;
    font-size: .6rem;
    background: inherit;
    background-position: 50% -100%;
  }
  header::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%;
    height: 36px;
    background: rgba(255,255,255,.4);
    z-index: 2;
  }
  header > div,
  header > nav {
    position: relative;
    z-index: 4;
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

  header .user-center {
    float: right;
    height: 100%;
  }

  header nav {
    display: block;
    height: 100%;
    padding: 0 0 0 1.5rem;
    float: left;
  }
  header > nav > ul {
    height: 100%;
    width: auto;
    user-select: none;
    margin: 0;
  }
  header > nav > ul > li {
    position: relative;
    height: 100%;
    display: inline-block;
  }
  nav > ul > li:hover {
    background: rgba(255,255,255,.1);
  }
  .liste {
    position: absolute;
    background: rgba(255,255,255,.8);
    width: 10em;
    font-size: .6rem;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }
  .liste > li {
    max-height: 0;
    transition: all .3s;
    line-height: 2;
    padding: 0 1em;
    overflow: hidden;
  }
  .liste > li::before {
    content: "";
    display: inline-block;
    border: 2px solid #4dd0e1;
    border-width: 2px 2px 0 0;
    border-radius: 0 1px 0 0;
    width: .5em;
    height: .5em;
    box-sizing: border-box;
    transform: rotate(45deg);
    margin: 0 1em 0 0;
    transition: all .3s;
  }
  .liste > li:hover {
    background: rgba(255,255,255,.5);
  }
  .liste > li:hover::before {
    margin: 0 .8em 0 .4em;
  }
  nav > ul > li:hover .liste {
    z-index: 999;
  }
  nav > ul > li:hover .liste > li {
    max-height: 2em;
  }
  header li > a {
    display: inline-block;
    height: 100%;
    padding: 0 1em;
    font-size: .6rem;
    line-height: 1.8rem;
    color: inherit;
    cursor: pointer;
  }
</style>

<template>
  <header>
    <div class="bgdiv"></div>
    <user-center class="user-center"></user-center>
    <nav>
      <ul class="clearfix">
        <li v-for="r in data">
          <router-link :to="r.link" v-html="r.name"></router-link>
          <ul class="liste">
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
            <li>test5</li>
          </ul>
        </li>
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
  import userCenter from 'components/user-center';

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
    },
    components: {
      'user-center': userCenter
    }
  }
</script>