<style lang="sass">
  nav.nav {
    display: block;
    height: 100%;
    padding: 0 0 0 1.5rem;
    float: left;
    > ul {
      height: 100%;
      width: auto;
      user-select: none;
      margin: 0;
      > li {
        position: relative;
        height: 100%;
        display: inline-block;
        &:hover {
          background: rgba(255,255,255,.3);
          .liste {
            z-index: 999;
            > li {
              max-height: 2em;
            }
          }
        }
      }
    }
    .liste {
      position: absolute;
      background: rgba(255,255,255,.8);
      width: 10em;
      font-size: .6rem;
      border-radius: 0 0 2px 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.2);
      overflow: hidden;
      > li {
        max-height: 0;
        transition: all .3s;
        line-height: 2;
        padding: 0 1em;
        overflow: hidden;
        > a {
          line-height: 2;
        }
        &::before {
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
        &:hover {
          background: rgba(255,255,255,.7);
          &::before {
            margin: 0 .8em 0 .4em;
          }
        }
      }
    }
    li > a {
      display: inline-block;
      height: 100%;
      padding: 0 1em;
      font-size: .6rem;
      line-height: 1.8rem;
      color: inherit;
      cursor: pointer;
    }
  }
</style>

<template>
  <nav class="nav">
    <ul class="clearfix">
      <li v-for="r in nav">
        <router-link :to="r.link" v-html="r.name"></router-link>
        <ul class="liste" v-if="r.children">
          <li v-for="rc in r.children"><router-link :to="rc.link" v-html="rc.name"></router-link></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {NAV} from '../libs/const';

  export default {
    data() {
      return {
        nav: NAV
      };
    }
  }
</script>
