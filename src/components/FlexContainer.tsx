import React from 'react';
import styled from '@emotion/styled';

const StyledFlex = styled('div')`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
const FlexContainer: React.FC = ({ children }) => {
  return <StyledFlex>{children}</StyledFlex>;
};

export default FlexContainer;
