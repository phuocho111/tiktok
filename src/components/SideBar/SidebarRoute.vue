<template>
<div>
    <div class="sidebar" v-for="item in route" :key="item.name " >
                    
                    <router-link :to="{path: item.to}" 
                    class="sidebar__route"
                    exact-active-class="link--active"
                    
                    >
                    <v-icon class="sidebar__icon" active-class="link--active">{{item.icon}}</v-icon>
                    <p>{{item.name}}</p>
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

            ]
        }
     }
}