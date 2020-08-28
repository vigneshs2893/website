import styled, { css } from "styled-components";
const size = {
    xs: '767px', // 767px & below is mobile
    sm: '768px',
    md: '992px',
    lg: '1200px'
  };
  
  export const xs = () => `@media (max-width: ${size.xs})`;
  export const sm = () => `@media (min-width: ${size.sm})`;
  export const md = () => `@media (min-width: ${size.md})`;
  export const lg = () => `@media (min-width: ${size.lg})`;
  export function prodjar (){

  
  const RetailHub = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    width: 190px;
    position :absolute;
    height: 56px;
    font-size: 40px;
    left : 70px;
    top: 1750px;
    @media(max-width: 991px) {
      top: 2380px;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
    
  `;
  
  const DashboardMobile = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: rgba(211,30,33,1);
    position : absolute;
    font-size: 24px;
    margin-top: 20px;
    left : 70px;
    @media(max-width: 991px) {
      top: 2420px;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
  `;
  
  const TheChallengeForUs4 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    position : absolute;
    top : 2430px;
    left: 70px;
    color: #121212;
    font-size: 28px;
    margin-top: 43px;
    @media(max-width: 991px) {
      top: 4200px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const Text8 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    position: relative;
    left : -50px;
    color: #121212;
    font-size: 20px;
    top: 106px;
    @media(max-width: 991px) {
      top: 1250px;
      min-height: 500px;
      width : 400px;
      left : -90px;
    }
  `;
  
  const Client2 = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    color: rgba(136,136,136,1);
    position : absolute;
    letter-spacing: 0.1em;
    top: 2059px;
    left:70px;
    font-size: 16px;
    @media(max-width: 991px) {
      top: 3200px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const Project3 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    position: absolute;
    top : 2059px;
    color: rgba(136,136,136,1);
    letter-spacing: 0.1em;
    font-size: 16px;
    margin-left: 155px;
    @media(max-width: 991px) {
      top: 3200px;
      min-height: 500px;
      width : 400px;
      left : 80px;
    }
  `;
  
  const ClientRow5 = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    margin-top: 39px;
    margin-right: 189px;
    
  `;
  
  const RetailScan = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 22px;
    position: absolute;
    top : 2090px;
    left :70px;
    @media(max-width: 991px) {
      top: 3220px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const InStoreSolutions = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 22px;
    margin-left: 156px;
    position: absolute;
    top : 2092px;
    @media(max-width: 991px) {
      top: 3220px;
      min-height: 500px;
      width : 400px;
      left : 70px;
    }
  `;
  
  const RetailScanRow = styled.div`
    height: 25px;
    flex-direction: row;
    display: flex;
    margin-top: 9px;
    margin-right: 60px;
  `;
  
  const Text9 = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    position: absolute;
    font-size: 20px;
    top: 2174px;
    left : 90px;
    @media(max-width: 991px) {
      top: 3300px;
      min-height: 500px;
      width : 400px;
      left : 60px;
    }
  `;
  
  const RetailHubColumn = styled.div`
    width: 396px;
    flex-direction: column;
    display: flex;
    margin-top: 95px;
    margin-bottom: 179px;
  `;
  const I8 = styled.img`
    top: 49px;
    left: 0px;
    width: 221px;
    height: 432px;
    position: absolute;
    object-fit: contain;
  `;
  
  const I9 = styled.img`
    top: 0px;
    left: 183px;
    width: 370px;
    height: 233px;
    position: absolute;
    object-fit: contain;
  `;
  
  const I10 = styled.img`
    top: 233px;
    left: 211px;
    width: 370px;
    height: 233px;
    position: absolute;
    object-fit: contain;
  `;
  
  const BusyhubStack = styled.div`
    width: 581px;
    height: 481px;
    top: 1090px;
    left: 557px;
    position: absolute;
    background-image: url("Background1.png");
    background-size: cover;
    @media(max-width: 991px) {
      top: 1480px;
      min-height: 500px;
      width : 400px;
      left : 0px;
    }
  `;
  
  const RetailHubColumnRow = styled.div`
    height: 766px;
    flex-direction: row;
    display: flex;
    margin-top: -25px;
    margin-left: 131px;
    margin-right: 293px;
  `;
  
  const FestenTechnology = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    position: absolute;
    top : 2310px;
    left : 70px;
    height: 52px;
    width: 376px;
    font-size: 40px;
    @media(max-width: 991px) {
      top: 3350px;
      min-height: 500px;
      width : 400px;
      left : 30px;
    }
  `;
  
  const LogoGuideline = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: rgba(211,30,33,1);
    position: absolute;
    top : 2390px;
    left : 70px;
    font-size: 24px;
    margin-top: 14px;
    @media(max-width: 991px) {
      top: 3420px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const TheChallengeForUs3 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 28px;
    margin-top: 55px;
    position: absolute;
    left :70px;
    @media(max-width: 991px) {
      top: 2900px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const LoremIpsum3 = styled.span`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    position : absolute;
    color: #121212;
    font-size: 20px;
    top: 1600px;
    left:172px;
    @media(max-width: 991px) {
      top: 2240px;
      min-height: 500px;
      width : 400px;
      left : 210px;
    }
  `;
  
  const Client5= styled.span`
    font-family: Lato;
    font-style: normal;
    position: absolute;
    top: 2770px;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    margin-left: -70px;
    letter-spacing: 0.1em;
    @media(max-width: 991px) {
      top: 4550px;
      min-height: 500px;
      width : 400px;
      left : 130px;
    }
  `;
  
  const Project2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    position : absolute;
    top : 2770px;
    letter-spacing: 0.1em;
    color: rgba(136,136,136,1);
    font-size: 16px;
    margin-left: 119px;
    @media(max-width: 991px) {
      top: 4550px;
      min-height: 500px;
      width : 400px;
      left : 90px;
    }
  `;
  
  const Client5Row = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    margin-top: 65px;
    margin-left: 15px;
    margin-right: 152px;
  `;
  
  const FestenTech2 = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    position : absolute;
    top : 2820px;
    color: #121212;
    font-size: 22px;
    margin-left: -70px;
    @media(max-width: 991px) {
      top: 4590px;
      min-height: 500px;
      width : 400px;
      left : 120px;
    }
  `;
  
  const Human = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    position : absolute;
    top : 2815px;
    color: #121212;
    font-size: 22px;
    margin-left: 107px;
    margin-top: 5px;
    @media(max-width: 991px) {
      top: 4585px;
      min-height: 500px;
      width : 400px;
      left : 70px;
    }
  `;
  
  const FestenTech2Row = styled.div`
    height: 55px;
    flex-direction: row;
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
  `;
  
  const Text7 = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    font-size: 20px;
    position:absolute;
    top: 1660px;
    left: 60px;
    @media(max-width: 991px) {
      top: 2320px;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
  `;
  
  const FestenTechnologyColumn = styled.div`
    width: 410px;
    flex-direction: column;
    display: flex;
    margin-top: 58px;
    margin-bottom: 18px;
  `;
  
  const I11 = styled.div`
    top: 0px;
    left: 44px;
    width: 506px;
    height: 593px;
    position: absolute;
    flex-direction: column;
    display: flex;
    background-image: url("/Background1.png");
    background-size: cover;
  `;
  
  const I12 = styled.img`
    width: 370px;
    height: 340px;
    margin-top: 146px;
    margin-left: 176px;
    object-fit: contain;
    position : relative;
    top : -50px;
    left : 60px;
    z-index: 1;
  `;
  
  const I13 = styled.img`
    top: 210px;
    left: 90px;
    width: 370px;
    height: 480px;
    position: absolute;
    object-fit: contain;
    z-index : 3;
  `;
  
  const FastenStack = styled.div`
    width: 506px;
    height: 566px;
    top : 2300px;
    left: 620px;
    position: absolute;
    @media(max-width: 991px) {
      top: 3400px;
      min-height: 500px;
      width : 400px;
      left : 0px;
    }
  `;
  
  const FestenTechnologyColumnRow = styled.div`
    height: 693px;
    flex-direction: row;
    display: flex;
    margin-left: 131px;
    margin-right: 252px;
  `;
    
  
  
  const Busyhubs = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    color: #121212;
    font-size: 40px;
    width: 262px;
    height: 56px;
    top: 1200px;
    left: 60px;
    position:absolute;
    @media(max-width: 991px) {
      top: 1360px;
      min-height: 500px;
      width : 400px;
      left : 60px;
    }
  `;
  
  const WebPageDashboard = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: rgba(211,30,33,1);
    width: 288px;
    top : 1250px;
    position:absolute;
    height: 34px;
    font-size: 24px;
    left:60px;
    @media(max-width: 991px) {
      top: 1420px;
      min-height: 500px;
      width : 400px;
      left : 60px;
    }
  `;
  
  const TheChallengeForUs = styled.span`
    font-family: Lato;
    width:430;
    height:319;
    font-style: normal;
    font-weight: 800;
    color: rgba(62,62,62,1);
    font-size: 28px;
    position : absolute;
    margin-top: -370px;
    margin-left: 3px;
    @media(max-width: 991px) {
      top: 1190px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  `;
  
  const Text6 = styled.span`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    color: #121212;
    font-size: 20px;
    top: 450px;
    left: 10px;
    position:relative;
    letter-spacing:0;
    @media(max-width: 991px) {
      top: 2060px;
      position: absolute;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
  `;
  
  const Client = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    position:absolute;
    margin-top:550px;
    letter-spacing: 0.1em;
    @media(max-width: 991px) {
      top: 510px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  `;
  
  const Project = styled.span`
    font-family: Lato;
    font-style: normal;
    position:absolute;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    margin-left: 119px;
    top: 550px;
    left:50px;
    letter-spacing: 0.1em;
    @media(max-width: 991px) {
      top: 1060px;
      min-height: 500px;
      width : 400px;
      left : 30px;
    }
  `;
  
  const ClientRow = styled.div`
    height: 19px;
    flex-direction: row;
    display: flex;
    margin-top: 58px;
    margin-left: 19px;
    margin-right: 161px;
  `;
  
  const Busyhubs2 = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 22px;
    top : 1600px;
    left: 60px;
    position:absolute;
    @media(max-width: 991px) {
      top: 2240px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const Text10 = styled.span`
    font-family: Roboto;
    font-style: normal;
    color: #121212;
    position: relative;
    font-size: 22px;
    width: 406px;
    height : 140px;
    left: -60px;
    top: 20px;
    @media(max-width: 991px) {
      top: 1850px;
      min-height: 500px;
      width : 400px;
      left : -80px;
    }
  `;
  
  const Busyhubs2Row = styled.div`
    height: 27px;
    flex-direction: row;
    display: flex;
    margin-top: 44px;
    margin-left: 19px;
    margin-right: 110px;
  `;
  
  const Text11 = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    font-size: 20px;
    position:absolute;
    top: 2900px;
    left: 70px;
    @media(max-width: 991px) {
      top: 4700px;
      min-height: 500px;
      width : 400px;
      left : 40px;
    }
  `;
  
  const WebPageDashboardColumn = styled.div`
    width: 423px;
    flex-direction: column;
    display: flex;
    margin-bottom: 226px;
  `;
  
  
  
  const I2 = styled.img`
  
    top: 150px;
    left: 490px;
    width: 300px;
    height: 50px;
    position: absolute;
    object-fit: contain;
    @media(max-width: 991px) {
      top: 88px;
      min-height: 72px;
      left: 40px;
    }
  
    a {
      display: inline-block;
    }
  `;
  
  const I3 = styled.img`
    top: 150px;
    left: 220px;
    width: 311px;
    position: relative;
    object-fit: contain;
    z-index :1;
  `;
  
  const RetailStack = styled.div`
    width: 580px;
    height: 542px;
    top: 1601px;
    left: 626px;
    position: absolute;
    background-image: url("Background1.png");
    background-size: cover;
    @media(max-width: 991px) {
      top: 2470px;
      min-height: 500px;
      width : 400px;
      left : 0px;
    }
  `;
  
  const WebPageDashboardColumnRow = styled.div`
    height: 783px;
    flex-direction: row;
    display: flex;
    margin-top: 23px;
    margin-left: 80px;
    margin-right: 54px;
  `;
  const I1 = styled.img`
    width: 33px;
    height: 32px;
    margin-left :14px;
  `;
  
  const TextInput = styled.input`
    font-family: Avenir;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    font-size: 29px;
    width: 124px;
    height: 32px;
    margin-left: 14px;
    border: none;
    background: transparent;
  `;
  
  const Image1Row = styled.div`
    height: 99px;
    flex-direction: row;
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 1px;
    @media(max-width: 991px) {
      top: 32px;
      min-height: 72px;
    }
  `;
  
  const Text = styled.span`
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    width: 246px;
    height: 22px;
    margin-top: 124px;
    margin-left: 517px;
    @media(max-width: 391px) {
      top: -60px;
      min-height: 762px;
      position :absolute;
      left : -450px;
      right : 500px;
    }
  `;
  
  
  const I6 = styled.img`
    width: 311px;
    height: 435px;
    top: 18px;
    position:absolute;
    left: 264px;
    object-fit: contain;
    @media(max-width: 991px) {
      top: 32px;
      min-height: 72px;
    }
  `;
  
  const Text2 = styled.span`
    font-family: Nunito;
  
    top: 80px;
    left: 190px;
    position : relative;
    line-height : 140%;
    text-align : centre;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    font-size: 24px;
  
    @media(max-width: 991px) {
      top: 20px;
      min-height: 72px;
      left : -20px;
      font-size : 15px;
  
  
    }
  `;
  const TextStack = styled.div`
    top: 1000px;
    left: 1238px;
    width: 834px;
    height: 657px;
  `;
  
  const PentroMoney = styled.span`
    font-family: Lato;
    top: 179px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: rgba(62,62,62,1);
    font-size: 40px;
    width: 262px;
    height: 56px;
    @media(max-width: 991px) {
      top: 720px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  `;
  
  const Mobile = styled.span`
    font-family: Roboto;
    top: 240px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: 400;
    color: rgba(218,21,21,1);
    font-size: 24px;
    width: 286px;
    height: 34px;
    @media(max-width: 991px) {
      top: 770px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
    `;
  
  const TheChallengeForUs1 = styled.span`
    font-family: Roboto;
    top: 1320px;
    left: 60px;
    position: absolute;
    font-style: normal;
    font-weight: 800;
    color: rgba(62,62,62,1);
    font-size: 28px;
    width: 430px;
    height: 39px;
    @media(max-width: 991px) {
      top: 2000px;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
  `;
  
  const Text3 = styled.span`
    font-family: Nunito;
    top: 350px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: 400;
    color: rgba(62,62,62,1);
    font-size: 20px;
    letter-spacing: 0px;
    width: 406px;
    height: 168px;
    @media(max-width: 991px) {
      top: 860px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  `;
  
  const Project1 = styled.span`
    font-family: Lato;
    top: 1566px;
    left: 210px;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    width: 121px;
    height: 22px;
    letter-spacing: 0.1em;
    @media(max-width: 991px) {
      top: 2220px;
      min-height: 500px;
      width : 400px;
      left : 210px;
    }
  `;
  
  const Text4 = styled.span`
    font-family: Lato;
    top: 591px;
    left: 171px;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 22px;
    height: 31px;
    width: 254px;
    @media(max-width: 991px) {
      top: 1080px;
      min-height: 500px;
      width : 400px;
      left : 130px;
    }
  `;
  
  const I7 = styled.img`
    top: 200px;
    left: 0px;
    width: 311px;
    height: 315px;
    position: absolute;
    object-fit: cover;
    z-index :1;
  
  `;
  
  const I4 = styled.img`
    top: 80px;
    left: 348px;
    width: 259px;
    height: 507px;
    position: absolute;
    object-fit: contain;
    z-index: 0;
  `;
  
  const I5 = styled.img`
    top: 110px;
    left: 60px;
    right:40px;
    width: 259px;
    height: 550px;
    position: absolute;
    object-fit: repeat;
    z-index : 0;
  `;
  
  const ProdjarStack = styled.div`
    top: 170px;
    left: 484px;
    width: 607px;
    height: 527px;
    position: absolute;
    background-image: url("Background1.png");
    background-size: cover;
    @media(max-width: 991px) {
      top: 0px;
      min-height: 500px;
      width : 400px;
      left : -100px;
    }
  `;
  
  const Stack2 = styled.div`
    top: 0px;
    left: 0px;
    width: 1121px;
    height: 697px;
    position: absolute;
  `;
  
  const Client1 = styled.span`
    font-family: Roboto;
    top: 1566px;
    left: 60px;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: rgba(136,136,136,1);
    font-size: 16px;
    width: 78px;
    height: 22px;
    letter-spacing: 0.1em;
    @media(max-width: 991px) {
      top: 2220px;
      min-height: 500px;
      width : 400px;
      left : 50px;
    }
  `;
  
  const PentroMoney2 = styled.span`
    font-family: Lato;
    top: 591px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: #121212;
    font-size: 22px;
    width: 154px;
    height: 31px;
    @media(max-width: 991px) {
      top: 1080px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  
  `;
  
  const Text5 = styled.span`
    font-family: Roboto;
    top: 658px;
    left: 0px;
    position: absolute;
    font-style: normal;
    font-weight: 400;
    color: #121212;
    font-size: 20px;
    width: 234px;
    height: 28px;
    @media(max-width: 991px) {
      top: 1120px;
      min-height: 500px;
      width : 400px;
      left : -20px;
    }
  `;
  
  const Stack1 = styled.div`
    width: 1121px;
    height: 697px;
    margin-top: 89px;
    margin-left: 80px;
    position: relative;
  `;
  
  const Text1 = styled.span`
  font-family: Nunito;
  top: 240px;
  left: 420px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
  width: 752px;
  height: 170px;
  @media(max-width: 991px) {
    top: 170px;
    min-height: 72px;
    left: 60px;
    font-size : 15px;
  }
  
  a {
    display: inline-block;
  }
  `;
}
  export default prodjar;
  