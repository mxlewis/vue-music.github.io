<template>
  <div class="play_head">
    <a class="fl goback">
      <img src="../assets/img/qiehuan.png">
    </a>
    <span class="fl songer_name">{{songname}}</span>
    <p class="fr more">
      <a href="javascript;:"class="fl"></a>
      <a href="javascript;:"class="fl"></a>
      <a href="javascript;:"class="fl"></a>
    </p>
  </div>
</template>
<script>
  export default {
    props:['songname']
  }
</script>
<style>
</style>
