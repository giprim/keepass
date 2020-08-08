import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled('div')`
  max-width: 1300px;
  padding: 0 5%;
  margin: 0 auto;

  @media (min-width: 834px) {
    padding: 0 2%;
  }
`;

const Container: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
