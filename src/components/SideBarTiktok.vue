<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
    <v-container >
        <v-row  >
           
            <!-- Sidebar route -->
           
                
            <div class="out-sidebar styleScroll"  >
                <div class="in-sidebar" >



                    <!-- Sidebar route -->
                
                    <div class="pa-3 hover" v-for="item in route" :key="item.name " >
                    
                    <router-link :to="{path: item.to}" 
                    class="sidebar__route"
                    exact-active-class="link--active"
                    
                    >
                    
                    <span class="material-icons" >{{item.icon}}</span>
                    <p class="ma-0 ml-2">{{item.name}}</p>
                    </router-link>
                </div>
                <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
                  
            <!-- Sidebar route -->
     


            <!-- login sidebar -->
            <div class="login">
                <p class="login__text">Log in to follow creators, like videos, and view comments.</p>
                <v-btn
                block
                color="rgba(254, 44, 85, 1.0)"           
                elevation="2"
                outlined
                x-large
            >Login</v-btn>
            </div>
            
            <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
             <!-- login sidebar -->


             <!-- Suggested accounts -->

             <div class="suggested"  >
                 <p class="suggested__text">Suggested accounts</p>
                 <div   v-for="(item, index) in commentsToShow" :key="index"  >
                 <div class="d-flex justify-start align-center py-2 hover suggested__form" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseOut(index)"  @click="searchUser(index)" v-if="index < allData.length" >
                    <img :src="allData[index].image" alt="" class="rounded-circle mx-4"  width="32" style="object-fit: cover;"   />
                    <span>
                    <h4 class="suggested__name">{{allData[index].userId}}</h4>
                    <p class="suggested__status" >{{allData[index].status}}</p>
                    </span>
                 </div>
                 
                 </div> 
                 <!-- see all button -->
                 <div class="mt-2 px-2">
                    <p  @click="handleSee(see)" class="see-button">{{see}}</p>
                    
                </div>
                <!-- see all button -->
            </div>
            
            <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
             <!-- Suggested accounts -->
        
            
            
            
            <!-- follow -->
            <div :hidden="hidden" class="follow-itemHover"  >
                <div 
                 
               >
                  <div class="itemHover">
                    <div class="itemHover__avatar">
                        <img :src="itemHover?.image" alt="">
                    </div>
                    <div class="itemHover__text">
                        <h3>{{itemHover?.userId}}</h3>
                        <p>{{itemHover?.status}}</p>
                    </div>
                    <div class="itemHover__info">
                        <p class="itemHover__info__follower"><span>{{itemHover?.Followers}}</span>Followers</p>
                        <p class="itemHover__info__like"><span>{{itemHover?.like}}</span>Likes</p>
                    </div>
                  </div>
                  <button  class="itemHover__button" >
                    <p class="itemHover__button-follow">Follow</p>
                  </button>
                </div>
                </div> 
                <!-- follow --> 

             
             <!-- Discover -->
             <div class="discover">
                <p class="discover__text pb-4 ma-0">Discover</p>
                <div class="d-flex flex-wrap" >
                    <div v-for="discover in allDiscover" :key="discover.title" class="discover__item">
                        <v-icon class="discover__item__icon">{{discover.icon}}</v-icon>
                        <p class="discover__item__text">{{discover.title}}</p>
                    </div>
                </div>
             </div>
             <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
             <!-- Discover -->
             
             <!-- footer -->
             <div class="footer">
                <div class="footer__container">
                   <a href="https://www.tiktok.com/about?lang=en" class="footer__container__link">About</a>
                   <a href="https://www.tiktok.com/browse" class="footer__container__link">TikTok Browse</a>
                   <a href="https://newsroom.tiktok.com/ja-jp/" class="footer__container__link">Newsroom</a>
                   <a href="https://www.tiktok.com/about/contact?lang=en" class="footer__container__link">Contact</a>
                   <a href="https://careers.tiktok.com/" class="footer__container__link">Careers</a>
                   <a href="https://www.bytedance.com/" class="footer__container__link">ByteDance</a>
                   
                </div>
                <div class="footer__container">
                   <a href="https://www.tiktok.com/forgood" class="footer__container__link">TikTok for Good</a>
                   <a href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1" class="footer__container__link">Advertise</a>
                   <a href="https://developers.tiktok.com/?refer=tiktok_web" class="footer__container__link">Developers</a>
                   <a href="https://www.tiktok.com/transparency/en/" class="footer__container__link">Transparency</a>
                   <a href="https://www.tiktok.com/tiktok-rewards/eligibility/" class="footer__container__link">TikTok Rewards</a>
                   
                </div>
                <div class="footer__container">
                   <a href="https://support.tiktok.com/en" class="footer__container__link">Help</a>
                   <a href="https://www.tiktok.com/safety/en/" class="footer__container__link">Safety</a>
                   <a href="https://www.tiktok.com/legal/terms-of-service-row?lang=vi" class="footer__container__link">Terms</a>
                   <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi" class="footer__container__link">Privacy</a>
                   <a href="https://www.tiktok.com/creators/creator-portal/en-us/" class="footer__container__link">Creator Portal</a>
                   <a href="https://www.tiktok.com/community-guidelines?lang=en" class="footer__container__link">Community Guidelines</a>
                </div>
                <span class="copyright">?? 2022 TikTok</span>
             </div>
             </div>
             <!-- footer -->
              

            </div>
           

            <!-- Route -->
                <div class="route-content">
                    <router-view ></router-view> 
                </div>
               
          
            <!-- Route -->
            

            <!-- Button Scroll Top -->
            <v-col cols="1">
               <ButtonScroll/>
            </v-col>
        </v-row>
            <!-- Button Scroll Top -->
         
       
    </v-container>
    
