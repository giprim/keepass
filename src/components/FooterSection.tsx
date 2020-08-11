import React from 'react';
import { PaddedContainer } from '../styles/styled';
import styled from '@emotion/styled';
import Container from './Container';

const StyledFooter = styled('footer')`
  text-align: center;
  color: #aaaaaa9a;
  a {
    color: #aaaaaa;
    text-decoration: none;
    :hover {
      color: purple;
    }
  }
`;

const FooterSection = () => {
  return (
    <PaddedContainer padding='10px'>
      <Container>
        <StyledFooter>
          <span>
            developed by{' '}
            <a
              href='https://github.com/giprim'
              target='_blank'
              rel='noopener noreferrer'>
              giprim
            </a>{' '}
            | 2020
          </span>
        </StyledFooter>
      </Container>
    </PaddedContainer>
  );
};

export default FooterSection;
