import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import IsMobile from '../../helpers/IsMobile';
import { FooterWrapper } from './footer.css';


const Footer = () => {
  const isMobileDevice = IsMobile();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      homeJson {
        footer {
          email
          mobile
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <div className="container lg-container">
        <div className={`row ${!isMobileDevice ? 'vertical-bottom' : ''}`}>
          <div className="col-12 col-sm-7 col-md-8">
            <p className="heading-txt mb-24">
              <span classNama="bold">Don’t be a stranger</span>
              just say hello
            </p>
            <p className="mb-32">
              {isMobileDevice ? 
                'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunity to be part of your visions.'
                :
                <Fragment>
                  Feel free to get in touch with me.<br />
                  I am always open to discussing new projects, creative<br />
                  ideas or opportunity to be part of your visions.
                </Fragment>
              }
            </p>
            <p className="mb-24">
              <span>Need help?</span>
              <a href={`mailto:${data.homeJson.footer.email}`}>{data.homeJson.footer.email}</a>
            </p>
            <p className="mb-40">
              <span>Feel like talking</span>
            <a href={`tel:${data.homeJson.footer.mobile.replace(/[\s\(\)-]/g, '')}`}>{data.homeJson.footer.mobile}</a>
            </p>
            <ul className="list-unstyled social-icons">
              <li><a href="/" ><i className="pentafox-facebook" /></a></li>
              <li><a href="/" ><i className="pentafox-twitter" /></a></li>
              <li><a href="/" ><i className="pentafox-instagram" /></a></li>
              <li><a href="/" ><i className="pentafox-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-5 col-md-4">
            <form>
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
            <button className="btn send-btn">Send Request</button>
          </div>
        </div>

        <div className="btm-link">
          <div className="left-col">
            <a href="/" >Privacy Policy</a>{' '}&#124;{' '}
            <a href="/" >FAQ</a>{' '}&#124;{' '}
            <a href="/" >Terms of use</a>
          </div>
          <div className="right-col">
            Designed by <a href="https://prodjar.com/" rel="no-ollow" className="prodjar-link">prodjar</a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
