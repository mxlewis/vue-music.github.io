<template>
    <div class="pic_wrap">
        <!-- 图片-->
        <!--<div class="list_pic clearfix">-->
            <!--<a class="fl"v-for="item in imgs"><img :src="item"/></a>-->
        <!--</div>-->
      <!-- slides -->
      <swiper>
      <swiper-slide v-for="item,index in imgs" class="swiperli">
        <img :src="item">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>

      <!-- 显示按钮-->
      <p class="tab_btn_wrap clearfix">
        <a class="fl"v-for="item,index in imgs" :class="[index===0?'active':'']"></a>
      </p>
      {{getIndex}}
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import $ from 'jQuery'

    export default {
    data(){
    return{
      autoplay: 500,
      direction : 'vertical',
      grabCursor : true,
      setWrapperSize :true,
      autoHeight: true,
      pagination : '.swiper-pagination',
      paginationClickable :true,
//      prevButton:'.swiper-button-prev',//上一张
//      nextButton:'.swiper-button-next',//下一张
      scrollbar:'.swiper-scrollbar',//滚动条
      mousewheelControl : true,
      observeParents:true,
      debugger: true,
    }
  },
  components: {
    swiper,
      swiperSlide
  },
  props:['imgs'],
  computed:{
    getIndex(){
      console.log($('swiper-slide').find('.swiper-slide-active'))
      return
    }
  }
}

</script>

<style>
  .swiperli img{
    width: 750px;
  }
</style>
