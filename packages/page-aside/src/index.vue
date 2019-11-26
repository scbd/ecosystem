<template>
  <aside class="left-article-menu-container">
    <div  class="block block-cbd-article block-navigation-block">
      <div class="content">
        <nav class="sidebar-menu navbar-collapse">
          <ul class="list-unstyled">
            <h1><a href="/information/default.shtml">Information</a></h1>

            <li class="level-0 active"><a href="#1493784566">National Information</a>
              <ul class="sub-menu-items list-unstyled level-1 collapse show active " id="1493784566">
                <li class="level-1"><a href="/countries">Country Profiles</a></li>
                <li class="level-1 selected "><a href="/information/parties.shtml">List of Parties</a></li>
                <li class="level-1"><a href="/information/nfp.shtml">Lists of National Focal Points</a></li>
                <li class="level-1"><a href="/nbsap/default.shtml">National Biodiversity Strategies and Action Plans (NBSAPs)</a></li>
                <li class="level-1"><a href="/reports/default.shtml">National Reports</a></li>
                <li class="level-1"><a href="/convention/parties/contributions.shtml">Status of Contributions</a></li>
              </ul>
            </li>
            <li class="level-0"><a  href="#1199802243">Multimedia</a>
              <ul class="sub-menu-items list-unstyled level-1 collapse" id="1199802243">
                <li class="level-1"><a href="/videos/default.shtml">Video Gallery</a></li>
                <li class="level-1"><a href="http://www.youtube.com/user/chmcbd">YouTube</a></li>
              </ul>
            </li>
            <li class="level-0"><a  href="#1160594868">General References</a>
              <ul class="sub-menu-items list-unstyled level-1 collapse" id="1160594868">
                <li class="level-1"><a href="/decisions/default.shtml">Decisions</a></li>
                <li class="level-1"><a href="/recommendations/default.shtml">Recommendations</a></li>
                <li class="level-1"><a href="/meetings/default.shtml">Meetings</a></li>
                <li class="level-1"><a href="/information/library.shtml">Library and Documentation</a></li>
                <li class="level-1"><a href="/guidelines/default.shtml">Principles, Guidelines and Tools</a></li>
                <li class="level-1"><a href="/doc/negotiation/default.shtml">Resources for Negotiators</a></li>
                <li class="level-1"><a href="/ecolex/default.shtml">ECOLEX - A Gateway to Biodiversity Law</a></li>
                <li class="level-1"><a href="/case-studies/default.shtml">Case Studies</a></li>
                <li class="level-1"><a href="/links/default.shtml">Related Websites</a></li>
                <li class="level-1"><a href="/information/adm-fin/default.shtml">Administrative and Financial Information</a></li>
              </ul>
            </li>
            <li class="level-0"><a  href="#716851151">Thematic Databases</a>
              <ul class="sub-menu-items list-unstyled level-1 collapse" id="716851151">
                <li class="level-1"><a href="/ecosystem/sourcebook/">Ecosystem Approach Sourcebook</a></li>
                <li class="level-1"><a href="http://adaptation.biodiv.org">Database on Climate Change Adaptation</a></li>
                <li class="level-1"><a href="/incentives/case-studies.shtml">Database on Incentive Measures</a></li>
                <li class="level-1"><a href="/assessments/">Database on Scientific Assessments</a></li>
                <li class="level-1"><a href="/programmes/cross-cutting/technology/search.aspx">Database on Technology Transfer</a></li>
                <li class="level-1"><a href="/impact/case-studies/default.shtml">Case Studies on Impact Assessment</a></li>
                <li class="level-1"><a href="/drylands/cs/default.shtml">Case Studies on Dry and Sub-Humid land Biodiversity</a></li>
              </ul>
            </li>
            <li class="level-0"><a href="/information/hosting-meetings">Hosting Meetings</a></li>
          </ul>
        </nav>

      </div>
    </div>

  </aside>
</template>
<script>
// import WPSideBar from '@components/StructuredData/WPSideBar'
// import Nav       from '@components/Nav'

// const inject = { components: { default: { WPSideBar, Nav } } }

export default {
  name : 'PageAside',
  props: [ 'siteNavigationElements', 'basePath' ],
  //inject,
  isMobile
}

function isMobile(){
  if(!window) return false
  return window.matchMedia('(max-width: 768px)').matches
}
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
  @import "https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css";

  .slide-fade-enter-active { transition:  all .2s ease; }
  .slide-fade-leave-active { transition: all .3s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>
<style>
  .sidebar-menu {
    color: white;
    margin-left: 30px;
  }

</style>