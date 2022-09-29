
<template>
    
    <div class="feedback" >
        <div class="layout-container">
            <div class="feedback-header">
                <div class="feedback-header__h1Title">
                    Phản hồi và trợ giúp
                </div>
                <div class="feedback-header__subTitle">
                    <span>CHỌN CHỦ ĐỀ</span>
                </div>
            </div>
        <!-- feedback content -->
            <div class="feedback-content">
                <!-- feedback sidebar -->
                <div class="feedback-content-sideBar">
                    <div class="feedback-content-sideBar__item" v-for="item in allFeedback" >
                        <h3>{{item.title}}</h3>
                        <v-icon style="color:#000; font-size: 20px;">{{item.icon}}</v-icon>
                    </div>
                </div>
                <!-- feedback sidebar -->
                <!--  -->
                <!-- feedback detail -->
                <div class="feedback-content-details">
                    <h3>CÂU HỎI THƯỜNG GẶP</h3>
                    <div class="feedback-content-detail__question" >
                        <div class="feedback-content-detail__question-title">Cách đăng nhập</div>
                        <v-icon style="color:#000; font-size: 23px;">mdi-chevron-down</v-icon>
                    </div>
                    <div class="feedback-content-detail__question" >
                        <div class="feedback-content-detail__question-title">Số điện thoại này đã được đăng ký</div>
                        <v-icon style="color:#000; font-size: 23px;">mdi-chevron-down</v-icon>
                    </div>
                    <div class="feedback-content-detail__question" >
                        <div class="feedback-content-detail__question-title">Tại sao tôi không thể hoàn tất thanh toán?</div>
                        <v-icon style="color:#000; font-size: 23px;">mdi-chevron-down</v-icon>
                    </div>
                    <div class="feedback-content-detail__question" >
                        <div class="feedback-content-detail__question-title">Tại sao tôi không nhận được điểm sau khi thực hiện thanh toán?</div>
                        <v-icon style="color:#000; font-size: 23px;">mdi-chevron-down</v-icon>
                    </div>
                </div>
                <!-- feedback detail -->
            </div>
            
            <!-- list feedback -->
            <div class="listFeedback">
                <a href="">Lịch sử phản hồi</a>
            </div>
            <!-- list feedback -->
        </div>
        <!-- feedback content -->
        <!-- feedback footer -->
    <div class="feedback-footer">
        <div class="feedback-footer-container">
            <div class="feedback-footer-wrapper">
                <p class="feedback-footer-wrapper__pTitle">Tải về ngay</p>
                <div class="feedback-footer-wrapper__brand">
                    <a href="#" class="feedback-footer-wrapper__icon">
                        <img src="https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share/video/ic-qrcode.svg" alt="QR-code">
                        <span>QR CODE</span>
                    </a>
                
                    <a href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=vi-vn&gl=vn" class="feedback-footer-wrapper__icon">
                        <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="microsoft-store" width="170px" height="50px" lang="en" >
                        
                    </a>
                
                    <a href="https://apps.apple.com/MY/app/id1235601864?mt=8" class="feedback-footer-wrapper__icon">
                        <div class="feedback-wrapper-logo appStore"></div>
                    </a>
              
                    <a href="https://www.amazon.com/dp/B07KR1RJL2/" class="feedback-footer-wrapper__icon">
                        <div class="feedback-wrapper-logo amazonStore"></div>
                        
                    </a>
                
                    <a href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DcO7vb3mXs3JMrrivDKDEtA" class="feedback-footer-wrapper__icon">
                        <div class="feedback-wrapper-logo googlePlay" ></div>
                        
                    </a>
                </div>
            </div>
        </div>
          <!-- footer -->
    <footer class="footer-wrapper">
        <div class="tiktok-logo-wrapper">
            <a href="/home">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 118 30" width="118" height="42" alt="TikTok"><path fill="#25F4EE" d="M9.875 11.842v-1.119A8.836 8.836 0 008.7 10.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 20.55c0-4.737 3.794-8.598 8.495-8.707z"></path><path fill="#25F4EE" d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a6.78 6.78 0 01-.109-1.202h-4.727l-.006 18.968a3.978 3.978 0 01-3.967 3.83 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zM23.992 8.166V7.111a6.506 6.506 0 01-3.584-1.067 6.572 6.572 0 003.584 2.122z"></path><path fill="#FE2C55" d="M20.41 6.044a6.54 6.54 0 01-1.617-4.316h-1.265a6.557 6.557 0 002.881 4.316zM8.707 15.365a3.98 3.98 0 00-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.937 3.937 0 01-.754-2.321 3.98 3.98 0 013.973-3.976c.41 0 .805.07 1.176.185v-4.833a8.852 8.852 0 00-1.176-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 00-1.175-.185z"></path><path fill="#FE2C55" d="M23.992 8.166v3.676a11.25 11.25 0 01-6.579-2.116v9.621c0 4.802-3.903 8.714-8.706 8.714a8.669 8.669 0 01-4.99-1.579 8.69 8.69 0 006.37 2.781c4.796 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 006.579 2.116v-4.73c-.479 0-.939-.052-1.38-.148z"></path><path fill="white" d="M17.413 19.348V9.726a11.25 11.25 0 006.58 2.116V8.166a6.572 6.572 0 01-3.584-2.122 6.611 6.611 0 01-2.887-4.316h-3.463l-.006 18.968a3.978 3.978 0 01-3.967 3.83 3.99 3.99 0 01-3.225-1.656 3.991 3.991 0 01-2.134-3.523A3.98 3.98 0 018.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 004.989 1.58c4.797 0 8.706-3.913 8.706-8.715zM30.048 8.179h14.775l-1.355 4.232h-3.832v15.644h-4.778V12.41l-4.804.006-.006-4.238zM69.032 8.179h15.12l-1.354 4.232h-4.172v15.644h-4.784V12.41l-4.803.006-.007-4.238zM45.73 14.502h4.733v13.553h-4.708l-.026-13.553zM52.347 8.128h4.733v9.257l4.689-4.61h5.647l-5.934 5.76 6.643 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236h-4.733V8.128h.006zM102.49 8.128h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V8.128zM48.093 12.954a2.384 2.384 0 10-.002-4.771 2.384 2.384 0 00.002 4.771z"></path><path fill="#25F4EE" d="M83.544 19.942a8.112 8.112 0 017.474-8.087 8.748 8.748 0 00-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087z"></path><path fill="#FE2C55" d="M92.858 11.83c-.217 0-.505.012-.715.025a8.111 8.111 0 017.467 8.087 8.111 8.111 0 01-7.467 8.087c.21.02.498.026.715.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path><path fill="white" d="M91.58 23.887a3.94 3.94 0 01-3.94-3.945 3.94 3.94 0 117.882 0c0 2.18-1.77 3.945-3.941 3.945zm0-12.058c-4.477 0-8.105 3.631-8.105 8.113 0 4.482 3.628 8.113 8.106 8.113 4.477 0 8.106-3.631 8.106-8.113 0-4.482-3.629-8.113-8.106-8.113z"></path></svg>
            </a>
        </div>
        <div class="footer-container">
            <h4>Công ty</h4>
            <a href=""><span>Giới thiệu</span></a>
            <a href=""><span>TikTok Browse</span></a>
            <a href=""><span>Bảng tin</span></a>
            <a href=""><span>Liên hệ</span></a>
            <a href=""><span>Sự nghiệp</span></a>
            <a href=""><span>ByteDance</span></a>
        </div>

        <div class="footer-container">
            <h4>Chương trình</h4>
            <a href=""><span>TikTok for Good</span></a>
            <a href=""><span>Quảng cáo</span></a>
            <a href=""><span>Developers</span></a>
            <a href=""><span>TikTok Rewards</span></a>
        </div>

        <div class="footer-container">
            <h4>Hỗ trợ</h4>
            <a href=""><span>Trung tâm Trợ giúp</span></a>
            <a href=""><span>Trung tâm An toàn</span></a>
            <a href=""><span>Creator Portal</span></a>
            <a href=""><span>Hướng dẫn Cộng đồng</span></a>
            <a href=""><span>Minh bạch</span></a>
            <a href=""><span>Accessibility</span></a>
        </div>

        <div class="footer-container">
            <h4>Pháp lý</h4>
            <a href=""><span>Điều khoản Sử dụng</span></a>
            <a href=""><span>Chính sách Quyền riêng tư</span></a>
            <a href=""><span>NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</span></a>
        </div>

    </footer>
        <!-- footer -->
        <!-- coderight -->
    <div class="coderight">
        <div class="coderight-languages">
            <p class="coderight-languages__title">
                <span>Tiếng Việt (Việt Nam)</span>
            </p>
            <svg width="30" height="30" viewBox="0 0 48 48" fill="#B0B0B4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7125 32.0323C24.3109 32.5525 23.5252 32.5505 23.1263 32.0282L14.4015 20.6071C13.8988 19.949 14.368 19 15.1962 19H32.7385C33.569 19 34.0375 19.9537 33.53 20.6111L24.7125 32.0323Z"></path></svg>
        </div>
        <div class="coderight-languages__coderight">
            © 2022 TikTok
        </div>
    </div>
        <!-- coderight -->
    </div>  
        <!-- feedback footer -->
      
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';


    export default{
      
       created(){
        this.fetchFeedback();
       },
       methods:{
        ...mapActions(['fetchFeedback'])
       },
       computed:{
        ...mapGetters(['allFeedback'])
       }

    }
