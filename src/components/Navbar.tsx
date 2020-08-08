import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Menu } from 'react-feather';

const StyledNav = styled('div')`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  vertical-align: middle;
  div {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const Logo = styled('h3')`
  font-size: 1.2em;
  padding: 15px 0;
  color: white;
  span {
    color: purple;
  }
`;

const LinkSection = styled('ul')<any>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  margin-top: 15px;
  transition: 0.23s linear;

  li {
    list-style: none;
    a {
      background: #840084;
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 10px 5px;
      color: white;
      text-transform: uppercase;
      font-weight: 600;
      transition: 0.23s ease-out;
      :hover {
        background: #520052;
      }
    }
    :last-child {
      a {
        background: #ffffff;
        color: #840084;
        :hover {
          background: #ffffff99;
        }
      }
    }
  }

  @media (min-width: 834px) {
    display: inline-flex;
    width: auto;
    margin-top: 8px;
    li {
      a {
        background: #ffffff00;
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 3px;
        :hover {
          background: #840084;
        }
      }
    }
  }
`;

const MenuButton = styled('button')`
  display: none;
  border: none;
  border: 1px #ffffff55 solid;
  border-radius: 4px;
  background: #ffffff00;
  color: white;
  font-size: 1.1em;
  padding: 5px 15px;
  line-height: 100%;
  transition: 0.23s ease-out;
  @media (max-width: 834px) {
    display: inline;
    :hover {
      background: #ffffffaa;
    }
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledNav>
      <NavLink to='/'>
        <Logo>
          Kee<span>pass</span>
        </Logo>
      </NavLink>

      <MenuButton onClick={() => setVisible((prev) => !prev)}>
        <Menu />
      </MenuButton>
      <LinkSection show={visible}>
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
