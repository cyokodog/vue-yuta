<template>

<div>
  <div v-if="auth.isAuthed">

<div class="st-Header">
<div class="st-Header_Container">

<div class="hd-TitleArea">
  <div class="hd-TitleArea_Title"><h1><a href="/">Yuta Be Good!</a></h1><span class="hd-TitleArea_SnsIcons"></span></div>
  <div class="hd-TitleArea_SubTitle">His Performance Manager</div>
  <div class="hd-TitleArea_Eyecatch">
    <div v-if="auth.isAuthed">
      <account
        :auth="auth"
      ></account>
    </div>
    <div v-else>Logging in...</div>
  </div>
</div>

</div>
</div>

<router-view/>

<footer class="st-Footer">
<div class="st-Footer_Container">
<h3 class="st-Footer_SectionTitle">Another Month</h3>
<ul>
<li><a href="/public/angular">2018/02</a></li>
<li><a href="/public/angular">2018/01</a></li>
<li><a href="/public/angular">2017/12</a></li>
</ul>
</div>
</footer>

  </div>
  <div v-else>Logging in...</div>
</div>

</template>

<style lang="sass">
@import "./assets/scss/vendor/_media-queries";
@import "./assets/scss/vendor/_modern-normalize";
@import "./assets/scss/_vars";
@import "./assets/scss/_reset.scss";
@import "./assets/scss/_structure.scss";
</style>

<script>
export default require('./App.js')
</script>
