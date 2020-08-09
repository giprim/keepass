import React from 'react';
import {
  PaddedContainer,
  SectionBackground,
  StyledImage,
  StyledWidth,
} from '../styles/styled';
import Container from './Container';
import Secure from '../assets/secure.svg';
import { lorem } from './Tour';
import FlexContainer from './FlexContainer';

const Security = () => {
  return (
    <SectionBackground color='#eee'>
      <PaddedContainer padding='3%'>
        <Container>
          <PaddedContainer>
            <h1 style={{ textAlign: 'center' }}>Security</h1>
          </PaddedContainer>
          <FlexContainer justify='space-evenly'>
            <StyledImage src={Secure} width='400px' />
            <StyledWidth width='500px'>
              <p>{lorem}</p>
            </StyledWidth>
          </FlexContainer>
        </Container>
      </PaddedContainer>
    </SectionBackground>
  );
};

export default Security;
