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
                <span class="expand-container__title" @click="openCodeQr">
                    Get TikTok App
                </span>
            </div>
        </div>

    </div>
    </div>
    

    <!-- Get tiktok app hidden -->
    <div class="codeQR" :hidden="codeQr" >
      <section class="codeQR-container">
        <div class="codeQR-header">
            <div class="codeQR-header__close" @click="closeCodeQr">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"></path></svg>
            </div>
            <p class="codeQR-header__title">Get the TikTok app</p>
            
        
        </div>
        <div class="codeQR-body">
            <div class="codeQR-content">
                <p class="codeQR-content__title">Scan QR code to download TikTok</p>
            </div>
            <div class="codeQR-content__qr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="176" height="176" class="tiktok-9ybe10-StyledQrBg eamnwhk5"><path fill="#161823" fill-rule="evenodd" d="M189.562 1.164a9.278 9.278 0 019.279 9.279v11.546a1.031 1.031 0 01-2.062 0V10.443a7.217 7.217 0 00-7.217-7.217h-11.546a1.031 1.031 0 010-2.062h11.546z" clip-rule="evenodd"></path><path fill="#25F4E8" fill-rule="evenodd" d="M188.394 0a9.278 9.278 0 019.279 9.278v11.547a1.031 1.031 0 01-2.062 0V9.278a7.217 7.217 0 00-7.217-7.216h-11.546a1.031 1.031 0 010-2.062h11.546z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="#FE2C55" fill-rule="evenodd" d="M190.722 2.328A9.278 9.278 0 01200 11.606v11.547a1.03 1.03 0 11-2.061 0V11.606a7.217 7.217 0 00-7.217-7.216h-11.546a1.03 1.03 0 110-2.062h11.546z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="url(#qr-code-wrapper_svg__pattern0)" d="M12.675 12.674h174.656v174.651H12.675V12.674z"></path><path fill="white" d="M80.931 81.443h38.146v38.144H80.931V81.443z"></path><path fill="#161823" fill-rule="evenodd" d="M1.163 10.443a9.278 9.278 0 019.279-9.279h11.546a1.03 1.03 0 110 2.062H10.442a7.216 7.216 0 00-7.217 7.217v11.546a1.031 1.031 0 11-2.062 0V10.443z" clip-rule="evenodd"></path><path fill="#25F4E8" fill-rule="evenodd" d="M0 9.278A9.278 9.278 0 019.277 0h11.546a1.031 1.031 0 110 2.062H9.278A7.216 7.216 0 002.06 9.278v11.547a1.03 1.03 0 01-2.062 0V9.278z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="#FE2C55" fill-rule="evenodd" d="M2.327 11.606a9.278 9.278 0 019.279-9.278h11.546a1.031 1.031 0 110 2.062H11.606a7.216 7.216 0 00-7.217 7.216v11.547a1.03 1.03 0 01-2.062 0V11.606z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="#161823" fill-rule="evenodd" d="M198.841 189.558a9.278 9.278 0 01-9.279 9.278h-11.546a1.03 1.03 0 110-2.062h11.546a7.217 7.217 0 007.217-7.216v-11.547a1.03 1.03 0 012.062 0v11.547z" clip-rule="evenodd"></path><path fill="#25F4E8" fill-rule="evenodd" d="M197.673 188.393a9.278 9.278 0 01-9.278 9.278h-11.547a1.03 1.03 0 110-2.061h11.547a7.217 7.217 0 007.216-7.217v-11.546a1.03 1.03 0 112.062 0v11.546z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="#FE2C55" fill-rule="evenodd" d="M200.001 190.722a9.278 9.278 0 01-9.279 9.278h-11.546a1.032 1.032 0 010-2.062h11.546a7.217 7.217 0 007.217-7.216v-11.547a1.03 1.03 0 112.062 0v11.547z" clip-rule="evenodd" style="mix-blend-mode: multiply;"></path><path fill="#161823" fill-rule="evenodd" d="M10.442 198.836a9.278 9.278 0 01-9.279-9.278v-11.546a1.03 1.03 0 112.062 0v11.546a7.216 7.216 0 007.217 7.216h11.546a1.031 1.031 0 010 2.062H10.442z" clip-rule="evenodd"></path></svg>
                <div class="codeQR-content__qr__wrapper">
                    <img src="https://lf-tiktok-web-test2.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png" >
                </div>
            </div>
            
        </div>
        <div class="codeQR-footer">
            <p class="codeQR-footer__title">
                Download from app stores
            </p>
            <div class="codeQR-footer__content">
                <a href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=vi-vn&gl=vn">
                    <img src="https://lf-tiktok-web-test2.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="microsoft-store" lang="en">
                </a>
                <a href="https://apps.apple.com/MY/app/id1235601864?mt=8">
                    <img src="https://lf-tiktok-web-test2.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="microsoft-store" lang="en">
                </a>
                <a href="https://https://apps.apple.com/MY/app/id1235601864?mt=8">
                    <img src="https://lf-tiktok-web-test2.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="microsoft-store" lang="en">
                </a>
                <a href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=vi-vn&gl=vn">
                    <img src="https://lf-tiktok-web-test2.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="microsoft-store" lang="en">
                </a>
            </div>
        </div>
      </section>
    </div>
    <!-- Get tiktok app hidden  -->
</div>
</template>
<script>
    export default{
        data(){
            return{
                scroll:"",
                hidden:"true",
                codeQr:"true"
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
            },
            openCodeQr(){
                this.codeQr = false 
                this.hidden = true
                
            },
            closeCodeQr(){
                return this.codeQr = true
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

/* QR code */
.codeQR{
    box-sizing: border-box;
    position: fixed;
    inset: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 32px 16px;
    max-width: 100vw;
    background: rgba(0,0,0,0.5);
    z-index: 1001;

}
.codeQR-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    justify-content: flex-start;
    position: fixed;
    top: 20%;
    left: 40%;
    outline: 0px;
    background: rgb(255, 255, 255); ;
    max-width: calc(100vw - 32px);
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
    border-radius: 8px;
    overflow: hidden;
    transition-property: transform, opacity;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    opacity: 1;
    transform: none;

}
.codeQR-header{
    border-bottom: 0.5px solid rgba(22, 24, 35, 0.2);
    padding: 24px 48px 16px 24px;
    width: 400px;
    box-sizing: border-box;
}
.codeQR-header__close{
    position: absolute;
    top: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 1;
    width: 24px;
    height: 24px;
    right: 24px;
}
.codeQR-header__title{
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
}
.codeQR-body{
    text-align: center;
    max-width: 400px;
}
.codeQR-content{
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;

}
.codeQR-content__title{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin: 32px 0px 24px;
    width: auto;
    padding: 0px 24px;
}
.codeQR-content__qr{
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;

}
.codeQR-content__qr svg{
    display: block;
}
.codeQR-content__qr__wrapper{
    position: absolute;
    width: 174px;
    height: 174px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    overflow: hidden;

}
.codeQR-content__qr__wrapper img{
    width: 100%;
    width: 174px;
    object-fit: cover;
    display: block;
}

.codeQR-footer{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 400px;
    padding: 24px 24px 60px;

}
.codeQR-footer__title{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;

}
.codeQR-footer__content{
    margin-top: 16px;
    display: flex;
    flex-flow: row wrap;
    width: 288px;
    -webkit-box-pack: justify;
    justify-content: space-between;

}
.codeQR-footer__content a{
    margin-bottom:8px ;
}
.codeQR-footer__content img{
    width: 138px;
    height: 40px;
    background-size: 138px;
    object-fit: cover;
    border-radius: 4px
}

/* QR code */

</style>