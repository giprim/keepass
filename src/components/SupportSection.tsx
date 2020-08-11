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
import styled from '@emotion/styled';

const SectionTitle = styled('div')`
  text-align: center;
  color: #fff;
  padding: 20px 0;
  h2 {
    font-size: 200%;
  }

  p {
    color: #eee;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
`;
const SupportSection = () => {
  return (
    <Container>
      <PaddedContainer id='support'>
        <SectionTitle>
          <h2>Support</h2>
          <p>Don't be shy. Feel free to contact us for support</p>
        </SectionTitle>
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
