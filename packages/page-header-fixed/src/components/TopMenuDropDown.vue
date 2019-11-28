<template>
  <ul class="navbar-nav mr-auto">
    <li @mouseover="open(index)" @mouseleave="close(index)" v-on:click.capture="toggle(index)" v-for="(aMenu,index) in siteNavElms" :key="index" :id="makeSelector(aMenu, 'SNE')" class="topmenu nav-item dropdown">
      <a href="#" :title="aMenu.name" class="nav-link dropdown-toggle"  role="button" >
        {{aMenu.name}}
      </a>

      <transition name="slide-fade">
        <div v-if="hideShows[index]"  class="dropdown-menu show">
          <div class="dropdown-item-container">
            <a v-for="(aSubMenu, index) in aMenu.hasPart" :key="index" :href="aSubMenu.url" :title="aSubMenu.name" :id="makeSelector(aSubMenu, 'SNE')" class="dropdown-item">
              <span class="dropdown-item-label">{{aSubMenu.name}}</span>
            </a>
          </div>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
import makeSelector from '@modules/makeSelector'

export default {
  name   : 'TopMenuDropDown',
  props  : [ 'siteNavElms', 'opts' ],
  methods: { toggle, open, close, initState, set, makeSelector },
  data,
  mounted
}

function data(){
  const hideShows  = []
  const init       = false
  const isMobile   = false

  return { hideShows, init, isMobile }
}

function mounted(){
  this.isMobile = window.matchMedia('(max-width: 768px)').matches
  this.initState()
}

function initState(){
  if(!Array.isArray(this.siteNavElms)) return

  const length = this.siteNavElms.length

  if(!length) return

  for (let i = 0; i < length; i++)
    this.hideShows[i] = false
}

function toggle(index){
  if(!this.isMobile) return
  this.hideShows[index] = !this.hideShows[index]
  this.$forceUpdate()
}

function open (index){ this.set(index, true) }

function close (index){ this.set(index, false) }

function set (index, state){
  if(this.isMobile) return
  this.hideShows[index] = state
  this.$forceUpdate()
}
</script>