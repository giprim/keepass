import React from 'react';
import styled from '@emotion/styled';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  backgroundProps?: string;
  borderProps?: boolean;
  text?: string;
}
const StyledButton = styled.button<IButton>`
  padding: 1rem 3rem;
  background: ${(props) =>
    props.backgroundProps ? props.backgroundProps : '#99999900'};
  border: ${(props) => (props.borderProps ? '1px #999999 solid' : 'none')};
  color: white;
  font-weight: 600;
  margin-top: 1rem;
  border-radius: 4px;
  margin-right: 1rem;
  text-transform: uppercase;
  transition: 0.23s ease-out;
  :hover {
    background: ${({ backgroundProps }) =>
      backgroundProps ? `${backgroundProps}99` : '#99999955'};
  }
`;

const ButtonComp: React.FC<IButton> = ({
  text,
  backgroundProps,
  borderProps,
}) => {
  return (
    <StyledButton backgroundProps={backgroundProps} borderProps={borderProps}>
      {text}
    </StyledButton>
  );
};

export default ButtonComp;
