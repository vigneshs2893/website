import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby"
function Home(props) {
  return (
      <>
   <Image1Row>
        <h1><img src={require('../../images/profile/penta.png' )}/></h1>
        
      </Image1Row>
      <Text16>Pentafox</Text16>
        <Text>DESIGN PARTNERSHIP WITH</Text>
        <Image2Row>
        <h2><img src={require('../../images/profile/prodjar.png' )}/></h2>
        </Image2Row>
        <Text1>
          Curious to know about who we are? Here it is.
         </Text1>
          <TextStack>
            <Text2>
              PRODJAR is going to be your wholesome product solution place.A {"\n"}
              one stop marketplace {"\n"}here you can make your dream product with</Text2>
            <Text15>
              <Line>

              </Line>
              the support of our expert jar
            </Text15>
            
        
           
          </TextStack>
</>
  );
}
const Line = styled.div`
position: absolute;
width: 1290px;
height: 0px;
left: -420px;
top: 79.4px;

border: 2px dashed #B0B0B0;
`;
const Image1Row = styled.div`
  height: 9px;
  width : 30px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 70px;
  margin-right: 1px;
  @media(max-width: 991px) {
    top: 32px;
    min-height: 72px;
  }
`;
const Image2Row = styled.div`
  height: 9px;
  width : 200px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 540px;
  margin-right: 1px;
  @media(max-width: 991px) {
    top: 32px;
    min-height: 72px;
  }
`;
const Text16 = styled.span`
  font-family : Nunito;
  font-size :20px;
  margin-left:110px;
  margin-top :120px;
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
  margin-left: 347px;
  @media(max-width: 391px) {
    top: -60px;
    min-height: 762px;
    position :absolute;
    left : -450px;
    right : 500px;
  }
`;
const Text1 = styled.span`
font-family: Nunito;
top: 190px;
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

const Text2 = styled.span`
  font-family: Nunito;
  position :relative;
  top: 170px;
  left: 340px;
  line-height : 140%;
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
const Text15 = styled.span`

  font-family: Nunito;
  position : absolute;
  top: 363px;
  left: 520px;
  line-height : 140%;
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
  left: 1638px;
  width: 680px;
  height: 657px;

`;



  export default Home