/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {

  small: {
    "--barHeight": 8 + "px",
    "--textTop": 10 + "px",
    "--padding": 2 + "px"
  },
  medium: {
    "--barHeight": 12 + "px",
    "--textTop": 14 + "px",
    "--padding": 2 + "px"
  },
  large: {
    "--barHeight": 24 + "px",
    "--textTop": 26 + "px",
    "--padding": 2 + "px"
  }

}

const ProgressBar = ({ value, size }) => {
  const leftEdge = value >= 98 ? 4 : 0;
  const styles = SIZES[size];
  return  <OuterBox style={styles}>
            <InnerBox value={value} leftEdge={leftEdge}>
            <VisuallyHidden>
             <ProgressValue> 
              {value}%
             </ProgressValue>
             </VisuallyHidden>
            </InnerBox>
          </OuterBox>;
};


const OuterBox = styled.div`
  width: 370px;
  height: var(--barHeight);
  position:absolute;
  background-color: ${COLORS.transparentGray35};
  border-radius: 4px;
`

const InnerBox = styled.div`
  width: ${p => p.value/100 * 366}px;
  height: var(--barHeight);
  position: relative;
  background-color:  ${COLORS.primary};
  left:2px;
  border-radius: 4px ${p=>p.leftEdge}px ${p=>p.leftEdge}px 4px;
`
 
const ProgressValue = styled.div`
position: relative;
font-size: 18px;
font-weight: bold; 
top: var(--textTop);
left: 168px;
color: black;
`

export default ProgressBar;
