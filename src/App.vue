<template>
<div :class="{original_colorBg: scrollPosition < 2500,change_colorBg: scrollPosition > 2500}"></div>
<div class="stars"> </div>
<div class="stars2"> </div>
<div class="stars3"> </div>

<nav>
  <ul>
    <li @click="gotointro" :class="{top_colorTxt: scrollPosition < 2500 , middle_colorTxt: scrollPosition >2500,bottom_colorTxt :scrollPosition >7750 }">HOME</li>
    <li @click="gotoabout" :class="{top_colorTxt: scrollPosition < 2500 , middle_colorTxt: scrollPosition >2500,bottom_colorTxt :scrollPosition >7750 }">About</li>
    <li @click="gotostrength" :class="{top_colorTxt: scrollPosition < 2500 , middle_colorTxt: scrollPosition >2500,bottom_colorTxt :scrollPosition >7750 }">Strength</li>
    <li @click="gotoproject" :class="{top_colorTxt: scrollPosition < 2500 , middle_colorTxt: scrollPosition >2500,bottom_colorTxt :scrollPosition >7750 }">Project</li>
    <li @click="gotocontect" :class="{top_colorTxt: scrollPosition < 2500 , middle_colorTxt: scrollPosition >2500,bottom_colorTxt :scrollPosition >7750 }">Contact</li>
  </ul>
</nav>
  <intro id="intro"/>
  <about id="about"/> 
  <strength id="strength"/>
  <project id="project"/>
  <contactMe id="contactMe" />

</template>

<script>

import intro from './components/intro.vue'
import about from './components/about.vue'
import strength from './components/strength.vue'
import project from './components/project.vue'
import contactMe from './components/contactMe.vue'

export default {
  name: 'App',
  data(){
        return{
          scrollPosition: null
      }
  },
  methods: {
    gotointro(){
      const intro = document.getElementById('intro')
      if(intro) {
        intro.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoabout(){
      const about = document.getElementById('about')
      if(about) {
        about.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotostrength(){
      const strength = document.getElementById('strength')
      if(strength) {
        strength.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject(){
      const project = document.getElementById('project')
      if(project) {
        project.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotocontect(){
      const contactMe = document.getElementById('contactMe')
      if(contactMe) {
        contactMe.scrollIntoView({behavior : 'smooth'})
      }
    },
    updateScroll(){
          this.scrollPosition = window.scrollY
      }
  },
   mounted(){
      window.addEventListener('scroll', this.updateScroll);
  },
  components: {
    intro,
    about,
    strength,
    project,
    contactMe
  }

  
}
</script>

<style >
/* 배경 */
  nav{
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
  }
  
  nav ul{
    display: flex;
  }
  nav ul li{
    padding: 5px 10px;
    box-sizing: border-box;
    font-size:20px;
    cursor: pointer;
  }
  .original_colorBg {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:#212832;
    overflow: hidden;
  }
.change_colorBg {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:#eee;
    overflow: hidden;
}
.top_colorTxt {
    color:#eee;
  }
.middle_colorTxt {
    color:#393e46;
}
.bottom_colorTxt {
    color:#00FF94;
}

  @media screen and (max-width: 680px){
      nav ul li{
        font-size: 1rem;
      }
  }
  @media screen and (max-width: 400px){
    nav{
      display: none;
    }
      nav ul li{
        font-size: 0.8rem;
      }
  }
</style>