</template>
<script>
   
import 'material-icons/iconfont/material-icons.css';
import { mapActions,mapGetters } from 'vuex';
import ButtonScroll from './ButtonScroll.vue';



   export default{
    components:{  ButtonScroll},
     data(){
        return{
            route:[
                {
                    name:'For You',
                    to:'/home',
                    icon:'home'
                    
                },
                {
                    name:'Following',
                    to:'/following',
                    icon:'group'
                },
                {
                    name:'LIVE',
                    to:'/live',
                    icon:'videocam'
                }

            ],
            commentsToShow: 3,
            hidden:"true",
            isActive:true,
            itemHover:{},
            see:[],
            scroll: ""
            
            
            
            
        }
     },
     created(){
        // fetchData
    //     const fetchData = async () => {
    //   this.data = await (
    //     await fetch("http://localhost:3000/user")
    //   ).json();
    // };
    //     fetchData();

    //     // fetchDiscover
    //     const fetchDiscover = async () => {
    //   this.discovers = await (
    //     await fetch("http://localhost:3000/discover")
    //   ).json();
    // };
    //     fetchDiscover();
    this.fetchData(),
    this.fetchDiscover()
     },
     mounted(){
        this.see = "see all"
     },
    
     methods: {
    ...mapActions(["fetchData","fetchDiscover"]),
    
    handleMouseOver(index){

        this.itemHover = this.allData[index]
        // console.log(this.itemHover);

        return this.hidden = false
       
    },
    handleMouseOut(index){
       setTimeout(() => {
        let itemHover = this.allData[index]
         this.hidden = true
         return itemHover
       }, 500);
    },
    handleSee( see ){
        if(see == "see all"){
           this.commentsToShow += this.allData
           this.see = "see less"
           
        }else{
            this.see = "see all"
            this.commentsToShow = 3
            
        }
    },
    searchUser(index){
      this.$router.push(this.allData[index].userId)
    //   console.log(this.allData[index].userId)
      
     
    }
    
  },
  computed: {
    ...mapGetters(['allData','allDiscover'])
  
  
    },
   }
   
</script>
<style  scoped>


/* sidebar */

.out-sidebar{
    
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    perspective: 1px;
    transform-style: preserve-3d;
    
    perspective-origin: right top;
    position: fixed;
    max-height: 860px;
    width: 356px;
    
    
}
.hover:hover{
    background-color: rgba(22, 24, 35, 0.03);
}

.in-sidebar{
    padding: 40px 0 20px 0;
}

/* sidebar */ 

