import React, { Component } from "react"
import Header from "./header"
import Body from "./body"
import image_1 from "../images/prodjar/image_1.png"
import image_2 from "../images/prodjar/image_2.png"
import image_3 from "../images/prodjar/image_3.png"
import image_4 from "../images/prodjar/image_4.png"



class header extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Body title="Pentro Money"
                      sub_title="Mobile"
                      topic="The Challenge for us"
                      description="Tamilnadu Startup and Innovation Mission (TANSIM) e-Portal’s primary and foundation user flow starts from the TANSIM website. This set of landing pages is used as “Go To Market” for various use cases of TANSIM operations and schemes marketing."
                      table_content1="Client"
                      table_content2="Pentro Money"
                      table_content3="project"
                      table_content4="Transform Petrol Stations"
                      image={image_1}/>
                <Body title="Busyhubs"
                      sub_title="Web Page, Dashboard"
                      topic="The Challenge for us"
                      description="BusyHubs connect the learners, who are consistently looking to enhance their knowledge, with the tutors, who are excited to share their expertise skills, in collaboration with us"
                      table_content1="Client"
                      table_content2="Busyhubs"
                      table_content3="project"
                      table_content4="Learning Platform"
                      image={image_2}/>
                <Body title="Retail Hub"
                      sub_title="Dashboard, Mobile"
                      topic="The Challenge for us"
                      description="With a pan India field footprint and a whole new thinking on delivering measurable value to our clients, we try to unearth every conceivable store related issue that affects execution and sales of our clients. "
                      table_content1="Client"
                      table_content2="Retail Scan"
                      table_content3="project"
                      table_content4="In-Store Solutions"
                      image={image_3}/>
                <Body title="Festen Technology"
                      sub_title="Logo, Guideline"
                      topic="The Challenge for us"
                      description="Young & Energetic service company providing technology consulting, talent sourcing, and human resource management solutions to various corporate clients within India, Europe and the UK. "
                      table_content1="Client"
                      table_content2="Festen Tech"
                      table_content3="project"
                      table_content4="Human Resource Management "
                      image={image_4}/>      
                
            </div>
            
        )
    }
}
export default header;