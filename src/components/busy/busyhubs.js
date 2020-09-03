import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { BusyWrapper} from './busyhubs.css'
import datas from './busyhubs.js';
import proptypes from 'prop-types'
import { Link } from "gatsby"


const Busyhubs = () => {
  const data = useStaticQuery(graphql`
    query Query {
      busyJson {
        title
        landingTitle
        content
        call{
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
      
    <BusyWrapper>
     {/* <div>
                {
                  data.call.map((call) => {
                    return (
                      <img src = {call.image1.childImageSharp.fluid}/> 
                    );
                  })
                } 
            </div>*/}
            <line>
            <h2>{data.busyJson.call.title}</h2>
            </line>

        <h3>{data.busyJson.call.subtitle}</h3>
        <h4>{data.busyJson.call.content}</h4>
        <h5>{data.busyJson.call.content1}</h5>
        <h6>{data.busyJson.call.client}</h6>
        <h7>{data.busyJson.call.project}</h7>
        <h8>{data.busyJson.call.hubs}</h8>
        <h9>{data.busyJson.call.key}</h9> 
        <h1>See More image  <Link to="/Click here/"><u>Click here</u></Link></h1> 
        <h14>
        <h11><img src ={require('../../images/profile/4.png')} /></h11>
        <h12><img src ={require('../../images/profile/5.png')} /></h12>

        <h13><img src ={require('../../images/profile/background.png')} /></h13>

        </h14>
                
              
            
           
        
         {/*data.busyJson.datas.image1.childImageSharp.fluid*/} 

          
        
    </BusyWrapper>
  );
};

export default Busyhubs;