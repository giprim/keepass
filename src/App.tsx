import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import Tour from './components/Tour';
import {
  StyledBannerWrapper,
  SectionBackground,
  PaddedContainer,
} from './styles/styled';
import Security from './components/Security';
import PriceCard from './components/PriceCard';
import FlexContainer from './components/FlexContainer';

const plan = [
  '10 Software listing',
  '10 Software listing',
  '10 Software listing',
  '10 Software listing',
];

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

      {/* Pricing section */}
      <SectionBackground>
        <Container>
          <PaddedContainer>
            <FlexContainer justify='center'>
              <PriceCard price={250} planType='Personal' package={plan} />
              <PriceCard price={250} planType='Family' recommended={true} />
              <PriceCard price={250} planType='Premium' />
            </FlexContainer>
          </PaddedContainer>
        </Container>
      </SectionBackground>
    </div>
  );
}

export default App;
