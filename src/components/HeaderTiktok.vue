<template>
  <v-container >
  
    <v-row class="align-center justify-center" style="box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);position: fixed;width: 80%;align-items: center; background: rgba(255, 255, 255, 1.0);z-index: 1000;" >
      <v-col cols="3" class="">
        <!-- icon tiktok -->
        <v-img
          :src="require('../assets/tiktok.svg')"
          width="118"
          height="28"
          style="margin-left:60px" 
        ></v-img>
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
        <div  v-for="item in userSearch" :key="item.userId">
          
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
                <div :hidden="hidden" style="position:absolute; right:0; top:40px; padding-top: 10px;  background-color:white"  >
                <div 
                v-for="list in allMenu" :key="list.id"
                class="d-flex flex-column   " 
                style="background:#fff; color:#000;box-shadow: 5px 10px 18px  rgb(0 0 0 / 12%); text-align: start;">
                  <div class="pa-3 hover">
                  <button @click="handleClick(list)" ><v-icon class="mr-2">{{list.icon}}</v-icon>{{list.title}}</button>
                  </div>
                  
                </div>
              </div>
              

              <!-- languages -->
              <div :hidden="hidden"   style="position:absolute; right:0; top:40px;  background-color:white"  >
                <div 
                class="d-flex flex-column " >
                  <div class=" language" :hidden="on">
                  <div  class="language-title" >
                    <span class="material-icons" @click="onTrue">arrow_back_ios</span>
                    {{language.title}}</div>
                  <div class="language-languages hover" v-for="i in language.languages" :key="i.title">

                    <button class="language-text ">{{i.title}}</button>
                  </div>
                  </div>
                  
                </div>
              </div>
              <!-- languages -->
              </div>
            </div>
            

        </v-btn-toggle>
        </div>
      </v-col>
    </v-row>
    <v-row >
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
      hidden:"true",
      language:"",
      on:true
      
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
            return this.language = languages  
          }else{
            console.log(list)
          }
    },
    onTrue(){
      this.on = true
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
.language-text{

}

/* languages */
</style>