<template>
    <router-link :to="{name:'playHome'}" class="songs_play_wrap clearfix" tag="div" >
        <div class="songs_play_left fl">
            <img class="fl"src="../../assets/img/ico-17.png">
            <p class="fl">
                <span>操作大手</span>
                <span>虞姬</span>
            </p>
        </div>
        <div class="songs_play_right fr">
            <a href="javascript:;">
                <img src="../../assets/img/ico-18.png">
            </a>
            <a href="javascript:;">
                <img src="../../assets/img/ico-19.png">
            </a>
        </div>
    </router-link>
</template>

<script>
  import $ from 'jQuery'

    export default {
    }
</script>
