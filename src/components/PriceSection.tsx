import React from 'react';
import Container from './Container';
import { PaddedContainer } from '../styles/styled';
import FlexContainer from './FlexContainer';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <PaddedContainer id='pricing'>
      <Container>
        <FlexContainer justify='center'>
          <PriceCard price={69} planType='Personal' />
          <PriceCard price={249} planType='Family' recommended={true} />
          <PriceCard price={399} planType='Premium' />
        </FlexContainer>
      </Container>
    </PaddedContainer>
  );
};

export default Price;
