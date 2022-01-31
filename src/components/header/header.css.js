import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: transparent;
  position: absolute;
  top: 12px;
  left: 0;
  left: 0;
  padding: 12px 0;
  z-index: 10;
  box-shadow: none;
  display: flex;
  align-items: center;
  min-height: 56px;

  @media(max-width: 991px) {
    top: 16px;
    min-height: 72px;
  }

  a {
    display: inline-block;
  }
`;
