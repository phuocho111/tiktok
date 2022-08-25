<template>
    <v-container>
        <v-row >
            <v-col cols="2"></v-col>

            <!-- Sidebar route -->
            <v-col cols="3" >
                <!-- Sidebar route -->
                <div class="out-sidebar" >
                <div class="sidebar" v-for="item in route" :key="item.name " >
                    
                    <router-link :to="{path: item.to}" 
                    class="sidebar__route"
                    exact-active-class="link--active"
                    
                    >
                    <v-icon class="sidebar__icon" active-class="link--active">{{item.icon}}</v-icon>
                    <p>{{item.name}}</p>
                    </router-link>
                </div>
                <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
            
            <!-- Sidebar route -->
     

            <!-- login -->
            <div class="login">
                <p class="login__text">Log in to follow creators, like videos, and view comments.</p>
                <v-btn
                block
                color="rgba(254, 44, 85, 1.0)"           
                elevation="2"
                large
                outlined
                x-large
            >Login</v-btn>
            </div>
            
            <v-spacer style="border:1px solid  rgba(22, 24, 35, .12)"></v-spacer>
             <!-- login -->


             <!-- Suggested accounts -->

             <div class="suggested">
                 <p class="suggested__text">Suggested accounts</p>
            <div  v-for="item in data" :key="item.userId">
          
            <div class="d-flex justify-start align-center py-2" >
                <img :src="item.image" alt="" class="rounded-circle mx-4"  width="32" style="object-fit: cover;" />
            <span class="">
                <h4 class="suggested__name">{{item.userId}}</h4>
                <p class="suggested__status" >{{item.status}}</p>
            </span>
            
          </div>
        </div> 
             </div>

             <!-- Suggested accounts -->

            </div>
            
            </v-col>
            


            <v-col cols="6">
               <router-view></router-view> 
            </v-col>
        </v-row>
            
         
       
    </v-container>
    
</template>
<script>
   export default{
     data(){
        return{
            route:[
                {
                    name:'For You',
                    to:'/home',
                    icon:'mdi-home-outline'
                },
                {
                    name:'Following',
                    to:'/following',
                    icon:'mdi-account-supervisor-outline'
                },
                {
                    name:'LIVE',
                    to:'/live',
                    icon:'mdi-video-check-outline'
                }

            ],
            data:null
        }
     },
     created(){
        const fetchData = async () => {
      this.data = await (
        await fetch("http://localhost:3000/user")
      ).json();
    };
        fetchData();
     }
    
   }
</script>
<style  scoped>




.out-sidebar{
    padding: 20px 0 0 38px;
}
.sidebar{
    padding: 8px;
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
.login{
    padding: 20px 8px 24px 8px;
}
.login__text{
    color: rgba(22, 24, 35, 0.5);
    font-size: 16px;
    line-height: 22px;
}
.suggested{
    padding: 16px 0;
    color: rgba(22, 24, 35, 0.75);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}
.suggested__text{
    padding: 0 8px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
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

</style>