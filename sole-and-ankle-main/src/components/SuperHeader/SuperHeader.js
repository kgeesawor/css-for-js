import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchWrapper>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      </SearchWrapper>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  font-weight: 500px;
  padding: 8px 32px;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  justify-content: space-evenly;
`;

const SearchWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  display: flex;
  align-items: center;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  padding: 0 24px;
  display: flex;
  align-items: center;


  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
