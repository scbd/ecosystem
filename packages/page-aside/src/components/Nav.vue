<template>
  <li class="level-0">
    <a href="#1446215040">News &amp; Communications</a>
    <ul class="sub-menu-items list-unstyled level-1">
      <li class="level-1">
        <a href="/new/default.shtml">Web Announcements</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  .sidebar-menu ul.active {
    overflow: hidden;
    padding-left: 10px;
  }

  .sidebar-menu>ul>li {
    padding-left: 10px;
  }

  .sidebar-menu .level-0>a {
    color: white;
    text-transform: uppercase;
  }

  .sidebar-menu .level-1>a {
    color: white;
  }

  .sidebar-menu .level-2>a {
    color: white;
    margin-left: 20px;
  }

  .sidebar-menu li.active.level-0 {
    background: #137b4b;
    padding: 10px 30px;
    margin-right: 20px;
    margin-left: -20px;
  }

  .sidebar-menu li.active>ul.active {
    background: #009b48;
    margin-right: -50px;
    margin-left: -15px;
    padding-left: 15px;
  }

  .sidebar-menu li.selected>a {
    color: #265a4f;
    display: inline-block;
    width: 100%;
    background-color: white;
  }

  .sidebar-menu li:not(.level-0) a::before {
    content: "\00a0 >\00a0";
  }

  .sidebar-menu ul.active {
    background: #009b48;
    margin-left: -15px;
    padding-left: 15px;
  }

  .sidebar-menu ul>p {
    padding-left: 10px;
    margin-bottom: 0.2rem;
    /*background: #009B48;*/
  }

  .sidebar-menu ul>h1>a {
    color: white;
    font-size: 1.5rem;
  }

  nav[id$="sidebar"] ul li.no-levels {
    background: #009b48;
  }

  nav.sidebar-menu>ul>li.selected {
    background: white;
  }
</style>