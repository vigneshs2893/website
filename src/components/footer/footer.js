import React, { Fragment } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import IsMobile from '../../helpers/IsMobile';
import { FooterWrapper } from './footer.css';
import BackgroundImage from 'gatsby-background-image';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const Footer = ({ hideLink }) => {
  const isMobileDevice = IsMobile();
  const data = useStaticQuery(graphql`query FooterQuery {
  homeJson {
    footer {
      email
      mobile
      locations {
        title
        address
      }
      address {
        mobile
        desktop
      }
      facebook
      linkedin
      prodjar {
        childImageSharp {
          fluid(
            quality: 90,
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`)

  return (
    <FooterWrapper>
      <div className="container lg-container">
        <div className={`row ${!isMobileDevice ? 'vertical-bottom' : ''}`}>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="heading-txt mb-24">
              <span className="bold">Don’t be a stranger</span>
              just say hello
            </p>
            <p className="mb-3">
              {isMobileDevice ?
                'Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunity to be part of your visions.'
                :
                <Fragment>
                  Feel free to get in touch with us.<br />
                  We are always open to discussing new projects, creative<br />
                  ideas or opportunity to be part of your visions.
                </Fragment>
              }
            </p>

            <div className="row">
              <div className="col-6">
                <p className="mb-2">
                  <span>Feel like talking</span>
                  <a href={`tel:${data.homeJson.footer.mobile.replace(/[\s\(\)-]/g, '')}`}>{data.homeJson.footer.mobile}</a>
                </p>
              </div>
              <div className="col-6">
                <p className="mb-2">
                  <span>Need help?</span>
                  <a href={`mailto:${data.homeJson.footer.email}`}>{data.homeJson.footer.email}</a>
                </p>
              </div>
            </div>

            {isMobileDevice ? null : (
              <ul className="list-unstyled social-icons mb-3">
                <li><a href={data.homeJson.footer.facebook} target="_blank"><i className="pentafox-facebook" /></a></li>
                {/* <li><a href="/" ><i className="pentafox-twitter" /></a></li>
                <li><a href="/" ><i className="pentafox-instagram" /></a></li> */}
                <li><a href={data.homeJson.footer.linkedin} target="_blank"><i className="pentafox-linkedin" /></a></li>
              </ul>
            )}
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="mb-40">
              <span className='section-title'>Our Locations</span>
              <div className='location-grid'>
                {
                  data.homeJson.footer.locations.map((item, i) => (
                    <div key={i}>
                      <p className='location-title'>{item.title}</p>
                      <p className='location-address'>{item.address}</p>
                    </div>
                  ))
                }
              </div>
              {/* {isMobileDevice ?
                data.homeJson.footer.address.mobile.map((item, i) => <Fragment key={i}>{item}<br/></Fragment>)
                :
                <Fragment>
                  {data.homeJson.footer.address.desktop.map((item, i) => <Fragment key={i}>{item}<br/></Fragment>)}
                </Fragment>
              } */}
            </p>
            {isMobileDevice ? (
              <ul className="list-unstyled social-icons mb-40">
                <li><a href={data.homeJson.footer.facebook} target="_blank"><i className="pentafox-facebook" /></a></li>
                {/* <li><a href="/" ><i className="pentafox-twitter" /></a></li>
                <li><a href="/" ><i className="pentafox-instagram" /></a></li> */}
                <li><a href={data.homeJson.footer.linkedin} target="_blank"><i className="pentafox-linkedin" /></a></li>
              </ul>
            ): null}
            {/* <form>
              <div className="form-group">
                <input name="" type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="" type="text" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input name="" type="text" placeholder="Budget" />
              </div>
              <div className="form-group custom-file">
                <input name="" type="file" className="custom-file-input" placeholder="PDF / Doc" />
                <i className="placeholder-txt">PDF / Doc</i>
                <span class="upload-btn">Upload</span>
              </div>
            </form>
            <button className="btn send-btn">Send Request</button> */}
          </div>
        </div>

        <div className="btm-link">
          <div className="left-col">
            <Link to="/" className='pr-3 text-white'>Home</Link>{'   '}&#124;{'   '}
            <Link to="/careers" className='pl-3 text-white'>Careers</Link>
            {/* <a href="/" >Terms of use</a> */}
          </div>
          {
            !hideLink && (
              <div className="right-col">
                Designed by
                <BackgroundImage
                  Tag="a"
                  fluid={data.homeJson.footer.prodjar.childImageSharp.fluid}
                  href="https://prodjar.com/"
                  target="_blank"
                  rel="no-allow"
                  className="prodjar-link"
                  onClick={() => {
                    trackCustomEvent({
                      category: "Projar",
                      action: "Click",
                      label: "Prodjar Credits",
                    });
                  }}
                >&nbsp;
                </BackgroundImage>
              </div>
            )
          }
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
