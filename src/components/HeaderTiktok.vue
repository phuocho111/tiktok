<template>
  <v-container style=" position: fixed;width: 100%;align-items: center; background: rgba(255, 255, 255, 1.0);z-index: 1000;" >
  
    <v-row class="align-center justify-center" >
      <v-col cols="3" class="">
        <!-- icon tiktok -->
        <a href="/home">
        <v-img
          :src="require('../assets/tiktok.svg')"
          width="118"
          height="28"
          style="margin-left:60px; cursor: pointer;" 
          
        ></v-img>
      </a>
        <!-- icon tiktok -->
      </v-col>

      <!-- form Search -->
      <v-col cols="3" >
        <v-toolbar style="background:rgba(22, 24, 35, 0.06)" height="46" width="361" class="rounded-pill mx-auto pa-auto">
          <v-text-field 
          clearable
          placeholder="Search account and videos"
          v-model="search" 
          ref="search" 
          
          class="mt-5 " 
          clear-icon="mdi-close-circle" 
          color="rgba(22, 24, 35, 0.34)" 
          focus
          rounded
           > </v-text-field>
          <v-btn icon plain @click="logref" >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
              <!-- title Search -->
        <v-card  class="overflow-y-auto mx-auto " 
          style="margin:20px ;position: absolute; left: 41%;" 
          max-height="500" width="355"  >
            <div  v-for="item in matchSearch" :key="item.title" class="ma-4 d-flex align-center">
              
              <v-icon style="font-size:16px; color:#000">mdi-magnify</v-icon>
              <h3 style="font-size:15px; color:#000" class="ml-2">{{ item.title }}</h3>
              
            </div>   
        <!-- title Search -->

        <!-- Acount Search -->
        
        <div style="font-size:15px;color: rgba(22, 24, 35, 0.75); margin: 10px; " 
        v-if="userSearch">
        Accounts
        </div>
        <div  v-for="item in userSearch" :key="item.userId" @click="searchUser(item)">
          
          <div class="d-flex justify-start align-start py-2" >
            <img :src="item.image" alt="" class="rounded-circle mx-4"  width="40" />
            <span>
              <h4 style="font-size:15px">{{item.userId}}</h4>
              <p style="font-size:15px; color: rgba(22, 24, 35, 0.75);margin: 0;" >{{item.status}}</p>
            </span>
            
          </div>
        </div> 
        <div v-if="userSearch"
        style="font-size: 16px; font-weight: 500; color: #000;margin: 10px;"
        >View all result for "{{search}}"</div>  
        <!-- Acount Search -->
    </v-card>
      </v-col >

       <!-- form Search -->

       <!-- Upload -->
     
      <v-col cols="2" class="d-flex justify-space-around " >
        <div width="400px" style="padding-left:200px">
          <v-btn-toggle v-model="toggle_multiple" dense >
          <v-btn icon plain class="mx-5" style="width:100px " >
            
              <v-icon>mdi-plus</v-icon>
            <p class="ma-auto " style="color:#000000" >Upload</p>
           
          </v-btn>
        <!-- Upload -->

        <!-- Log in -->
          <v-btn style="background-color:rgba(254, 44, 85, 1.0)" class="rounded">
            <p class="my-auto mx-5 rounded-5" style="color:rgba(255, 255, 255, 1.0); ">Log in</p>
          </v-btn>
        <!-- Log in -->
     
        <!-- menu -->

              <div>
              <div icon plain class="mx-5 pt-2" 
                style="border-style:none; height: 40px;cursor: pointer;"
                @mouseover="handleMouseOver" @mouseleave="handleMouseOut"> 
              <v-icon >mdi-dots-vertical</v-icon>
                <div :hidden="hidden" style="position:absolute; right:0; top:40px; padding-top: 10px;  background-color:white; z-index: 1002;"  >
                <div 
                v-for="list in allMenu" :key="list.id"
                class="d-flex flex-column   " 
                style="background:#fff; color:#000;box-shadow: 5px 10px 18px  rgb(0 0 0 / 12%); text-align: start;">
                  <div class="pa-3 hover" @click="handleClick(list)" >
                  <button ><v-icon class="mr-2">{{list.icon}}</v-icon>{{list.title}}</button>
                  </div>
                  
                </div>
              </div>
              

              <!-- languages -->
              <div :hidden="hidden" v-if="language.title"   style="position:absolute; right:0; top:40px;  background-color:white; z-index: 1002;"  >
                <div 
                class="d-flex flex-column " >
                  <div class=" language" :hidden="on"  >
                  <div  class="language-title" >
                    <span class="material-icons" @click="onTrue">arrow_back_ios</span>
                    {{language.title}}</div>
                  <div class="language-languages hover" v-for="i in language.languages" :key="i.title">
                  <button class="language-text">{{i.title}}</button>
                  </div>
                  </div>
                </div>
              </div>
              <!-- languages -->

               <!-- feedback -->
                  <div v-else-if="language.to" >
                    
                    
                    <!-- Feedback -->
                  </div>
                  <!-- feedback -->

                  <!-- Keyboard -->
                  <div v-else :hidden="keyboard">


                    
                    <div class=" mash"  >
                      <div class="mash-container" >
                        <div class="mash-container-outside">
                          <div class="mash-container__close" @click="closeKeyboard">
                            <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"></path></svg>
                          </div>
                          <div class="mash-container__title">{{language.key}}</div>
                          <div class="mash-container__content">
                            <div class="mash-container__item">
                              Go to previous video
                              <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25.2809 18.7113C24.641 17.8563 23.359 17.8563 22.7191 18.7113L15.9152 27.8012C15.1256 28.8562 15.8784 30.36 17.1962 30.36L30.8038 30.36C32.1216 30.36 32.8744 28.8562 32.0848 27.8012L25.2809 18.7113Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"></path></svg>
                            </div>
                            <div class="mash-container__item">
                              Go to next video
                              <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.7191 30.6487C23.359 31.5037 24.641 31.5037 25.2809 30.6487L32.0848 21.5588C32.8744 20.5038 32.1216 19 30.8038 19H17.1962C15.8784 19 15.1256 20.5038 15.9152 21.5588L22.7191 30.6487Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"></path></svg>
                            </div>
                            <div class="mash-container__item">
                              Like video
                              <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 33C31.5 33.5523 31.0523 34 30.5 34H20.5C19.3954 34 18.5 33.1046 18.5 32V15C18.5 14.4477 18.9477 14 19.5 14H21.5C22.0523 14 22.5 14.4477 22.5 15V30H30.5C31.0523 30 31.5 30.4477 31.5 31V33Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"></path></svg>
                            </div>
                            <div class="mash-container__item">
                              Mute / unmute video
                              <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 14C14.4477 14 14 14.4478 14 15V33C14 33.5523 14.4477 34 15 34H17C17.5523 34 18 33.5523 18 33V21L21.9562 33.3061C22.0891 33.7196 22.4738 34 22.9082 34H25.0911C25.5255 34 25.9102 33.7196 26.0431 33.3061L30 21V33C30 33.5523 30.4477 34 31 34H33C33.5523 34 34 33.5523 34 33V15C34 14.4477 33.5523 14 33 14L29.7129 14.0001C29.2863 14.0001 28.9067 14.2707 28.7676 14.6741L24 28.5L19.2324 14.6741C19.0933 14.2707 18.7137 14.0001 18.287 14.0001L15 14Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"></path></svg>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
                  <!-- Keyboard -->
              </div>
            </div>
            

        </v-btn-toggle>
        </div>
      </v-col>
      <div style="border-bottom: 1px solid  rgb(0 0 0 / 12%);width: 100%; position: fixed; top: 70px; "></div>
    </v-row>
    
  

       <!-- menu -->
       
        


 
   
  </v-container>


  
