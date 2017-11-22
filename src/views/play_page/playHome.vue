<template>
    <div class="palyPage">
        <play-head :songname="songname"></play-head>
      <!-- content-->
      <div class="play_content">
        <!-- 头部-->
        <div class="play_content_head">
          <!-- 歌手姓名-->
          <div class="play_songer_name">
            <span class="">-</span>
            <span>{{singer}}</span>
            <span>-</span>
          </div>
          <!-- 音效选择-->
          <div class="effect">
            <p>
              <a>标准</a>
              <a>MV</a>
              <a class="active">音效</a>
              <a>换图</a>
            </p>
          </div>
        </div>
        <!-- 歌词部分-->
        <div class="play_content_lyric lyric">
          <p v-for="data,key in lyric " :class="[key===timeaddcur?'cur':'']">{{data[1]}}</p>

        </div>
      </div>

      <!-- 进度条部分-->
      <div class="playprogress_wrap">
        <!-- 第一排-->
        <div class="first_row">
          <p>
            <a class="fl"></a>
            <a class="fl active"></a>
            <a class="fl"></a>
          </p>
        </div>
        <!-- 第二排-->
        <div class="second_row clearfix">
          <span class="fl progress_time">{{time}}</span>
          <!-- 进度-->
          <div class="fl process">
            <span class="strip">
              <!-- 进度条的播放位置-->
            <a class="point" :style="{width:indicatorPosition+'px'}"><i></i></a>
            </span>
          </div>
          <span class="fl total_time">{{totalTime}}</span>
          <!-- audio-->
          <audio
            ref="eleaudio"
            id="music"
            @timeupdate="updateTime"
            ></audio>
        </div>
        <!-- 第三排-->
        <div class="three_row clearfix">
          <a class="music_loop fl"></a>
          <div class="turn_off fl clearfix">
            <a class="fl"></a>
            <a class="fl"@click="pauseFn"></a>
            <a class="fl"></a>
          </div>
          <a class="music_menu fl"></a>
        </div>
      </div>
      <!-- 底部分享部分-->
      <div class="play_bottom clearfix">
        <a class="collection fl"></a>
        <a class="download fl"></a>
        <a class="forward fl"></a>
        <a class="leave_message fl"></a>
      </div>
    </div>
</template>

<script>
  import $ from 'jQuery'
  import Base64 from '../../base64'

  import playHead from '@/components/play_header'

  import {mapMutations, mapGetters, mapState} from 'vuex'

    export default {
      data(){
        return{
          isId:null,
          lyric:null,
          progressChange:this.$store.state.progressWidth,
          time:null,// 填入当前时间
          totalTime:null,// 填入歌曲的总时间
          timeaddcur:'00:00.00',
          songid:null,// 歌曲的id
          songname:null,// 歌曲的名字
          singer:null,// 歌唱者
          songmp:null,// 歌曲mp3
        }
      },
      components: {
        playHead
      },
      mounted(){
//        this.songid=this.$route.query.songid;
        this.songid=205000888;
        this.songname=this.$route.query.songname;
        this.singer=this.$route.query.singer;
        console.log(this.songid)
        $.ajax({// 通过id请求歌词
//          204506746
//          209139931
          url:"https://api.darlin.me/music/lyric/"+this.songid+"/?jsonpCallback=c",
          dataType:'jsonp',
          jsonp:'callback',
          success:((data)=>{
      console.log(data)
            this.lyric=Base64
              .decode(data.lyric)
              .split('[')
              .slice(5)
              .map(str => {
                let t = str.split(']')
                return {[t[0]]: [[t[0]], t[1]]}
              })
              .reduce((a, b) => {
                return {...a, ...b}
              })
          })
        }),
        this.$refs.eleaudio.src="http://ws.stream.qqmusic.qq.com//205000888.m4a?fromtag=46";
        this.$refs.eleaudio.play();
        this.$store.commit('changeProgressWidth',$('.strip')[0].offsetWidth);
      },
      methods:{
        updateTime(){// 歌词时间更新，提交mutations
          console.log(2)
          this.$store.commit('updateCurrentTime',parseInt($('#music')[0].currentTime));
          this.$store.commit('updateDuration',parseInt($('#music')[0].duration))
        },
        pauseFn(){
          console.log(1)
          if(this.$refs.eleaudio.play()){
            this.$refs.eleaudio.pause();
          }else {
            this.$refs.eleaudio.play()
          }

        }
      },
      computed:{
        ...mapState({
            indicatorPosition (state) {
              let dataTime
              for(let data in this.lyric){
                dataTime = data.split(':')
                dataTime = parseInt(dataTime[0]) * 60 + parseInt(dataTime[1])
                if(dataTime===state.currentTime){
                  this.timeaddcur=data
                  let ele = $('.lyric').find('.cur')
                  if (ele.length > 0) {
                    $('.lyric').animate({'scrollTop': $('.lyric').scrollTop() + ele.offset().top - $('.lyric').offset().top - 150}, 600)
                  }
                }
                dataTime = ''
              }
//          当前时间换算后填入页面
              this.time=parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2)
              this.totalTime=parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2)

//          进度条的更新
              if(state.progressWidth){// 如果进度条的总长度加载进来了
                let scale=state.currentTime / state.duration;// 计算时间播放比例
                return state.progressWidth*scale
              }
            }
        })
      }
    }
</script>

<style>
  .palyPage{
    background-color: #464042;
  }
</style>
