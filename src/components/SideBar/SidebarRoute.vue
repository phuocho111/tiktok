<template>
<div>
    <div class="pa-3 hover" v-for="item in route" :key="item.name " >
                    
                    <router-link :to="{path: item.to}" 
                    class="sidebar__route"
                    exact-active-class="link--active"
                    
                    >
                    
                    <span class="material-icons" >{{item.icon}}</span>
                    <p class="ma-0 ml-2">{{item.name}}</p>
                    </router-link>
                </div>
</div>
</template>
<script>
   export default{
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
        }
     }
}