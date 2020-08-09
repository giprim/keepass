import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import Tour from './components/Tour';
import { StyledBannerWrapper } from './styles/styled';
import Security from './components/Security';

function App() {
  return (
    <div>
      <StyledBannerWrapper>
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </StyledBannerWrapper>
      <Tour />
      <Security />
    </div>
  );
}

export default App;
