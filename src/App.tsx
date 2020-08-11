import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import Tour from './components/TourSection';
import {
  StyledBannerWrapper,
  SectionBackground,
  PaddedContainer,
} from './styles/styled';
import Security from './components/SecuritySection';
import Price from './components/PriceSection';
import SupportSection from './components/SupportSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
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
      <SectionBackground color='#263854'>
        <SupportSection />
      </SectionBackground>
      <SectionBackground color='#19273e'>
        <FooterSection />
      </SectionBackground>
    </>
  );
}

export default App;
