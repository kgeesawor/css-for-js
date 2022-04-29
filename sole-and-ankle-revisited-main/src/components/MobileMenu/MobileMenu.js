/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent>
      <Wrapper>
        <OverLay>
        </OverLay>
        <MenuWrapper>
          <StyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
          </StyledButton>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink hrgief="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
            </MenuWrapper>
        </Wrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  height: 100vh;
  z-index:1;
`;

const OverLay = styled.div`
  position:fixed;
  background: hsl(220deg 5% 40% / 0.8);
  height: 100%;
  top:0;
  left:0;
  width:20%;
`;

const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 80%;
  right:0;
  top: 0;
  background: white;
  opacity: 1;
  border: solid;
`;

const StyledButton = styled(UnstyledButton)`
  display: flex;
  justify-content: flex-end;
  padding: 16px 32px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: black;
  padding-left: 16px;
`;

const NavLink = styled(Link)`
  text-transform:uppercase;
  font-weight: 600;
  margin-bottom: 16px; 
`;

const FooterLink = styled(Link)`
  color: ${COLORS.gray[700]};
  font-size: 14px;
`;


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`