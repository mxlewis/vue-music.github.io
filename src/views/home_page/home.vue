<template>
    <div>
        <header-nav></header-nav>
        <carousel-pic :imgs="this.$store.state.carouselimgs"></carousel-pic>
        <category></category>
        <singer-list
          :hotlist="this.$store.state.hotList"
          ></singer-list>
        <daily-recommend></daily-recommend>
        <new-songs></new-songs>
        <sole></sole>
        <radio-station></radio-station>
        <column></column>
        <lecolumn></lecolumn>
        <mv-recommend></mv-recommend>
        <songs-play></songs-play>
    </div>
</template>

<script>


    import headerNav from '@/components/header';// 头部
    import carouselPic from './carouselpic';// 轮播图
    import category from './category';// 类目
    import singerList from './singerList';// 歌单推荐
    import dailyRecommend from './dailyRecommend';// 每日为你推荐30首
    import newSongs from './newSongs';// 新歌速递
    import sole from './sole';// 独家专区
    import radioStation from './radioStation';// 精选电台
    import column from './column';// 专栏
    import lecolumn from './lecolumn';// 乐人
    import mvRecommend from './mvRecommend';// MV推荐
    import songsPlay from './songsPlay';// 底部播放


    import $ from 'jQuery'

    export default {
        mounted(){
        this.$store.dispatch('homeDate');// 歌单推荐
        this.$store.dispatch('homeDate');// 轮播图
      },
      components:{
        headerNav,
          carouselPic,
          category,
          singerList,
          dailyRecommend,
          newSongs,
          sole,
          radioStation,
          column,
          lecolumn,
          mvRecommend,
          songsPlay
      }
    }
</script>
