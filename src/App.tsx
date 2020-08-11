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
      {/* test input */}
      <SectionBackground color='#263854'>
        <SupportSection />
      </SectionBackground>
      {/* footer */}
      <SectionBackground color='#19273e'>
        <PaddedContainer padding='10px'>
          <footer>developed by giprim</footer>
        </PaddedContainer>
      </SectionBackground>
    </div>
  );
}

export default App;
