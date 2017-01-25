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
    transition: box-shadow .5s;
  }
  header:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  header::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%;
    height: 1.8rem;
    background: rgba(255,255,255,.4);
    z-index: 2;
  }
  header > div,
  header > nav {
    position: relative;
    z-index: 4;
  }
  header .user {
    float: right;
    height: 100%;
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
</style>

<template>
  <header>
    <div class="bgdiv"></div>
    <user-center class="user"></user-center>
    <head-nav></head-nav>
  </header>
</template>

<script>
  import userCenter from 'components/user-center';
  import nav from 'components/nav';

  export default {
    components: {
      'user-center': userCenter,
      'head-nav': nav
    }
  }
</script>