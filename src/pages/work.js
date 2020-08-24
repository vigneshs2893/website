import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby"
function Home(props) {
  return (
    <>
      <Image1Row>
        <Image1 src="4.png"></Image1>
        <TextInput placeholder="Pentafox"></TextInput>
      </Image1Row>
      <Text>DESIGN PARTNERSHIP WITH</Text>
      <Image2 src="/prodjar.png"></Image2>
      <Text1>
        Curious to know about who we are?.Here it is
         </Text1>
      <Stack1>
        <Stack2>
          <TextStack>
            
            <Text2>
              PRODJAR is going to be your wholesome product solution place.A one stop marketplace where you can make your dream product with{"\n"}
              the support of our expert jar.
            </Text2>
           
          </TextStack>
          <PentroMoney>Pentro Money</PentroMoney>
          <Mobile>Mobile</Mobile>
          <TheChallengeForUs>The Challenge for us</TheChallengeForUs>
          <Text3>
            Tamilnadu Startup and Innovation Mission {"\n"}(TANSIM) e-Portal’s
            primary and foundation{"\n"} user flow starts from the TANSIM
            website.{"\n"} This set of landing pages is used as “Go To{"\n"}{" "}
            Market” for various use cases of TANSIM {"\n"}operations and schemes
            marketing.
          </Text3>
          <Project>PROJECT</Project>
          <Text4>Transform Petrol Stations</Text4>
          <Image3Stack>
            <Image3 src= "/1.png"></Image3>
            <Image4 src= "/2.png"></Image4>
            <Image5 src= "/3.png"></Image5>
          </Image3Stack>
        </Stack2>
        <Client>CLIENT</Client>
        <PentroMoney2>Pentro Money</PentroMoney2>
        <Text5>See More image  <Link to="/Click here/">Click here</Link></Text5>
      </Stack1>
      
    </>
  );
}

const Image1 = styled.img`
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
`;


const Image2 = styled.img`
  width: 225px;
  height: 61px;
  margin-top: 18px;
  margin-left: 527px;
  object-fit: contain;
`;

const Text2 = styled.span`
  font-family: Nunito;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
  width: 752px;
  height: 170px;
`;

const Image6 = styled.img`
  top: 85px;
  left: 246px;
  width: 637px;
  height: 560px;
  position: absolute;
  transform: rotate(171.00deg);
  opacity: 0.7;
  object-fit: contain;
`;

const TextStack = styled.div`
  top: 0px;
  left: 238px;
  width: 883px;
  height: 645px;
  position: absolute;
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
`;

const TheChallengeForUs = styled.span`
  font-family: Roboto;
  top: 311px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(62,62,62,1);
  font-size: 28px;
  width: 430px;
  height: 39px;
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
`;

const Project = styled.span`
  font-family: Lato;
  top: 569px;
  left: 171px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(136,136,136,1);
  font-size: 16px;
  width: 121px;
  height: 22px;
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
`;

const Image3 = styled.img`
  top: 20px;
  left: 214px;
  width: 259px;
  height: 507px;
  position: relative;
  object-fit: cover;
  z-index :1;

`;

const Image4 = styled.img`
  top: 0px;
  left: 348px;
  width: 259px;
  height: 507px;
  position: absolute;
  object-fit: contain;
  z-index: 0;
`;

const Image5 = styled.img`
  top: 20px;
  left: 0px;
  width: 259px;
  height: 507px;
  position: absolute;
  object-fit: repeat;
`;

const Image3Stack = styled.div`
  top: 170px;
  left: 484px;
  width: 607px;
  height: 527px;
  position: absolute;
`;

const Stack2 = styled.div`
  top: 0px;
  left: 0px;
  width: 1121px;
  height: 697px;
  position: absolute;
`;

const Client = styled.span`
  font-family: Roboto;
  top: 566px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(136,136,136,1);
  font-size: 16px;
  width: 78px;
  height: 22px;
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
`;
const Image9 = styled.div`
  top: 0px;
  left: 73px;
  width: 766px;
  height: 806px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url("/background.png"));
  background-size: cover;
`;
`@media(max-width: 991px) {
  top: 32px;
  min-height: 72px;
}

a {
  display: inline-block;
}
`;

export default Home;