</script>
<style>
    /* feedback-header */
.feedback{
    position:relative;
    right: 45%;
    width: 100vw;
    height: 100vh;
    background: white;
    box-sizing: border-box;
   
    
}
.layout-container{
    width: 64%;
    padding: 0 24px 0 20px;
    margin: 24px auto;
}
.feedback-header{
    padding-top: 24px;
}
.feedback-header__h1Title{
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
}
.feedback-header__subTitle{
    margin-top: 8px;
    font-size: 16px;
    line-height: 22px;
    color: rgba(22, 24, 35, .5);
    font-weight: 500;
}
/* feedback-header  */
/* feedback-content */
.feedback-content{
    margin-top: 24px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.feedback-content-sideBar{
    width: 331px;
}
.feedback-content-sideBar__item{
    position: relative;
    width: 100%;
    padding: 16px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    
}
.feedback-content-sideBar__item h3{
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding-right: 12px;
}
/*  */
/*  */
.feedback-content-details{
    width: 724px;
    padding: 48px;
    border-radius: 8px;
    box-shadow: 2px 4px 20px rgb(80 102 102 / 20%);
    margin-left: 54px;
}
.feedback-content-details h3{
    margin-bottom: 24px;
    padding-left: 2px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
}
.feedback-content-detail__question{
    padding: 8px 0px;
    min-height: 57px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.feedback-content-detail__question-title{
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    word-break: break-word;
    margin-right: 4px;
}
/*  */
/* list feedback */
.listFeedback{
    margin-top: 24px;
    padding-top: 28px;
    border-top: 1px solid rgba(22, 24, 35, .12);
}
.listFeedback a{
    color: rgba(22, 24, 35, 1);
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
}
/* list feedback */
/* feedback-content */


/* feedback footer */
.feedback-footer{
    width: 100%;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 1);
    padding-bottom: 24px;
}
.feedback-footer-container{
    padding: 29px 26px 48px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #979797;
    -webkit-transition: all .3s cubic-bezier;
    transition: all .3s cubic-bezier;
}
.feedback-footer-wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-box-align: center;
}
.feedback-footer-wrapper__pTitle{
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 16px;
    font-weight: 600;
}
.feedback-footer-wrapper__brand{
    display: flex;
    flex-direction: row;    
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

}
.feedback-footer-wrapper__icon{
    margin: 0 4px;
    width: 170px;
    height: 50px;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
}
.feedback-footer-wrapper__icon img{
    object-fit: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    line-height: 0;
}

