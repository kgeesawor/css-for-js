import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectDiv value={value} onChange={onChange}>
      {children}
      </SelectDiv>
      <BaseDiv>
       {displayedValue}
      <IconWrapper style = {{'--size': 24 + 'px'}}>
        <Icon id = "chevron-down" strokeWidth={1} size={24}/>
      </IconWrapper>
      </BaseDiv>
      </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`

const SelectDiv = styled.select`
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
`

const BaseDiv = styled.div`
  z-index:1;
  background-color: red;
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16} rem;
  border-radius: 4px;

  ${SelectDiv}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectDiv}:hover + & {
    color: black;
  }
`

export default Select;
