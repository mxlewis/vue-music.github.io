<template>
  <div class="orderwrap">
    <!-- 头部1-->
    <!-- QQ音乐巅峰榜-->
    <div class="summitwrap">
      <div class="summithead">QQ音乐巅峰榜</div>
      <!-- 类目-->
      <ul>
        <router-link
          :to="{name:'topli',query:{'id':item.id,'picUrl':item.picUrl,'topTitle':item.topTitle}}"
          class="clearfix"v-for="item in this.$store.state.topList"
          tag="li">
          <img :src="item.picUrl" class="fl">
          <div class="fl">
            <p v-for="item1,index in item.songList">{{(index+1)%4}} <span>{{item1.songname}}</span>
                  <span class="line"> - </span>
                  <span class="name">{{item1.singername}}</span>
            </p>
            <!--<p>2 <span>婚礼的祝福(Live)</span>-->
              <!--<span class="line"> - </span>-->
              <!--<span class="name">刘维</span>-->
            <!--</p>-->
            <!--<p>3 <span>永不消逝(Live)</span>-->
              <!--<span class="line"> - </span>-->
              <!--<span class="name">金志文</span>-->
            <!--</p>-->
          </div>
        </router-link>

      </ul>
    </div>
    <!-- 全球榜-->
    <div class="globalwrap">
      <div class="head">全球榜</div>
      <ul class="globallist">
        <li class="fl"v-for="item in this.$store.state.globalList">
          <img :src="item.pic">
          <a>{{item.name}}</a>
        </li>
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
        <!--<li class="fl">-->
          <!--<img src="../../assets/img/golbal-1.png">-->
          <!--<a>vivo 手机 高品质音乐榜</a>-->
        <!--</li>-->
      </ul>
    </div>
<!--底部播放-->
    <song-play></song-play>
  </div>
</template>

<script>
  import $ from 'jQuery'

  import songPlay from '../home_page/songsPlay.vue'

  export default {
    components:{
      songPlay
    },
    mounted(){
      this.$store.dispatch('homeDate');// 全球榜请求数据
      this.$store.dispatch('topAjax');// 巅峰榜请求数据
    }
}
</script>

<style>
.summitwrap,.globalwrap{
    background-color:#f4f4f4;
  }
</style>
