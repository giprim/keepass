import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Banner from './components/Banner';
import IconTitleText from './components/IconTitleText';
import FlexContainer from './components/FlexContainer';

const lorem = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, architecto sequi consequuntur, rem temporibus, corporis laboriosam ab id eaque dolorum recusandae labore delectus. Ullam accusamus praesentium, non fugit voluptas sint?`;

function App() {
  return (
    <div>
      <div style={{ background: 'black' }}>
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </div>

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
