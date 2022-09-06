<template>
    <div class="bottomContainer" v-scroll="handleScroll" :style="{'bottom':scroll  + 'px'}">
                   <div class="promotionContainer">
                    <button class="buttonGetApp">Get app</button>
                   </div>
                    <button class="topScroll" @click="handleTop">
                        <img src="../assets/top.svg">
                    </button>
                   
    </div>
</template>
<script>
    export default{
        data(){
            return{
                scroll:""
            }
        },
        methods:{
            handleScroll(){
                if(window.scrollY > 50){
                    this.scroll = 0
                }else{
                    this.scroll = -40
                }
        
            },
            handleTop(){
              this.scrollTop = setInterval(()=>{
                if(window.scrollY === 0){
                    clearInterval(this.scrollTop)
                }
                window.scroll(0, window.scrollY - 100)
                },20)
            }
        }
    }
</script>
<style scoped>
/* buttom get app */
.bottomContainer{
    right: 24px;
    position: fixed;
    bottom: -40px;
    z-index: 7;
    display: flex;
    align-items: flex-end;
    margin-bottom: 8px;
    flex-direction: column;
    transform: none;
    transition: all 400ms cubic-bezier(0.65, 0, 0.35, 1) 0s;
}
.promotionContainer{
    margin-bottom: 12px;
    display: flex;
    position: relative;
}
.buttonGetApp{
    color: rgba(22,24,35,0.75);
    font-weight: 700;
    font-size: 14px;
    position: relative;
    right: 0;
    bottom: 0;
    padding: 0 8px;
    min-width: 90px;
    height: 32px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-radius: 52px;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid rgba(22, 24, 35, 0.12);
    background-color: rgba(255, 255, 255, 1.0);
    
}
.topScroll{
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 52px;
    background: rgba(254, 44, 85, 1.0);
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    align-items: center;
    -webkit-box-pack: center;
    outline: none;
    padding: 0;
    cursor: pointer;
    display: flex;
}
/* buttom get app */
</style>