</template>


    


<script>
import 'material-icons/iconfont/material-icons.css';
import { mapActions,mapGetters } from 'vuex';

export default {
  data() {
    return {
      toggle_multiple: [0, 1, 2],
      search: "",
      hidden:"false",
      language:"",
      on:true,
      keyboard:true
      
    };
  },
  created() {
    
    this.fetchData();

    this.fetchMenu()
  },


  methods: {
    ...mapActions(['fetchData','fetchMenu']),
    logref() {
      console.log(this.$refs.search);
    },
    handleMouseOver(){
       
         this.hidden = false
        
       
    },
    handleMouseOut(){
      
           this.hidden = true
           this.on = true
           
           
    },
    handleClick(list){
        
          if(list){
            const languages = list.childrent
          console.log(languages)
          this.on = false
          this.keyboard = false
          

          this.language = languages  
          // change router feedback
          if(this.language.to){
            this.$router.push(this.language.to)
          }
          }
          
    },
    onTrue(){
      this.on = true
    },
    closeKeyboard(){
      this.keyboard = true
    },
    searchUser(item){
      this.$router.push(item.userId)
      this.search = ""
    }

  },
  
  computed: {
    ...mapGetters(['allData','allMenu']),
    // Search Title
    matchSearch() {
        let searchRes = null;
      if (this.allData && this.search != "") {
        searchRes = this.allData.filter((item) => {
            console.log(this.allData )
          return (item.title.includes(this.search))
          
        });
      }
      return searchRes;
    },
    // Search Account
    userSearch() {
      let userRes = null;
      if(this.allData && this.search != "") {
        userRes = this.allData.filter((item)=>{
          return (item.userId.includes(this.search))
        });
      }
      
      return userRes
    },
  
      
  },
};
</script>
<style scoped>
.hover:hover{
    background-color: rgba(22, 24, 35, 0.03);
    width: 100%;
    height: 100%;
}
/* languages */
.language{
  padding-top:10px ;
  background:#fff;
  color:#000;
  box-shadow: 5px 10px 18px  rgb(0 0 0 / 12%);
}
.language-title{
  text-align: center;
  width: 200px;
  position: relative;
  padding-bottom: 10px;
}
.material-icons{
  font-size: 18px;
  margin-right:30px ;
  position: absolute;
  left: 20px;
  top: 2px;
}
.language-languages{
  text-align: start;
  padding: 10px 15px;
}

/* Mash */
.mash{
  background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0px;
}
.mash-container{
  position: relative;
    border-radius: 8px;
    margin: auto;
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    max-width: 300px;
    top: 30%;
}
.mash-container-outside{
  margin-bottom: 0px;
    min-width: 400px;
    min-height: 280px;
    padding: 40px 32px 32px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    border: 1px solid rgba(22, 24, 35, 0.03);
    box-shadow: rgb(0 0 0 / 6%) 0px 2px 8px;

}
.mash-container__title{
  font-weight: 700;
    font-size: 24px;
    width: 100%;
    height: 22px;
    line-height: 22px;
    text-align: center;
    color: rgb(22, 24, 35);
    white-space: nowrap;
}
.mash-container__content{
  margin-top: 16px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-top: 1px solid rgba(22, 24, 35, 0.12);
}
.mash-container__item{
  font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    height: 40px;
    text-align: left;
    color: rgb(22, 24, 35);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(22, 24, 35, 0.12);
}
.mash-container__close{
    right: -60px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    top: 16px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background-color: rgba(22, 24, 35, 0.03);
}


/* Mash */

/* languages */
</style>