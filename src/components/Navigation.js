import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../routes';

const Header = styled.header`
  padding: 20px 40px;
  background-color: #2196f3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const NavigationList = styled.ul`
    display: flex;
`;

const NavigationItem = styled.li`
    margin-right: 20px;

    &:last-child{
        margin-right: 0;
    }
`;

const activeClassName = 'nav-item-active'

const NavigationLink = styled(NavLink).attrs({ activeClassName })`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    font-weight: 500;

    &.${activeClassName}{
        color: #000;
    }
`;

const Navigation = () => (
  <Header>
    <NavigationList>
      <NavigationItem>
        <NavigationLink exact to={routes.home}>
          Home
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to={routes.movies}>
          Movies
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </Header>
);

export default Navigation;
