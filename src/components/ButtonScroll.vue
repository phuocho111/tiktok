<template>
<div class="buttonTop">
    <div class="bottomContainer" v-scroll="handleScroll" :style="{'bottom':scroll  + 'px'}">
                   <div class="promotionContainer">
                    <button @click="getApp" class="buttonGetApp">Get app</button>
                   </div>
                    <button class="topScroll" @click="handleTop">
                        <img src="../assets/top.svg">
                    </button>
            
    <div class="expand-container" :hidden="hidden" >
        <div class="expand-container__close" @click="close">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"></path></svg>
        </div>
        <div class="expand-container__content">
            <div class="expand-container__item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19" width="21" height="21"><path fill="#161823" d="M12.601 17h2.52a.84.84 0 110 1.68h-9.24a.84.84 0 110-1.68h2.1v-2.1h-6.3A1.682 1.682 0 010 13.22V1.88C0 .952.754.199 1.68.199h17.642c.927 0 1.68.753 1.68 1.68V13.22c0 .927-.753 1.68-1.68 1.68h-6.72V17zm-.84 0v-2.1h-2.94V17h2.94zM1.681 1.88v11.34h17.641V1.88H1.68z"></path></svg>
                <span class="expand-container__title">
                    Get TikTok for desktop
                </span>
            </div>
            <div class="expand-container__split"></div>
            <div class="expand-container__item">
                <svg width="21" height="21" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 4.23858 10.2386 2 13 2H35C37.7614 2 40 4.23858 40 7V41C40 43.7614 37.7614 46 35 46H13C10.2386 46 8 43.7614 8 41V7ZM13 6C12.4477 6 12 6.44772 12 7V41C12 41.5523 12.4477 42 13 42H35C35.5523 42 36 41.5523 36 41V7C36 6.44772 35.5523 6 35 6H13ZM18 10C18 9.44772 18.4477 9 19 9H29C29.5523 9 30 9.44772 30 10V12C30 12.5523 29.5523 13 29 13H19C18.4477 13 18 12.5523 18 12V10ZM24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33C22.3431 33 21 34.3431 21 36C21 37.6569 22.3431 39 24 39Z"></path></svg>
                <span class="expand-container__title">
                    Get TikTok App
                </span>
            </div>
        </div>

    </div>
    </div>
    
</div>
</template>
<script>
    export default{
        data(){
            return{
                scroll:"",
                hidden:"true"
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
            },
            getApp(){
                return this.hidden = false
            },
            close(){
                return this.hidden = true
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
/* Expand */
.expand-container{
    z-index: 7;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    bottom: 40px;
    right: -1px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 6%) 0px 2px 8px;
    border: 1px solid rgba(22, 24, 35, 0.03);
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0.14, 0.3, 1) 0s;
    transform-origin: right bottom;
    transform: none;
    
    

}
.expand-container__close{
    position: absolute;
    right: 0;
    cursor: pointer;
    top: 16px;
    right: 16px;
    

}
.expand-container__content{
    margin-right: 48px;
    margin-left: 16px;
}

.expand-container__item{
    margin: 6px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
}
.expand-container__title{
    margin-left: 8px;
    white-space: nowrap;
}

.expand-container__split{
    width: calc(100% - 16px);
    height: 1px;
    position: relative;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
    left: 8px;
}
/* Expand */

</style>