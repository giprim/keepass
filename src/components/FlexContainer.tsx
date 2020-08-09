import React from 'react';
import styled from '@emotion/styled';

interface IFlex {
  justify?:
    | 'start'
    | 'safe'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'flex-end';
}

const StyledFlex = styled('div')<IFlex>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'start'};
  flex-wrap: wrap;
  align-items: center;
`;

const FlexContainer: React.FC<IFlex> = ({ children, justify }) => {
  return <StyledFlex justify={justify}>{children}</StyledFlex>;
};

export default FlexContainer;
