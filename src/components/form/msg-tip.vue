<style></style>

<template>
  <transition name="fade">
    <div class="errorMsg clearfix" v-show="show">
      <span class="off" @click="show = false"></span>
      <span v-html="msg"></span>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    props: ['msg'],
    watch: {
      msg(v) {
        if(v) {
          this.show = true;
        }
      }
    },
    created() {
      if(this.msg) {
        this.show = true;
      }
    }
  }
</script>