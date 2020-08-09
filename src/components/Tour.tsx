import React from 'react';
import Container from './Container';
import FlexContainer from './FlexContainer';
import IconTitleText from './IconTitleText';
import { Camera, Calendar, Image } from 'react-feather';
import { PaddedContainer } from '../styles/styled';

export const lorem = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, architecto sequi consequuntur, rem temporibus, corporis laboriosam ab id eaque dolorum recusandae labore delectus. Ullam accusamus praesentium, non fugit voluptas sint?`;

const Tour = () => {
  return (
    <PaddedContainer>
      <Container>
        <FlexContainer justify='space-between'>
          <IconTitleText
            icon={<Camera color='red' />}
            text={lorem}
            title={'Lorem ipsum dolor sit'}
          />
          <IconTitleText
            icon={<Calendar color='orange' />}
            text={lorem}
            title={'Lorem ipsum dolor sit'}
          />
          <IconTitleText
            icon={<Image color='green' />}
            text={lorem}
            title={'Lorem ipsum dolor sit'}
          />
        </FlexContainer>
      </Container>
    </PaddedContainer>
  );
};

export default Tour;
