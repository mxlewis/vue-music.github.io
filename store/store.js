import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);
import $ from 'jQuery'

const store = new Vuex.Store({
    state:{
      currentTime: 0,
      duration: 0,
      progressWidth:0,
      lyric: null,
      songid:null,// 播放歌曲的id
      topList:null,// 排行榜中的巅峰榜
      globalList:null,// 排行榜中的全球榜
      hotList:null,// 歌单推荐
      carouselimgs:null,// 首页轮播图
      topli:null// 巅峰榜中的每一条
    },
    mutations:{
      updateCurrentTime (state, time) {
        //console.log(time)
        state.currentTime = time
      },
      updateDuration(state,duration){
        //console.log(duration)
        state.duration = duration
      },
      changeProgressWidth(state,changewidth){
        //console.log(changewidth)
        state.progressWidth=changewidth
      },
      globalList(state,list){// 排行中的全球榜
        state.globalList=list;
        //console.log(state.globalList)
      },
      hotlist(state,list){// 歌单推荐
        state.hotList=list;
        state.hotList.length=6;
        //console.log(state.hotList)
      },
      carousel(state,carouselimgs){// 首页轮播图
        state.carouselimgs=carouselimgs
      },
      topList(state,list){// 排行中的巅峰榜
        //console.log(list)
        state.topList=list;
        console.log(list)
      },
      topli(state,arr){// 巅峰榜中的每一条li
        state.topli=arr;
      },
      songId(state,id){
        console.log(id)
      }
    },
    getters:{
      currentTime: state => {
        return parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2)
      },
      duration: state => {
        return parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2)
      }
    },
    actions:{
      homeDate(context){
        $.ajax({// 请求首页数据
          url:"https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom27274705027870727&g_tk=619401455&jsonpCallback=recom27274705027870727&loginUin=43819930&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D",
          dataType:'jsonp',
          jsonp:'callback',
          success:((data)=>{
//            歌单推荐
            context.commit('hotlist',data.recomPlaylist.data.v_hot);

//          轮播图
            let arr=[];
            data.focus.data.content.forEach((item)=>{
              arr.push(item.pic_info.url)
            });
            context.commit('carousel',arr);

//          排行榜中的全球榜数据
            data.toplist.data.group_list.forEach((item)=>{
              if(item.group_id===1){
                context.commit('globalList',item.list)
              }
            });
          })
        })
      },
    topAjax(context){// 巅峰榜请求
        $.ajax({
          url:"http://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",
          dataType:'jsonp',
          data: {
            g_tk: 5381,
            uin: 0,
            format: 'jsonp',
            inCharset: 'utf-8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            _: new Date().getTime()
          },
          jsonp: 'jsonpCallback',
          success:((data)=>{
            context.commit('topList',data.data.topList)// 巅峰榜中的每一条
          })
        })
    },
    topli(context,id){// 巅峰榜中每一条的接口
      $.ajax({
        url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",
        dataType:'jsonp',
        data: {
          topid: id,
          format: 'jsonp',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        },
        jsonp: 'jsonpCallback',
        success:((data)=>{
          let arr=[];
          data.songlist.forEach((item)=>{
            if(!item.data.singer[0]){
              item.data.singer[0]=''
            }
            if(!item.data.singer[1]){
              item.data.singer[1]=''
            }
            arr.push([item.data.songname,item.data.albumname,item.data.singer[0],item.data.singer[1],item.data.songid]);
            context.commit('topli',arr)
          })
        })
      })
    }
    }
});

export default store
