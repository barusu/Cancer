<style>
  .project-wrapper {
    padding: .5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .project-item {
    float: left;
    width: 10rem;
    height: 8rem;
    margin: .5rem;
    background-color: #fff;
  }
</style>

<template>
  <main class="project-wrapper clearfix">
    <div class="card project-item" v-for="i in 30"></div>
  </main>
</template>

<script>
  export default {}
</script>