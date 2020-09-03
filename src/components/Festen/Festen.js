import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { BusyWrapper3} from './Festensection.css'
import { Link } from "gatsby"


const Festen = () => {
  const data = useStaticQuery(graphql`
    query Query3 {
      busyJson {
        title
        landingTitle
        content
        festen{
          title
          subtitle
          content
          content1
          client
          project
          hubs
          key
          images {
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
    <BusyWrapper3>
     
        <line><h2>{data.busyJson.festen.title}</h2></line>
        <line1><h3>{data.busyJson.festen.subtitle}</h3></line1>
        <h4>{data.busyJson.festen.content}</h4>
        <h5>{data.busyJson.festen.content1}</h5>
        <h6>{data.busyJson.festen.client}</h6>
        <h7>{data.busyJson.festen.project}</h7>
        <h8>{data.busyJson.festen.hubs}</h8>
        <h9>{data.busyJson.festen.key}</h9>
       <line2> <h12>See More image  <Link to="/Click here/"><u>Click here</u></Link></h12> </line2>
        <h46>
        <h41><img src ={require('../../images/profile/9.png')} /></h41>
        <h42><img src ={require('../../images/profile/10.png')} /></h42>
        <h43><img src ={require('../../images/profile/background.png')} /></h43>
        </h46>
        {/* {data.busyJson.datas.images} */}
          
        
    </BusyWrapper3>
  );
};

export default Festen;