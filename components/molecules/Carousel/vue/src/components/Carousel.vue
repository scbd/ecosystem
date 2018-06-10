<template>
  <div  :class="[$style.carousel]" class="carousel slide debug" >
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        “Here’s the simple truth: you can’t innovate on products without first innovating the way you build them.”
         — Alex Schleifer - Head of Design - Airbnb<br/><br/><br/><br/><br/><br/><br/>
      </div>

      <div class="item">
        “Here’s the simple truth: you can’t innovate on products without first innovating the way you build them.”
         — Alex Schleifer - Head of Design - Airbnb<br/><br/><br/><br/>
      </div>

      <div class="item">
        “Here’s the simple truth: you can’t innovate on products without first innovating the way you build them.”
         — Alex Schleifer - Head of Design - Airbnb<br/><br/>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import "@biodiversity/ecosystem-style/layouts/base/build.min.css"
import "@biodiversity/ecosystem-style/patterns/carousel/build.css"
export default {
  name: 'Carousel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.carousel{
  width:100%;
  height:100% !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
<style>
html,body {
    height:100%;
}
  .debugB {
    border: 1px solid blue;
  }
  .debug {
    border: 1px solid red;
  }
</style>
