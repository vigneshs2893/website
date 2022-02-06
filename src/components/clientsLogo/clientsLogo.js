import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import { ClientLogoSection } from './clientsLogo.css';

const ClientLogo = () => {
  const data = useStaticQuery(graphql`query ClientsQuery {
    homeJson {
      clients {
        title
        description
        list {
          title
          image {
            childImageSharp {
              fixed(
                height: 45
                quality: 100
                traceSVG: {
                  color: "#323023"
                  turnPolicy: TURNPOLICY_MINORITY
                }
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          mobile: image {
            childImageSharp {
              fixed(
                height: 32
                quality: 100
                traceSVG: {
                  color: "#323023"
                  turnPolicy: TURNPOLICY_MINORITY
                }
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
      partners {
        title
        description
        list {
          title
          image {
            childImageSharp {
              fixed(
                height: 45
                quality: 100
                traceSVG: {
                  color: "#323023"
                  turnPolicy: TURNPOLICY_MINORITY
                }
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          mobile: image {
            childImageSharp {
              fixed(
                height: 32
                quality: 100
                traceSVG: {
                  color: "#323023"
                  turnPolicy: TURNPOLICY_MINORITY
                }
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  `);
  return (
    <div>
      <ClientLogoSection>
        <div className="container">
          <h3>{data.homeJson.clients.title}</h3>
          <p>{data.homeJson.clients.description}</p>

          <ul className={`ml-auto mr-auto mb-24`}>
            {
              data.homeJson.clients.list.map((item, i) => {
                return (
                  <li key={i}>
                    <Img
                      title={item.title}
                      alt={item.title}
                      fixed={[
                        item.image.childImageSharp.fixed,
                        {
                          ...item.mobile.childImageSharp.fixed,
                          media: `(max-width: 767px)`,
                        },
                      ]}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </ClientLogoSection>
      <ClientLogoSection className='bg-white'>
        <div className="container">
          <h3>{data.homeJson.partners.title}</h3>
          <p>{data.homeJson.partners.description}</p>

          <ul className={`ml-auto mr-auto mb-24`}>
            {
              data.homeJson.partners.list.map((item, i) => {
                return (
                  <li key={i}>
                    <Img
                      title={item.title}
                      alt={item.title}
                      fixed={[
                        item.image.childImageSharp.fixed,
                        {
                          ...item.mobile.childImageSharp.fixed,
                          media: `(max-width: 767px)`,
                        },
                      ]}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </ClientLogoSection>

    </div>
  );
};

export default ClientLogo;
