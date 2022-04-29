import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <IconWrapper>
        <UnstyledButton>
          <Icon id="search" strokeWidth={2} />
          <VisuallyHidden>Search</VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} />
          <VisuallyHidden>Shopping Cart</VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" strokeWidth={2} />
          <VisuallyHidden>Menu</VisuallyHidden>
        </UnstyledButton>
      </IconWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  gap: 36px;
  overflow: auto;


  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
  }

`;

const IconWrapper = styled.div`
  display: none;
  margin-left: auto;
  align-self: flex-end;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 36px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 24px;
  }

`
const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem,8.1vw - 4rem,3rem);
  margin: 0px 48px;
  justify-content:space-between;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
