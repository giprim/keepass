import React from 'react';
import styled from '@emotion/styled';
import ButtonComp from './ButtonComp';
import FlexContainer from './FlexContainer';

const StyledBanner = styled('div')`
  /* display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 14%;
  align-content: space-between;
  padding-top: 2rem;
  padding-bottom: 6rem;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  } */

  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  padding-bottom: 6rem;
  padding-top: 2rem;
`;

const BannerWriteUp = styled('div')`
  display: inline-block;
  color: white;
  h2 {
    padding: 5px 0;
    font-size: 2.5em;
  }
  p {
    padding-bottom: 20px;
    font-size: 1.4em;
  }
`;
const BannerImage = styled('div')`
  max-width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <BannerWriteUp>
        <h2>Go ahead. Forget your passwords.</h2>
        <p>
          Keepass remembers them all for you. Save your password and log in to
          sites with a single click. it's that simple.
        </p>

        <FlexContainer>
          <ButtonComp
            backgroundProps='#840084'
            borderProps={false}
            text='try for free'
          />
          <ButtonComp borderProps={true} text='How it works' />
        </FlexContainer>
      </BannerWriteUp>
      <BannerImage>
        <img
          src='https://images.unsplash.com/photo-1534279006878-88c603b2ce78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
          alt=''
        />
      </BannerImage>
    </StyledBanner>
  );
};

export default Banner;
