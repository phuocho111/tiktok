<template>
    <!-- User page -->
    <div v-if="this.userName">
    <div class="userLayout">
        <!-- Layout Header -->
        <div  class="userHeader">
            <!--  -->
            <div class="userHeader-info">
                <div class="userHeader-container-img">
                    <span class="userHeader-container-img__span">
                        <img :src="userName.image" alt="" >
                    </span>
                </div>
                <div class="userHeader-container-title">
                    <h2>
                        {{userName.userId}}
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
                    </h2>
                    <h1>{{userName.status}}</h1>
                    <div class="userHeader-button">
                        <div class="userHeader-button__follow">
                            <button>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <!--  -->
            <h2 class="userHeader-Count">
                <div class="userHeader-Count__number">
                    <strong>{{userName.Following}}</strong>
                    <span>Following</span>
                </div>
            
                <div class="userHeader-Count__number">
                    <strong>{{userName.Followers}}</strong>
                    <span>Followers</span>
                </div>
                <div class="userHeader-Count__number">
                    <strong>{{userName.like}}</strong>
                    <span>Likes</span>
                </div>
            </h2>
            <!--  -->
            <!--  -->
            <h2 class="userHeader-Comment">
            <div>{{userName.comment}} </div>
            <div>{{userName.phone}}</div>
            <div>{{userName.email}}</div>
            </h2>
            <!--  -->
            <!--  -->
            <div class="userHeader-share">
                <svg class="tiktok-3anilq-StyledShareIcon ee7zj8d16" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z" stroke="#161823" stroke-width="2"></path></svg>
            </div>
            <!--  -->
            <!--  -->
            <div class="userHeader-more">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"></path></svg>
            </div>
            <!--  -->

          </div>
          <!-- Layout Header -->
          <!-- Layout Main -->
          <div class="userMain">
                <div class="userMain-header">
                    <p class="userMain-header__video">
                        <span>Videos</span>
                    </p>
                    <p class="userMain-header__like">
                            <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(2px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"></path></svg>
                            <span>Liked</span>
                    </p>
                    <div class="userMain-bottomLine">

                    </div>
                </div>
                <div class="userMain-body">
                    <div class="userMain-body-container">
                        <div class="userMain-body-item">
                            <div class="userMain-body-item__video">
                                <a href="https://www.tiktok.com/@theanh28entertainment/video/7145315739300384002?is_from_webapp=v1&item_id=7145315739300384002"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Layout Main -->  
        </div>
    <!-- User page -->
    </div>
    <!-- Not Found -->
        <div v-else><h1 class="mt-8">Not Found</h1></div>
    <!-- Not Found -->
    
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default{
    data(){
      return{
        
      }
    },
    created(){
        // fetchData
        this.fetchData();
    },
    methods:{
      ...mapActions(['fetchData']),
      
    },
    computed:{
        ...mapGetters(['allData']),

        userId(){
            return this.$route.params.userId 
        },
        userName(){
            let user = ""
            if(this.allData && this.userId !== "" ){
                user = this.allData.find(userName => userName?.userId === this.userId)
                console.log(this.userId)
            }
            return user    
        }
    }
   }
</script>
<style>
.userLayout{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    margin: 30px auto;
    padding: 32px 24px;
    box-sizing: content-box;
    min-height: calc(100vh - 59px);
}
.userHeader{
    position: relative;
    flex: 0 0 auto;
    margin-bottom: 20px;
    box-sizing: border-box;
    max-width: 624px;
    padding-right: 92px;
}
.userHeader-info{
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

}
/*  */
.userHeader-container-img{
    position: relative;
    display: flex;
    -webkit-box-align: center;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
}
.userHeader-container-img__span{
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-feature-settings: "tnum";
    position: relative;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;
    background-color: rgba(136, 136, 136, 0.5);
    border-color: rgba(22, 24, 35, .12);
    border-width: 0.5px;
    cursor: pointer;
}
.userHeader-container-img__span img {
    width:116px; 
    height:116px;
    object-fit: cover;
}
/*  */
/*  */
.userHeader-container-title{
    flex: 1 1 0%;
    cursor: pointer;
    overflow: visible;
    margin-left: 20px;
}
.userHeader-container-title h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    padding-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    
}
.userHeader-container-title h1{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-overflow: ellipsis;
    height: 25px;
    overflow: hidden;
    max-width: 450px;
    white-space: nowrap;
    display: flex;
    align-items: flex-end;
}
/*  */
/*  */
.userHeader-button{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    position: relative;
    width: 208px;
    height: 36px;
    padding: 0px;
    margin: 16px 0px 0px;
}
.userHeader-button__follow{
    position: absolute;
    left: 0px;
    top: 0px;
    min-width: 208px;
    height: 36px;
    line-height: 22px;
    z-index: unset;
    opacity: 1;
}
.userHeader-button__follow button{
    border-radius: 4px;
    border: none;
    color: rgb(255, 255, 255);
    background-color: rgb(254, 44, 85);
    min-height: 36px;
    font-size: 18px;
    font-weight: 600;
    font-family: SofiaPro, PingFangSC, sans-serif;
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
    min-width: 208px;
    line-height: 22px;
}
.userHeader-button__follow button:hover{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), rgb(254, 44, 85);
}
/*  */
/*  */
.userHeader-Count{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 22px;
    color: rgba(18, 18, 18, 0.75);
}
.userHeader-Count__number{
    color: rgb(22, 24, 35);
    font-family: SofiaPro, Arial, Tahoma, PingFangSC, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    direction: ltr;
    -webkit-box-align: baseline;
    align-items: baseline;
}
.userHeader-Count__number:not(:last-child){
    margin-right: 20px;
}
.userHeader-Count__number span{
    color: rgba(22, 24, 35, 0.75);
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: inline-block;
    margin-left: 6px;
}
/*  */
/*  */
.userHeader-Comment{
    text-align: left;
    color: rgb(22, 24, 35);
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    white-space: pre-line;
    margin-top: 10px;
    line-height: 1.5;
}
/*  */
/*  */
.userHeader-share{
    position: absolute;
    top: 11px;
    cursor: pointer;
    right: 52px;
}
.userHeader-more{
    position: absolute;
    top: 11px;
    cursor: pointer;
    right: 12px;

}
/*  */
/* Layout Main */
.userMain{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    min-height: 490px;
    align-items: flex-start;
    min-width: 520px;
}
.userMain-header{
    position: relative;
    display: flex;
    flex-direction: row;
    -webkit-box-align: stretch;
    align-items: stretch;
    justify-content: stretch;
    height: 44px;
    width: 460px;
    margin-bottom: 8px;
}
.userMain-header::after{
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.12);
    transform: scaleY(0.5);
}
.userMain-header__video ,.userMain-header__like{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 44px;
    cursor: pointer;
    text-align: center;
    color: rgb(22, 24, 35);
}
.userMain-bottomLine{
    position: absolute;
    width: 50%;
    height: 2px;
    background: rgb(22, 24, 35);
    left: 0px;
    bottom: 0px;
    transition: transform 0.3s ease 0s;
    transform: translateX(0);
}
.userMain-body{
    width: 100%;
}
.userMain-body-item{
    display: grid;
    gap: 24px 16px;
    grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
}

/* Layout Main */
</style>