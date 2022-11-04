import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { HomeWrapper } from '../components/home/home.css';
import LayoutCommon from '../components/layout/layoutCommon';
import PageWrapper, {
  TopSectionWrapper,
} from '../components/PageWrapper/PageWrapper';

const privacy = () => {
  const data = useStaticQuery(graphql`
    query PrivacyStatementQuery {
      privacyJson {
        title
        description {
          childrenMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={false}
      headProps={{
        pageTitle: 'Privacy Statement',
      }}
    >
      <HomeWrapper>
        <PageWrapper>
          <TopSectionWrapper>
            <div>
              <h1>{data.privacyJson.title}</h1>
            </div>
          </TopSectionWrapper>
          <div className='container sm-container' style={{marginTop: 80, marginBottom: 80}}>
            <p dangerouslySetInnerHTML={{ __html: data.privacyJson.description.childrenMarkdownRemark[0].html}} />
          </div>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default privacy;
