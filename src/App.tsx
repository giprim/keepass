import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import IconTitleText from './components/IconTitleText';
import FlexContainer from './components/FlexContainer';
import styled from '@emotion/styled';
import background from './assets/background.svg';
import mobileBackground from './assets/mobileBackground.svg';
import tabBackground from './assets/tabBackground.svg';

const StyledBannerWrapper = styled('div')`
  background: linear-gradient(
    72.7deg,
    #1b283c -16.89%,
    #1f2f46 52.58%,
    #203048 62.94%,
    #253753 76.13%,
    #1e2d44 83.11%,
    #1b283c 83.23%,
    #2f476a 85.38%,
    #213149 85.58%,
    #243651 90.28%,
    #263854 93.52%
  );
  @media screen and (max-width: 834px) {
    background: linear-gradient(
      72.7deg,
      #1b283c -16.89%,
      #1f2f46 52.58%,
      #203048 62.94%,
      #253753 76.13%,
      #1e2d44 83.11%,
      #1b283c 83.23%,
      #2f476a 85.38%,
      #213149 85.58%,
      #243651 90.28%,
      #263854 93.52%
    );
  }
  @media screen and (min-width: 1200px) {
    background: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top left;
  }
`;

const lorem = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, architecto sequi consequuntur, rem temporibus, corporis laboriosam ab id eaque dolorum recusandae labore delectus. Ullam accusamus praesentium, non fugit voluptas sint?`;

function App() {
  return (
    <div>
      <StyledBannerWrapper>
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </StyledBannerWrapper>

      <div>
        <Container>
          <FlexContainer justify='space-between'>
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
            <IconTitleText
              icon={<img src='' />}
              text={lorem}
              title={'Lorem ipsum dolor sit'}
            />
          </FlexContainer>
        </Container>
      </div>
    </div>
  );
}

export default App;
