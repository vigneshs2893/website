import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { BenifitsContent } from '../PageWrapper/careers.css';

const BenifitsSection = ({
  title,
  description,
  data
}) => {
  return (
    <BenifitsContent>
      <div className="container lg-container">
        <div className="benefits-section">
          <h2 className="heading">{title}</h2>
          {description && <p>{description}</p>}
          <div className="benefits">
            {
              data.map((item, i) => {
                return (
                  <div className="benefit-card" key={i}>
                    <BackgroundImage
                      Tag="figure"
                      fluid={item.image.childImageSharp.fluid}
                      style={{ position: 'absolute' }}
                    />
                    <span>{item.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </BenifitsContent>
  )
}

export default BenifitsSection;
