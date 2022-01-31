import styled, { css } from 'styled-components';
import { sm, md, xs } from 'helpers/device';

export const CareersContent = styled.div`
  padding-top: 20px;

  .heading {
    color: #999;
    font-size: 1.4rem;
    margin-bottom: 20px;
    position: relative;
    /* text-align: center; */

    &::after {
      /* content: ''; */
      position: absolute;
      left: 40%;
      left: 0;
      bottom: -10px;
      border-bottom: 2px solid #ddd;
      width: 20%;
      margin: 0 auto;
    }
  }

  .job-listing {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    .job-card {
      cursor: pointer;
      padding: 16px;
      border: 1px solid rgba(50,50,50, .1);
      border-radius: 3px;
      background-color: #fff;
      transition: all .35s ease-in-out;

      &:hover {
        box-shadow: 0 12px 20px -10px #ccc;
      }

      .job-title {
        font-size: 1.35rem;
        color: #444;
        letter-spacing: .5px;
      }

      .job-desc-short {
        color: #888;
        margin: 0;
        margin-top: 12px;
      }

      .job-tags {
        margin-top: 12px;

        .job-tag-item {
          display: inline-block;
          padding: 2px 8px;
          margin-right: 8px;
          border-radius: 2px;
          color: #fff;
          font-size: .8rem;
          line-height: 1rem;
          background-color: rgba(41, 31, 51, .8);
        }
      }
    }
  }

  .job-email {
    padding-top: 40px;
    /* text-align: center; */
    font-size: 1.2rem;
    color: #bbb;

    a {
      color: #777;
      transition: all .3s ease-in-out;

      &:hover {
        color: #333;
      }
    }
  }

  .benefits {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    /* margin-bottom: 40px; */

    .benefit-card {
      h5 {
        font-size: 1.2rem;
        color: #777;
        margin-bottom: 5px;
      }
      p {
        font-size: 1rem;
        color: #999;
        margin-bottom: 8px;
      }

    }
  }

  .benefits-section {
    padding: 30px 0;
  }

  ${sm} {
    padding-top: 32px;

    .heading {
      color: #aaa;
      font-size: 2rem;
      margin-bottom: 30px;
      position: relative;
      /* text-align: center; */

      &::after {
        /* content: ''; */
        position: absolute;
        left: 45%;
        left: 0%;
        bottom: -16px;
        border-bottom: 2px solid #ddd;
        width: 10%;
        margin: 0 auto;
      }
    }

    .benefits-section {
      padding-top: 40px;
      padding-bottom: 60px;
    }

    .benefits {
      max-width: 60%;
      grid-template-columns: 1fr 1fr;
      /* margin-bottom: 40px; */

      .benefit-card {
        h5 {
          font-size: 1.3rem;
          color: #777;
          margin-bottom: 5px;
        }
        p {
          font-size: 1rem;
          color: #999;
        }
      }
    }

    .job-listing {
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
