import React from "react"

import Layout from "../components/layout/layout"
import { HomeWrapper } from "../components/home/home.css"
import { useStaticQuery, graphql } from "gatsby"
import PageWrapper, { TopSectionWrapper } from "../components/PageWrapper/PageWrapper"
import { CareersContent } from "../components/PageWrapper/careers.css"
import JobsList from "../components/JobsList/JobsList"

const CareerPage = () => {
  const data = useStaticQuery(graphql`
    query CareersQuery {
      careersJson {
        careers {
          title
          description {
            childMarkdownRemark {
              html
              rawMarkdownBody
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
    <Layout hideLink headProps={{
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

          <div className="container lg-container">
            <CareersContent>
              <section className="benefits-section">
                <h3 className="heading">Benefits at Pentafox</h3>
                <div className="benefits">
                  <div className="benefit-card">
                    <h5>Health Insurance</h5>
                  </div>
                  <div className="benefit-card">
                    <h5>Financial wellbeing</h5>
                  </div>
                  <div className="benefit-card">
                    <h5>Flexibility and time off</h5>
                  </div>
                  <div className="benefit-card">
                    <h5>Flexibility and time off</h5>
                  </div>
                </div>
              </section>

              <h3 className="heading">Current opportunities</h3>
              <JobsList data={data.careersJson.careers.jobs} />

              <div className="job-email">
                <p>Email your CV to <a href="mailto:jobs@pentafox.in" title="Email us">jobs@pentafox.in</a> with &lt;Job-Title&gt; as subject.</p>
              </div>
            </CareersContent>
          </div>
        </PageWrapper>
      </HomeWrapper>
      {/* career page ends */}
    </Layout>
  )
}

export default CareerPage
