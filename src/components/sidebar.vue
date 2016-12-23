<style>
  .sidebar {
    padding-top: 10px;
  }
  .sidebar li {
    position: relative;
  }
  .sidebar li > a {
    position: relative;
    display: block;
    padding: 10px 15px 10px 18px;
    font-size: 14px;
    border-top: 1px solid #eee;
  }
  .sidebar li:first-child > a {
    border-top: 0;
  }
  .sidebar li:hover > a {
    background-color: rgba(200,200,200,.2);
  }
  .sidebar > ul > li > a::before {
    content: "";
    position: absolute;
    top: 0;
    left: -3px;
    display: block;
    height: 100%;
    width: 3px;
    background-color: rgba(102,249,207,.6);
    transition: left 300ms;
  }
  .sidebar > ul > li:hover > a::before {
    left: 0;
  }
  .sidebar li > ul li {
    margin-left: -3px;
  }
  .sidebar li > ul {
    position: absolute;
    top: 0;
    right: -225px;
    width: 175px;
    z-index: 999;
    background-color: rgba(255,255,255,.8);
    opacity: 0;
    visibility: hidden;
    transition: all 300ms;
    border-left: 3px solid rgba(102,249,207,.6);
  }
  .sidebar li.active > a {
    background-color: rgba(200,200,200,.2);
  }
  .sidebar li.active > a::before {
    left: 0;
  }
/*   .sidebar li.active > a::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    border-left: 10px solid rgba(102,249,207,.6);
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  } */
  .sidebar li:hover > ul {
    right: -175px;
    opacity: 1;
    visibility: visible;
  }
</style>

<template>
  <div class="sidebar">
    <ul>
      <li class="active">
        <a href="#"><span>OriginalSin</span></a>
        <ul>
          <li> <a href="#"><span>Pride</span></a> </li>
          <li> <a href="#"><span>Envy</span></a> </li>
          <li> <a href="#"><span>Wrath</span></a> </li>
          <li> <a href="#"><span>Sloth</span></a> </li>
          <li> <a href="#"><span>Greed</span></a> </li>
          <li> <a href="#"><span>Gluttony</span></a> </li>
          <li class="active">
            <a href="#"><span>Lust</span></a>
            <ul>
              <li> <a href="#"><span>test</span></a> </li>
            </ul>
          </li>
        </ul>
      </li>
      <li> <a href="#"><span>Pride</span></a> </li>
      <li> <a href="#"><span>Pride</span></a> </li>
      <li> <a href="#"><span>Pride</span></a> </li>
      <li> <a href="#"><span>Pride</span></a> </li>
      <li> <a href="#"><span>Pride</span></a> </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>