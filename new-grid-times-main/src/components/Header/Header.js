import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const ButtonArrayNonDesktop = () => {
  return (
  <>
    <ActionGroup>
      <ButtonWrapper>
        <Search size={24} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Menu size={24} />
      </ButtonWrapper>
    </ActionGroup>
    <ActionGroup>
      <ButtonWrapper>
        <User size={24} />
      </ButtonWrapper>
    </ActionGroup>
  </>
  );
};

const ButtonArrayDesktop = () => {
  return (
  <>
    <ActionGroup>
      <ButtonWrapper>
        <Search size={24} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Menu size={24} />
      </ButtonWrapper>
    </ActionGroup>
  </>
  );
};

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
        <ButtonArrayNonDesktop />
        </Row>
      </SuperHeader>
      <MainHeader>
        <ButtonArrayDesktop />
        <Logo />
        <SubscriberArea>
          <Button>Subscribe</Button>
          <div Style={
            `position: absolute;
             bottom: 4px;
             text-decoration:underline;
             font-style: italic;
             font-size: .8rem;
             align-self: center;
             `
          }>Already a Subscriber?</div>
        </SubscriberArea>
      </MainHeader>
    </header>
  );
};

const SubscriberArea = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  justify-self: end;
`;

const ButtonWrapper = styled.button`

@media ${QUERIES.laptopAndUp} {
  button:nth-last-of-type(1n) {
    border: solid;
  }
}

`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: black;
    padding: 0;
    display:none;
    }

`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content:revert;
    align-items:revert;
    }
`;

export default Header;
