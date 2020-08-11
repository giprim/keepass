import React from 'react';
import Container from './Container';
import {
  PaddedContainer,
  StyledImage,
  StyledWidth,
  StyledInput,
  StyledTextArea,
} from '../styles/styled';
import FlexContainer from './FlexContainer';
import support from '../assets/support.svg';

const SupportSection = () => {
  return (
    <Container>
      <PaddedContainer>
        <h2 style={{ color: '#fff' }}>Support</h2>
        <p>Don't be shy. Feel free to contact us for support</p>
        <FlexContainer justify='space-between'>
          <StyledImage src={support} width='300px' />
          <FlexContainer justify='space-between'>
            <StyledWidth width='45%'>
              <StyledInput placeholder='Full Name' />
            </StyledWidth>
            <StyledWidth width='45%'>
              <StyledInput placeholder='Email Address' />
            </StyledWidth>
            <StyledTextArea placeholder='Message' />
          </FlexContainer>
        </FlexContainer>
      </PaddedContainer>
    </Container>
  );
};

export default SupportSection;
