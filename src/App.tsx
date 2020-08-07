import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <div style={{ background: 'black' }}>
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </div>
    </div>
  );
}

export default App;
