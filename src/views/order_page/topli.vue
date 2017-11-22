<template>
  <div>
      <!-- 头部-->
    <div class="topliHeadone" >
      <img :src="this.$route.query.picUrl"/>
    </div>
    <!-- 头部2-->
    <div class="topliHeadtwo">
      <a class="active">单曲</a>
      <a>详情</a>
    </div>
    <!-- 头部3-->
    <div class="topliHeadthree clearfix">
      <div class="fl clearfix">
        <a class="fl">
          <img src="../../assets/img/suiji1.png">
        </a>
        <span class="fl">随机播放全部</span>
      </div>
      <div class="fl clearfix">
        <a class="fl">
          <img src="../../assets/img/xiazai1.png">
        </a>
        <span class="fl">下载</span>
      </div>
      <div class="fl clearfix">
        <a class="fl">
          <img src="../../assets/img/duoxuan.png">
        </a>
        <span class="fl">多选</span>
      </div>
    </div>
    <!-- 主体部分-->
    <ul class="topliContent clearfix">
      <router-link :to="{name:'playHome',query:{'songid':item[4],'songname':item[0],'singer':item[2].name}}"
                   class="clearfix fl"
                   v-for="item,index in this.$store.state.topli"
                   tag="li">
        <span class="fl num">{{index+1}}</span>
        <div class="fl clearfix text">
          <p class="songname">{{item[0]}}</p>
            <div class="clearfix  ps">
              <p class="fl">{{item[2].name}}</p>
              <p class="fl"v-if="item[3].name">/{{item[3].name}}</p>
              <p class="fl">&nbsp·&nbsp{{item[1]}}</p>
            </div>
          <span class="fr more">...</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import $ from 'jQuery'

  export default {
    mounted(){
    console.log(this.$route.query.picUrl)
    console.log(this.$route.query.topTitle)

    this.$store.dispatch('topli',this.$route.query.id);// 巅峰榜中每个li点击跳转
  }
  }
</script>

<style>
</style>