.feedback-footer-wrapper__icon span{
    color: #161823;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    padding-left: 10px;
    transition: all 0.5s;
}

.feedback-footer-wrapper__icon span:hover{
    color: rgba(255, 255, 255, 1);
}

.feedback-wrapper-logo{
    background-image: url(https://p16-ttug-sg.ibyteimg.com/img/ttfe-malisg/tiktok_web/store-badge/en.png~296x0.image);
    width: 170px;
    height: 50px;
    -webkit-background-size: 170px;
    background-size: 170px;
    object-fit: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    line-height: 0;
}

.appStore{
    background-position: 0 -53px;
}
.amazonStrore{
    background-position: 0 0;
}
.googlePlay{
    background-position: 0 -106px;
}
/* feedback footer */
/* footer */
.footer-wrapper{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-top: 40px;
    padding-left: 378px;
}
.tiktok-logo-wrapper{
    display: block;
    position: absolute;
    top: 43px;
    left: 144px;    
}
.footer-container{
    flex: 1 1 0%;
    max-width: 226px;
    color: rgba(255, 255, 255, 1);
    padding-right: 8px;
    display: flex;
    flex-direction: column;
}
.footer-container h4{
    font-size: 14px;
    line-height: 28px;
    margin: 0;
    font-weight: 700;
}
.footer-container a{
    text-decoration: none;
    color: rgba(255, 255, 255, .75);
    line-height: 28px;
    font-weight: 500;
    font-size: 14px;

}
.footer-container a span:hover{
    padding-bottom: 2px;
    border-bottom: 2px solid #ccc;
}

.coderight{
    padding: 0 144px;
    margin-top:60px ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.coderight-languages{
    box-sizing: border-box;
    position: relative;
    width: 172px;
    height: 36px;
    padding: 0 16px;
    display: flex;
    border: 1px solid #8a8b91;
    border-radius: 2px;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
}
.coderight-languages__title{
    display: block;
    line-height: 36px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 16px;
}
.coderight-languages__coderight{
    color: rgba(255, 255, 255, .75);
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
}
/* footer */
</style>