import React from "react"

import Layout from "../components/layout/layout"
import HeroSection from "../components/heroSection/HeroSection"
import ContentSection from "../components/contentSection/contentSection"
// import ClientLogo from "../components/clientsLogo/clientsLogo"
import { HomeWrapper } from "../components/home/home.css"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      servicesJson {
        services {
          title
          content {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          image1 {
            childImageSharp {
              fluid(
                maxHeight: 300,
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
          image2 {
            childImageSharp {
              fluid(
                maxHeight: 300,
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
          category {
            title
            content
            image {
              childImageSharp {
                fluid(
                  maxHeight: 120,
                  quality: 90,
                  traceSVG: {
                    color: "#d04b4b"
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
    }
  `)
  
  return (
    <Layout>
      {/* home page starts */}
      <HomeWrapper>
        <HeroSection />
        {data.servicesJson.services.map((item, i) => {
            return (
              <ContentSection 
                key={i}
                id={i}
                rightSide={i%2}
                listWithIcons
                image1={item.image1.childImageSharp.fluid}
                image2={item.image2.childImageSharp.fluid}
                heading={item.title}
                description={item.content.childMarkdownRemark.rawMarkdownBody}
                category={item.category}
              />
            )
          })}
        {/* <ClientLogo /> */}
      </HomeWrapper>
      {/* home page ends */}
    </Layout>
  )
}

export default IndexPage
