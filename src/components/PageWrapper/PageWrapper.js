import styled, { css } from 'styled-components';
import { sm, md, xs } from 'helpers/device';

const PageWrapper = styled.div`
`;

export const TopSectionWrapper = styled.section`
  /* text-align: center; */
  padding-top: 100px;
  padding-bottom: 32px;
  background: linear-gradient(180deg, #E64545 0%, #C23232 39.46%, #A22121 100%);
  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */

  min-height: 40vh;
  display: flex;
  align-items: center;

  ${xs} {
    padding-top: 80px;
    /* box-shadow: 0px 60px 15px 0px rgba(0,0,0,0.25) inset; */
  }

  h1, p {
    color: #f3f3f3;
  }
  h1 {
    font-weight: 700;
    font-size: 2.75rem;
  }

  p {
    font-size: 1.2rem;
  }

  ${xs} {
    padding-top: 140px;
    min-height: 40vh;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

`;

export default PageWrapper;
