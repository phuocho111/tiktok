
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
                        <img src="https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share/video/ic-qrcode.svg" class="tiktok-16zi48v-ImgQRCode e8cpz266">
                        <span>QR CODE</span>
                    </a>
                </div>
            </div>
        </div>
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
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);
    font-family: "IBM Plex Sans",SofiaPro,Arial,Tahoma,PingFangSC,sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
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
/* feedback footer */
</style>