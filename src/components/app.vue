<style lang="sass"> @import '../styles/common.scss'; </style>
<style>
  @import '../styles/reset.css';
  header {
    width: 100%;
    /* transition: top 500ms cubic-bezier(0.56, -0.29, 0.57, 1), opacity 100ms; */
  }
  main {
    min-height: calc(100% - 44px);
    overflow: hidden;
  }
  footer {
    /* position: fixed; */
    width: 100%;
    /* transition: bottom 500ms cubic-bezier(0.56, -0.29, 0.57, 1), opacity 100ms; */
  }
  .sidebar {
    float: left;
    width: 235px;
    min-height: 10em;
    height: 100%;
  }
/*   .content {
    overflow: hidden;
    background-color: #fff;
  } */
</style>

<template>
  <xc-header></xc-header>
  <!-- <main> -->
  <router-view></router-view>
  <!-- </main> -->
  <slot></slot>
</template>

<script>
  import Header from 'components/header.vue';
  import Footer from 'components/footer.vue';
  import Sidebar from 'components/sidebar.vue';

  export default {
    replace: false,
    data () {
      return {
        headerHeight: 0,
        footerHeight: 0,
        scrolltop: 0,
        scrollbottom: 0,
        showSidebar: false
      }
    },
    methods: {},
    computed: {
      headerStyle () {
        return {
          marginBottom: -this.headerHeight + 'px',
          top: this.scrolltop > this.headerHeight ? -this.headerHeight + 'px' : 0,
          opacity: this.scrolltop > this.headerHeight ? 0.5 : 1
        };
      },
      mianStyle () {
        return {
          paddingBottom: this.$route.path != '/' ? '0' : this.footerHeight + 'px'
        };
      },
      footerStyle () {
        return {
          marginTop: -this.footerHeight + 'px',
          bottom: this.scrollbottom > this.footerHeight/2 ? -this.footerHeight + 'px' : 0,
          opacity: this.scrollbottom > this.footerHeight/2 ? 0.5 : 1
        };
      }
    },
    components: {
      'xc-header': Header,
      'xc-footer': Footer,
      'xc-sidebar': Sidebar
    },
    created () {
      var _this = this;
      window.onscroll = function() {
        _this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        _this.scrollbottom = (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.clientHeight || document.body.clientHeight) - (document.documentElement.scrollTop || document.body.scrollTop);
      };
    },
    ready () {
      var footerDom = document.getElementsByTagName('footer');
      var headerDom = document.getElementsByTagName('header');
      if (footerDom.length && headerDom.length) {
        this.headerHeight = headerDom[0].clientHeight;
        this.footerHeight = footerDom[0].clientHeight;
      }
    },
    beforeDestroy () {
      window.onscroll = null;
    }
  }
</script>
