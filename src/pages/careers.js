import React from "react"

import LayoutCommon from "../components/layout/layoutCommon"
import { HomeWrapper } from "../components/home/home.css"
import { useStaticQuery, graphql } from "gatsby"
import PageWrapper, { TopSectionWrapper } from "../components/PageWrapper/PageWrapper"
import { BenifitsContent, CareersContent } from "../components/PageWrapper/careers.css"
import JobsList from "../components/JobsList/JobsList"
import BenifitsSection from "../components/Benifits/BenifitsSection"

const CareerPage = () => {
  const data = useStaticQuery(graphql`query CareersQuery {
  careersJson {
    careers {
      title
      description {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      jobSection {
        title
        description
      }
      benifits {
        title
        description
        list {
          title
          image {
            childImageSharp {
              fluid(
                maxHeight: 80,
                quality: 100,
                traceSVG: {
                  color: "#6e6e6e"
                  turnPolicy: TURNPOLICY_MAJORITY
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      jobs {
        title
        tags
        shortDescription
        description {
          childrenMarkdownRemark {
            html
            frontmatter {
              ctc
              education
              jobType
              location
              profile
              skills
              title
            }
          }
        }
      }
    }
  }
}
`)

  return (
    <LayoutCommon hideLink showCareers={false} headProps={{
      pageTitle: 'Careers'
    }}>
      {/* career page starts */}
      <HomeWrapper>
        <PageWrapper>
          <TopSectionWrapper>
            <div className="container lg-container">
              <h1>{data.careersJson.careers.title}</h1>
              <p>{data.careersJson.careers.description.childMarkdownRemark.rawMarkdownBody}</p>
            </div>
          </TopSectionWrapper>

          <BenifitsSection
            title={data.careersJson.careers.benifits.title}
            description={data.careersJson.careers.benifits.description}
            data={data.careersJson.careers.benifits.list}
          />

          <div className="container lg-container">
            <CareersContent>
              <h2 className="heading text-center">{data.careersJson.careers.jobSection.title}</h2>
              <p className="text-center">{data.careersJson.careers.jobSection.description}</p>

              <JobsList data={data.careersJson.careers.jobs} />

              <div className="job-email text-center">
                <p>Email your CV to <a href="mailto:jobs@pentafox.in" title="Email us">jobs@pentafox.in</a> with &lt;Job-Title&gt; as subject.</p>
              </div>
            </CareersContent>
          </div>
        </PageWrapper>
      </HomeWrapper>
      {/* career page ends */}
    </LayoutCommon>
  )
}

export default CareerPage
