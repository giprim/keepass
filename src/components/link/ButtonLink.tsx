import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface IButtonLink {
  backgroundProps?: string;
  borderProps?: boolean;
  text?: string;
  url?: string;
}

const StyledLink = styled(Link)<IButtonLink>`
  padding: 1rem 3rem;
  background: ${(props) =>
    props.backgroundProps ? props.backgroundProps : '#99999900'};
  border: ${(props) => (props.borderProps ? '1px #999999 solid' : 'none')};
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  margin-top: 1rem;
  border-radius: 4px;
  margin-right: 1rem;
  text-transform: uppercase;
  transition: 0.23s ease-out;
  :hover {
    background: ${({ backgroundProps }) =>
      backgroundProps ? `${backgroundProps}99` : '#99999955'};
  }

  @media (max-width: 420px) {
    display: block;
    width: 100%;
    margin-right: 0;
  }
`;

const ButtonLink: React.FC<IButtonLink> = ({
  backgroundProps,
  borderProps,
  text,
  url,
}) => {
  return (
    <StyledLink
      to={`/${url}`}
      backgroundProps={backgroundProps}
      borderProps={borderProps}>
      {text}
    </StyledLink>
  );
};

export default ButtonLink;
