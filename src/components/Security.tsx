import React from 'react';
import { PaddedContainer, StyledImage, StyledWidth } from '../styles/styled';
import Container from './Container';
import Secure from '../assets/secure.svg';
import { lorem } from './Tour';
import FlexContainer from './FlexContainer';

const Security = () => {
  return (
    <PaddedContainer padding='3%' id='security'>
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
  );
};

export default Security;
