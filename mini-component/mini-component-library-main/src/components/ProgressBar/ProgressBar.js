/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const leftEdge = value >= 98 ? 4 : 0;
  const styles = SIZES[size];
  return  <Wrapper style={{
                    '--padding': styles.padding + 'px', 
                    '--radius' : styles.radius + 'px'
                      }}>
            <Bar>           
              <InnerBar 
                style={{
                  '--height': styles.height + 'px', 
                  '--width' : value + '%'
                    }}
                value={value} >
              <VisuallyHidden>
              <ProgressValue> 
                {value}%
              </ProgressValue> 
              </VisuallyHidden>
              </InnerBar>
            </Bar>
          </Wrapper>;
};


const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const Bar = styled.div`
overflow:hidden;
`

const InnerBar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color:  ${COLORS.primary};
  border-radius: 4px 0 0 4px;
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
