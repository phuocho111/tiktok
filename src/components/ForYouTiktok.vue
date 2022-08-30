<template>
  <v-container>
    <v-row style="margin-top: 20px;">
      <v-col >
        <div v-for="item in data" :key="item.id" class="mainContainer">
          <div class="itemContainer">
            <a href="">
              <div class="itemContain__avatar">
                
                  <img :src="item.image" alt="" class="itemContainer__img">
                
              </div>
            </a>
            <div class="contentContainer">
              <div class="textInfoContainer">
                <div class="textInfoContainer__name">
                  <a></a>
                  <h3 class="textInfoContainer__name__h3">{{item.userId}}</h3>
                  <h4 class="textInfoContainer__name__h4">{{item.status}}</h4>
                </div>
                <button class="textInfoContainer__button">Follow</button>
                <div class="textInfoContainer__title">
                  <span class="textInfoContainer__title__text">{{item.title}}</span>
                  <h4 class="music-text">
                    <a>
                      <v-icon style="font-size: 16px;color: black;margin-right: 5px;">mdi-music</v-icon>
                      <span class="music-text-span">{{item.music}}</span>
                    </a>
                  </h4>
                </div>
                
              </div>
                    <!-- video -->
              <div class="videoWrapper">
                   <div class="videoCardContainer">
                     <div class="videoPlayerContainer">
                       <video controls loop  class="BasicPlayerWrapper">
                        <source :src="item.video" ></video>
                     </div>
                     <!-- video -->
                     <!-- button -->
                     <div class="actionItemContainer">
                    <button class="buttonActionItem">
                      <span class=" spanIconWrapper "><v-icon>mdi-heart</v-icon></span>
                      <strong class="strongText">{{item.like}}</strong>
                    </button>
                    <button class="buttonActionItem">
                      <span class="spanIconWrapper"><v-icon>mdi-message-text</v-icon></span>
                      <strong class="strongText">{{item.Followers}}</strong>
                    </button>
                    <button class="buttonActionItem">
                      <span class="spanIconWrapper"><v-icon>mdi-share</v-icon></span>
                      <strong class="strongText">{{item.share}}</strong>
                    </button>
                   </div>
                   <!-- button -->
                </div>
                  
              </div>
            </div> 
            
          </div>
          <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
        </div>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import 'material-icons/iconfont/material-icons.css';
   export default{
    data(){
      return{
        data:null
      }
    },
    created(){
        // fetchData
        const fetchData = async () => {
      this.data = await (
        await fetch("http://localhost:3000/user")
      ).json();
    };
        fetchData();
    },
    methods:{
      playPause(){
       
      }
    }
   }
</script>
<style  scoped>

.mainContainer{
  max-width: 600px;
  position: relative;
}
.itemContainer{
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  position: relative;
  max-width: 692px;
}
/* avatar */
.itemContain__avatar{
  width:56px;
  height: 56px;
  
}
.itemContainer__img{
  width: 100%;;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
/* avatar */

/* info user */

.contentContainer{
  margin-left: 12px;
  width: 600px;
  flex: 1 1 592px;
}
.textInfoContainer{
  margin-right: 114px;
}
.textInfoContainer__name{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.textInfoContainer__name__h3{

  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: inline-block;
  margin-right: 4px;
}
.textInfoContainer__name__h4{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  line-height: 28px;

}
.textInfoContainer__button{
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  color: rgba(254, 44, 85, 1.0);
  border-color: rgba(254, 44, 85, 1.0);
  background-color: rgba(255, 255, 255, 1.0);
  min-height: 28px;
  min-width: 88px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  right: 0;
  position: absolute;
  top: 28px;
  padding: 0 10px;
}
.textInfoContainer__button :active{
    background-color: rgba(254, 44, 85, 0.16);
}
.textInfoContainer__button:focus{
  outline: none;
}
.textInfoContainer__title{
  font-size: 16px;
  line-height: 22px;
}
.textInfoContainer__title__text{
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}
.music-text{
  
  margin-top: 4px;
  margin-bottom: 12px;

}
.music-text-span{
  font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #161823;
}

/* info user */

/* video container */

.videoCardContainer{
  position: relative;
    box-sizing: border-box;
    -webkit-background-size: cover;
    background-size: cover;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 20px;
    height: 500px;
    max-width: 624px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: start;
}
.videoPlayerContainer{
    
    
    position: relative;
    box-sizing: border-box;
    background: #eee center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 20px;
    height: 600px;
}
.BasicPlayerWrapper{
  display: block;
  
  height: 100%;
  object-fit: cover;
}
/* video container */
/* Item like follow share */
.actionItemContainer{
  display: flex;
  flex-direction: column;
  
}
.buttonActionItem{
  border: none;
    background: none;
    outline: none;
    padding: 0;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.spanIconWrapper{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 48px;
    height: 48px;
    font-size: 0px;
    border-radius: 50%;
    -webkit-transition: all ease-in-out 200ms;
    transition: all ease-in-out 200ms;
    background-color: rgba(22, 24, 35, 0.06);
    margin-top: 8px;
    margin-bottom: 6px;
}
.strongText{
  color: rgba(22, 24, 35, 0.75);
    font-size: 12px;
    line-height: 17px;
    text-align: center;
}
/* Item like follow share */
</style>