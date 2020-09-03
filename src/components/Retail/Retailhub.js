import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { BusyWrapper2} from './Retailhubsection.css'
import { Link } from "gatsby"

const Retail = () => {
  const data = useStaticQuery(graphql`
    query Query2{
      busyJson {
        title
        landingTitle
        content
        retail{
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
    <BusyWrapper2>
      <line>
        <h2>{data.busyJson.retail.title}</h2>
        </line>
        <line1><h3>{data.busyJson.retail.subtitle}</h3></line1>
        <h4>{data.busyJson.retail.content}</h4>
        <h5>{data.busyJson.retail.content1}</h5>
        <h6>{data.busyJson.retail.client}</h6>
        <h7>{data.busyJson.retail.project}</h7>
        <h8>{data.busyJson.retail.hubs}</h8>
        <h9>{data.busyJson.retail.key}</h9>
        <h11>See More image  <Link to="/Click here/"><u>Click here</u></Link></h11> 
        <h56>
        <h51><img src ={require('../../images/profile/6.png')} /></h51>
        <h52><img src ={require('../../images/profile/7.png')} /></h52>
        <h53><img src ={require('../../images/profile/background.png')} /></h53>
        <h54><img src ={require('../../images/profile/8.png')} /></h54>
        </h56>
        
        {/* {data.busyJson.datas.images} */}
          
        
    </BusyWrapper2>
  );
};

export default Retail;