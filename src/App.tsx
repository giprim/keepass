import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import Tour from './components/TourSection';
import {
  StyledBannerWrapper,
  SectionBackground,
  StyledInput,
  PaddedContainer,
} from './styles/styled';
import Security from './components/SecuritySection';
import Price from './components/PriceSection';

function App() {
  return (
    <div>
      <StyledBannerWrapper>
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </StyledBannerWrapper>
      <SectionBackground>
        <Tour />
      </SectionBackground>
      <SectionBackground color='#eee'>
        <Security />
      </SectionBackground>

      <SectionBackground>
        <Price />
      </SectionBackground>
      <SectionBackground>
        <PaddedContainer>
          <Container>
            <StyledInput placeholder='emailaddress@gmail.com' />
          </Container>
        </PaddedContainer>
      </SectionBackground>
    </div>
  );
}

export default App;
