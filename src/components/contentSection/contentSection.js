import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image'
import { ContentSectionWrapper } from './contentSection.css';

const ContentSection = ({
  heading,
  description,
  rightSide,
  listWithIcons,
  serviceStock,
  image1,
  image2
}) => {
  return (
    <ContentSectionWrapper rightSideStyle={rightSide}>
      <div className="container lg-container">
        <div className="middle-content">
          <div className="left-col">
            <h3>{heading}</h3>
            <p>{description}</p>

            {serviceStock ?
              <Fragment>
                <h5>Service Stock:</h5>
                <ul className="list-unstyled list-icon">
                  <li><img src="https://i.imgur.com/zmmFoXx.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/VYzQKup.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/zmmFoXx.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/VYzQKup.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/zmmFoXx.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/VYzQKup.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/zmmFoXx.png" alt="" /></li>
                  <li><img src="https://i.imgur.com/VYzQKup.png" alt="" /></li>
                </ul>
              </Fragment>
              : null
            }
            
            {listWithIcons ?
              <ul className="clearfix list-unstyled list-card">
                <li>
                  <figure
                    style={{
                      backgroundImage: `url(https://pyt-images.imgix.net/images/city/2400xh/ubud.jpg)`
                    }}
                  />
                  <span>ML Solutions</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <figure
                    style={{
                      backgroundImage: `url(https://pyt-images.imgix.net/images/city/2400xh/ubud.jpg)`
                    }}
                  />
                  <span>ML Solutions</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <figure
                    style={{
                      backgroundImage: `url(https://pyt-images.imgix.net/images/city/2400xh/ubud.jpg)`
                    }}
                  />
                  <span>ML Solutions</span>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <figure
                    style={{
                      backgroundImage: `url(https://pyt-images.imgix.net/images/city/2400xh/ubud.jpg)`
                    }}
                  />
                  <span>ML Solutions</span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            : null}
          </div>
          <div className="right-col">
            <div className={`image-card`}>
              <BackgroundImage
                Tag="figure"
                fluid={image1}
                className="left-img"
                style={{ position: "absolute" }}
              />
              <BackgroundImage
                Tag="figure"
                fluid={image2}
                className="right-img"
                style={{ position: "absolute" }}
              />
            </div>
          </div>
        </div>
      </div>
    </ContentSectionWrapper>
  );
};

ContentSection.prototypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  rightSide: PropTypes.bool,
  listWithIcons: PropTypes.bool,
  serviceStock: PropTypes.bool
};

export default ContentSection;