import React from "react"
import BusySection, { BusyWrapper } from "../components/busy/busyhubs"
import { useStaticQuery, graphql } from "gatsby"
import { BusyWrapper1} from '../components/pentro/pentrosection.css'
import Retail from '../components/Retail/Retailhub'
import Festen from "../components/Festen/Festen"
import Home from "../components/prodjar/prodjar"
import { Link } from "gatsby"


const Pentromoney = () => {
  const data = useStaticQuery(graphql`
    query Query1 {
      busyJson {
        title
        landingTitle
        content
        pentro{
          title
          subtitle
          content
          content1
          client
          project
          hubs
          key
          image1 {
            childImageSharp {
              fluid(
                maxHeight: 500,
                quality: 90,
                traceSVG: {
                  color: "#292733"
                  turnPolicy: TURNPOLICY_MAJORITY
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image2{
            childImageSharp {
              fluid(
                maxHeight: 500,
                quality: 90,
                traceSVG: {
                  color: "#292733"
                  turnPolicy: TURNPOLICY_MAJORITY
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image3{
            childImageSharp {
              fluid(
                maxHeight: 500,
                quality: 90,
                traceSVG: {
                  color: "#292733"  
                  turnPolicy: TURNPOLICY_MAJORITY
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          
        }
      
      
      }
    }
  `);

  return (
    <BusyWrapper1>
     
     <h22>{data.busyJson.pentro.title}</h22>
        <h23>{data.busyJson.pentro.subtitle}</h23>
        <h24>{data.busyJson.pentro.content}</h24>
        <h25>{data.busyJson.pentro.content1}</h25>
        <h26>{data.busyJson.pentro.client}</h26>
        <h27>{data.busyJson.pentro.project}</h27>
        <h28>{data.busyJson.pentro.hubs}</h28>
        <h29>{data.busyJson.pentro.key}</h29>
        
       <line> <h30>See More image  <Link to="/Click here/"><u>Click here</u></Link></h30></line>
        <h36>
        <h31><img src ={require('../images/profile/1.png')} /></h31>
        <h32><img src ={require('../images/profile/2.png')} /></h32>
        <h34><img src ={require('../images/profile/3.png')} /></h34>
        <h33><img src ={require('../images/profile/background.png')} /></h33>
        </h36>
        {/* {data.busyJson.datas.images} */}
        <BusySection />
          <Home/>
  <Retail/>    
  <Festen/>    
    </BusyWrapper1>
  );
};

export default Pentromoney;

  

