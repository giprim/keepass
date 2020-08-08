import React from 'react';
import styled from '@emotion/styled';
import ButtonComp from './ButtonComp';
import FlexContainer from './FlexContainer';

const StyledBanner = styled('div')`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  padding-bottom: 3rem;
  padding-top: 2rem;
  @media (min-width: 834px) {
    padding-bottom: 10rem;
  }
`;

const BannerWriteUp = styled('div')`
  display: inline-block;
  color: white;
  h2 {
    padding: 5px 0;
    font-size: 1.9em;
    margin-bottom: 5%;
    margin-top: 20px;
  }
  p {
    padding-bottom: 15px;
    font-size: 1.1em;
    color: #aaa;
  }

  @media (min-width: 834px) {
    width: 50%;
    h2 {
      margin-top: 0;
      font-size: 2.5em;
    }
    p {
      font-size: 1.4em;
    }
  }
`;
const BannerImage = styled('div')`
  max-width: 600px;
  img {
    max-width: 100%;
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
