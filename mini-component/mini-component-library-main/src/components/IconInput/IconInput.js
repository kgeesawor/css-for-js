import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper alt="Search">
         <IconWrapper name="iconwrapper">
          <Icon id = "search" strokeWidth={1} size={24}/>
         </IconWrapper>
         <PresentationalBit>
         ______________________________
         </PresentationalBit>
         <Input placeholder = "Search...">
         </Input>
         </Wrapper>;
};

const Wrapper = styled.div`
 position: relative;
 width: 30px;
 height: 30px;
`
const IconWrapper = styled.div`
  position: absolute;
  top:0px;
  color: ${COLORS.gray700};
`

const Input = styled.input`
  position: absolute;
  top: 5px;
  left: 30px;
  bottom: 10px;
  border: transparent;
  z-index: 1;
  color: ${COLORS.gray500};
  font-size: 1rem;
  padding-right: 10px;

  &&:focus {
    outline: none;
  }
`

const PresentationalBit = styled.div`
  position: absolute;
  left:0;
  bottom:0;
  font-weight: 800;
  z-index: 0;
`


export default IconInput;
