import React, { Fragment, useRef, useState } from 'react';
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import IsMobile from '../../helpers/IsMobile';
import { FooterWrapper } from './footer.css';
import BackgroundImage from 'gatsby-background-image';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { URL } from '../../services/requestUrl';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Footer = ({ hideLink }) => {
  const isMobileDevice = IsMobile();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState();
  const [comms, setComms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [res, setRes] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const captchaRef = useRef();

  const handleSubmit = () => {
    if (privacy && name && email && mobile) {
      setError()
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key' : process.env.GATSBY_API_KEY,
        },
        body: JSON.stringify({
          name,
          email,
          phone: mobile,
          desc: message,
          is_privacy: privacy,
          is_comms: comms,
          captcha_token: captchaToken
        })
      }
      setLoading(true)
      fetch(`${URL.base}${URL.contact}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data === 'Success') {
            setRes(true)
          }
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
        });
      setTimeout(() => {
        setName('')
        setEmail('')
        setMobile('')
        setMessage('')
        setComms(false)
        setPrivacy(false)
        setRes(false)
        captchaRef.current.resetCaptcha()
        setCaptchaToken()
      }, 6000)
    } else {
      if (!privacy) {
        setError({...error, is_privacy: 'Required'})
      }
      if (!mobile) {
        setError({...error, mobile: 'Required'})
      }
      if (!email) {
        setError({...error, email: 'Required'})
      }
      if (!name) {
        setError({...error, name: 'Required'})
      }
    }
  }

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

const handlePrivacyStatement = (event) => {
  event.preventDefault()
  navigate('/privacy')
}

  return (
    <FooterWrapper>
      <div className="container lg-container">
        {/* <div className={`row ${!isMobileDevice ? 'vertical-bottom' : ''}`}> */}
        <div className='row'>
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
            <p className="mb-40">
              <span className='section-title'>Our Locations</span>
              <div className='location-grid'>
                {
                  data.homeJson.footer.locations.map((item, i) => (
                    <div key={i}>
                      <p className='location-title'>{item.title}</p>
                      <p className='location-address'>{item.address.split('\n').map(str => { return <p className='location-address'>{str}</p>})}</p>
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
                <li><a href={data.homeJson.footer.linkedin} target="_blank"><i className="pentafox-linkedin" /></a></li>
              </ul>
            )}
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            {/* <div className="row">
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
            </div> */}

            {/* {isMobileDevice ? null : (
              <ul className="list-unstyled social-icons mb-3">
                <li><a href={data.homeJson.footer.facebook} target="_blank"><i className="pentafox-facebook" /></a></li>
                <li><a href={data.homeJson.footer.linkedin} target="_blank"><i className="pentafox-linkedin" /></a></li>
              </ul>
            )} */}
            {/* <p className="mb-40">
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
            </p> */}
            {isMobileDevice ? (
              <ul className="list-unstyled social-icons mb-40">
                <li><a href={data.homeJson.footer.facebook} target="_blank"><i className="pentafox-facebook" /></a></li>
                {/* <li><a href="/" ><i className="pentafox-twitter" /></a></li>
                <li><a href="/" ><i className="pentafox-instagram" /></a></li> */}
                <li><a href={data.homeJson.footer.linkedin} target="_blank"><i className="pentafox-linkedin" /></a></li>
              </ul>
            ): null}
            <form id='contact-form'>
              <div className="form-group">
                <input name="" type="text" className={error?.name && "error-label"} value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <input name="" type="email" className={error?.email && "error-label"} value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <input name="" type="text" className={error?.mobile && "error-label"} value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} required/>
              </div>
              <div className="form-group">
                <textarea name="" type="text" value={message} placeholder="Whats on your mind..." onChange={(e) => setMessage(e.target.value)} required/>
              </div>
              <div className="form-group-checkbox">
                <input name="" type="checkbox" checked={privacy} id="is_privacy" onChange={(e) => {setPrivacy(e.target.checked); setError();}} />
                <label for="is_privacy" className={error?.is_privacy && "error-label"}>I confirm, I have read and agree to <span onClick={handlePrivacyStatement}><a>Pentafox's Privacy Policy</a></span> and consent to share my information</label>
              </div>
              <div className="form-group-checkbox">
                <input name="" type="checkbox" checked={comms} id="is_comms" onChange={(e) => setComms(e.target.checked)} />
                <label for="is_comms">I would like to receive alerts and updates from Pentafox</label>
              </div>
              {/* <div className="form-group custom-file">
                <input name="" type="file" className="custom-file-input" placeholder="PDF / Doc" />
                <i className="placeholder-txt">PDF / Doc</i>
                <span class="upload-btn">Upload</span>
              </div> */}
              <div className='form-group'>
                <HCaptcha
                  ref={captchaRef}
                  sitekey={process.env.GATSBY_CAPTCHA_TOKEN}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken()}
                />
              </div>
            </form>
            <button className="btn send-btn" disabled={loading || !captchaToken} onClick={handleSubmit}>{
            loading ? 'Sending ...' : res ? 'Submitted' :
            'Send Request'}</button>
          </div>
        </div>

        <div className="btm-link">
          <div className="left-col">
            <Link to="/" className='pr-3 text-white'>Home</Link>{'   '}&#124;{'   '}
            <Link to="/careers" className='pl-3 text-white'>Careers</Link>
            {/* <a href="/" >Terms of use</a> */}
          </div>
          <div className="right-col">© 2022 Pentafox Technologies. All Rights Reserved.</div>
          {/* {
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
          } */}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
