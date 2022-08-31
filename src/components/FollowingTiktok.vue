<template>
  <div>
    <v-row style="margin-top: 20px;">
      <v-col class="px-0">
        <div class="mainContainer">
          <div class="userListWrapper" v-for="item in allData" :key="item.userId">
            <div class="userCard">
              <div class="videoPlayerContainer" >
              <video  loop class="BasicPlayerWrapper" >
                  <source :src="item.video"  >
              </video> 
              </div>
              <div class="infoContainer">
                <span class="spanAvatarContainer">
                  <img :src="item.image">
                </span>
                <h5 class="h5UserName">{{item.userId}}</h5>
                <h6 class="h6Username">{{item.status}}</h6>
                <div class="buttonContainer">
                  <button class="button-follow">Follow</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
   
import 'material-icons/iconfont/material-icons.css';
import { mapActions, mapGetters } from 'vuex';
   export default{
    data(){
      return{
        data:null,
        active:false
      }
    },
    created(){
        // fetchData
        
        this.fetchData();
    },
    methods:{
     ...mapActions(['fetchData'])
    },
    computed:{
      ...mapGetters(['allData'])
    }
    
   }
</script>
<style scoped>
.mainContainer{
  margin-right: 24px;
    
    max-width: 720px;
    flex-shrink: 0;
    padding-top: 40px;
    position: relative;
}
.userListWrapper{
    width: 720px;
    
}
.userCard{
  position: relative;
  margin-right: 18px;
    width: 220px;
    height: 302px;
    border-radius: 8px;
    margin-bottom: 18px;
    display: block;
    float: left;
    overflow: hidden;
}
.BasicPlayerWrapper{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.infoContainer{
  position: absolute;
    background: transparent;
    bottom: 0px;
    width: 100%;
    height: 200px;
    display: flex;
    box-sizing: border-box;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 12px 20px;
    text-align: center;

}
.spanAvatarContainer{
  display: inline-block;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;
    background-color: rgba(136, 136, 136, 0.5);
    margin-bottom: 14px;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
}
.spanAvatarContainer img{
  max-width: 100%;
    display: block;
}
.h5UserName{
  color: rgb(255, 255, 255);
    font-family: ProximaNova, Arial, Tahoma, PingFangSC, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    width: 100%;
    margin: 0px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
}
.h6Username{
  color: rgb(255, 255, 255);
    font-family: ProximaNova, Arial, Tahoma, PingFangSC, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    max-width: 180px;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
}
.buttonContainer{
  margin-top: 6px;
}
.button-follow{
  border-radius: 4px;
    border: none;
    color: rgb(255, 255, 255);
    background-color: rgb(254, 44, 85);
    min-width: 164px;
    min-height: 36px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
    display: flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 6px 8px;
    user-select: none;
    cursor: pointer;
    box-sizing: border-box;
}
</style>