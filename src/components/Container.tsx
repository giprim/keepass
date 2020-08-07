import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled('div')`
  max-width: 1300px;
  padding: 10px;
  margin: 0 auto;
`;

const Container: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
