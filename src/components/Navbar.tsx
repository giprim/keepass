import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledNav = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const LogoSection = styled('div')`
  display: inline-block;
  height: 100%;
  h3 {
    color: white;
  }
  h3 span {
    color: purple;
  }
`;

const LinkSection = styled('ul')`
  display: inline-flex;

  li {
    list-style: none;
    text-transform: uppercase;
    margin: 2px;
    margin-left: 10px;
    font-weight: 600;
    border-radius: 4px;

    a {
      text-decoration: none;
      color: white;
      font-size: 0.9rem;
      padding: 10px 5px;
    }

    :last-child {
      background: purple;
      padding: 10px 15px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <LogoSection>
        <h3>
          Kee<span>pass</span>
        </h3>
      </LogoSection>
      <LinkSection>
        <li>
          <NavLink to='/tour'>tour</NavLink>
        </li>
        <li>
          <NavLink to='/security'> security</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>pricing</NavLink>
        </li>
        <li>
          <NavLink to='/support'>support</NavLink>
        </li>
        <li>
          <NavLink to='/signin'>sign in</NavLink>
        </li>
        <li>
          <NavLink to='/signin'>try for free</NavLink>
        </li>
      </LinkSection>
    </StyledNav>
  );
};

export default Navbar;