/* scroll style */
.styleScroll::-webkit-scrollbar-track{
  
	border-radius: 10px;
	background-color: #ffffff;
}
.styleScroll::-webkit-scrollbar
{
	width: 6px;
	background-color:#ffffff;
}
.styleScroll::-webkit-scrollbar-thumb{
    
	
	background-color: rgba(22, 24, 35, .06);
    width: 6px;
    border-radius: 3px;
    
}


/* scroll style */


/*  */
.route-content{
    position: absolute;
    top: 50px;
    left: 45%;
}
/*  */
/* sidebar route */
.out-sidebar {
    position: fixed;
    top: 40px;
    left: 20%;
}
.sidebar__icon{
    font-size: 24px;
    margin-right: 8px;
    color: rgba(22, 24, 35, 1.0)
}
.sidebar__route{
    display: flex;
    align-items: start;
    list-style-type: none;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    
    color: rgba(22, 24, 35, 1.0);

}

.link--active{
    color: rgba(254, 44, 85, 1.0)
}


/* sidebar route */

/* Login sidebar */
.login{
    padding: 20px 8px 24px 8px;
}
.login__text{
    color: rgba(22, 24, 35, 0.5);
    font-size: 16px;
    line-height: 22px;
}
/* Login sidebar */

/* suggested */
.suggested{
    padding: 16px 0;
    color: rgba(22, 24, 35, 0.75);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
   position: relative;
}

.suggested__text{
    padding: 0 8px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
}
.suggested__form{
    cursor: pointer;
    position: relative;
    z-index: 99;
}
.suggested__name{
    color: rgb(22, 24, 35);
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: -2px;
   
}
.suggested__status{
    color: rgba(22, 24, 35, 0.75);
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin: 0;
}
.see-button{
    color: rgb(254, 44, 85);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
}
/* suggested */

/* Discover */
.discover{   
    padding: 16px 8px 8px;
}
.discover__text{
    color: rgba(22, 24, 35, 0.75);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 16px;
}
.discover__item{
    display: flex;
    max-width: 100%;
    height: 24px;
    margin-bottom: 12px;
    padding: 3px 10px;
    border: 1px solid rgba(22, 24, 35, 0.2);
    border-radius: 12px;
    margin-right: 8px;
    cursor: pointer;
}
.discover__item__icon{
    font-size: 16px;
    color: rgba(22, 24, 35, 1.0);
    font-weight: 800;

}
.discover__item__text{
        text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(22, 24, 35, 0.75);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding-left: 6px;
}
/* Discover */

/* footer */
.footer{
    padding-top: 16px;
    padding-left: 8px;
}
.footer__container{
    margin-bottom: 8px;
    width: 332px;
}
.footer__container__link{
    color: rgba(22, 24, 35, 0.5);
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    display: inline-block;
    margin-right: 6px;
    margin-top: 5px;

}
.footer__container__link:hover{
    text-decoration: underline;
}
.copyright{
    color: rgba(22, 24, 35, 0.5);
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    display: inline-block;
    margin-right: 6px;
    margin-top: 5px;
}


/* footer */
/* itemHover */
.follow-itemHover{
    position:absolute;
     right:30px; 
    top: 440px;
     background-color:white;
     z-index: 100;
     width: 300px;
     box-sizing: border-box;
     cursor: pointer;
     
}
.itemHover{
    background:#fff; 
    border-radius: 10px;
    color:#000;
    box-shadow: 5px 10px 18px  rgb(0 0 0 / 12%); 
    text-align: start;
    display: flex;
    flex-direction: column;
    padding:20px
    
}
.itemHover__avatar img{
   width: 50px;
   border-radius: 50px;
}

.itemHover__info{
   display: flex;
   flex-direction: row;
}
.itemHover__info p{
    padding-right: 10px;
    margin: 0;
}
.itemHover__info p span{
    font-weight: 600;
    padding-right: 5px;
}
.itemHover__button{
    background-color:rgba(254, 44, 85, 1.0);    
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    box-sizing: border-box;
}
.itemHover__button-follow{
    
    color:rgba(255, 255, 255, 1.0); 
    
    margin: auto;

    
}
.itemHover__button:active{
    background-color: rgba(255, 255, 255, 1.0); 
    border: 1px solid rgba(254, 44, 85, 1.0);
        
}
.itemHover__button-follow:active{
    color: rgba(254, 44, 85, 1.0);
}

/* itemHover */


</style>