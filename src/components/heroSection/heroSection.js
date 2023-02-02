import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroSectionWrapper } from './heroSection.css';
import BackgroundImage from 'gatsby-background-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { PopupButton } from 'react-calendly';

const FigureWrapper = ({ children, id, ...props }) => {
  return (
    <BackgroundImage
      Tag="figure"
      fluid={props.image}
      onClick={() => scrollTo(`#content-section-${id}`)}
    >
      {children}
    </BackgroundImage>
  );
};

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      homeJson {
        title
        landingTitle
        landingDescription {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        landingImage {
          childImageSharp {
            fluid(
              maxHeight: 800
              quality: 90
              traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannerSection {
          title
          content
          image {
            childImageSharp {
              fluid(
                maxHeight: 500
                quality: 90
                traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MAJORITY }
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
    <HeroSectionWrapper>
      <div className="left-col">
        <BackgroundImage
          Tag="figure"
          fluid={data.homeJson.landingImage.childImageSharp.fluid}
        >
          <figcaption>
            <h2>{data.homeJson.landingTitle}</h2>
            <p>
              {
                data.homeJson.landingDescription.childMarkdownRemark
                  .rawMarkdownBody
              }
            </p>
            <span
              className="know-more"
              onClick={() => scrollTo(`#content-section-0`)}
            >
              Know more
            </span>
            <PopupButton
              url="https://calendly.com/vignesh-sankaran"
              className="appointment-btn"
              rootElement={document.getElementById('___gatsby')}
              text={
                <div>
                  Talk to our Experts
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={13} fill="rgb(110, 12, 15)" style={{marginLeft: 12}}>
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                  
                  {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                </div>
              }
            />
            {/* <span className="know-more" onClick={() => scrollTo(`#content-section-0`)}>Know more</span> */}
          </figcaption>
        </BackgroundImage>
      </div>
      <div className="right-col">
        {data.homeJson.bannerSection.map((item, i) => {
          return (
            <FigureWrapper
              key={i}
              id={i}
              image={item.image.childImageSharp.fluid}
            >
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </figcaption>
            </FigureWrapper>
          );
        })}
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
