<template>
    <div class="recommend_wrap">
        <!-- 歌单推荐-->
        <div class="recommend_box">
            <div class="recommend">歌单推荐</div>
            <a class="enterBtn"></a>
        </div>
        <!-- 清单-->
        <ul class="recommend_list clearfix">
            <li class="fl"v-for="item in hotlist">
                <img :src="item.cover">
                <a>{{item.title}}</a>
            </li>
            <!--<li class="fl">-->
                <!--<img src="../../assets/img/ico-5.png">-->
                <!--<a>坚持不住了！表白这些甜蜜风的韩国男团</a>-->
            <!--</li>-->
            <!--<li class="fl">-->
                <!--<img src="../../assets/img/ico-5.png">-->
                <!--<a>坚持不住了！表白这些甜蜜风的韩国男团</a>-->
            <!--</li>-->
            <!--<li class="fl">-->
                <!--<img src="../../assets/img/ico-5.png">-->
                <!--<a>坚持不住了！表白这些甜蜜风的韩国男团</a>-->
            <!--</li>-->
            <!--<li class="fl">-->
                <!--<img src="../../assets/img/ico-5.png">-->
                <!--<a>坚持不住了！表白这些甜蜜风的韩国男团</a>-->
            <!--</li>-->
            <!--<li class="fl">-->
                <!--<img src="../../assets/img/ico-5.png">-->
                <!--<a>坚持不住了！表白这些甜蜜风的韩国男团</a>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
      props:['hotlist']
    }
</script>
