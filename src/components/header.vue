<style>
  header {
    height: 44px;
    font-size: 16px;
  }
  header nav {
    display: block;
    height: 44px;
    max-width: 980px;
    margin: 0 auto;
    padding: 0 22px;
    z-index: 2;
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