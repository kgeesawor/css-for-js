import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Footer from '../Footer';
import Spacer from '../Spacer';
import MainStoryGrid from '../MainStoryGrid';
import SpecialtyStoryGrid from '../SpecialtyStoryGrid';
import { QUERIES } from '../../constants';

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <MaxWidthWrapper as="main">
          <MainStoryGrid />
          <SpecialtyStoryGrid />
        </MaxWidthWrapper>
        <Spacer size={64} />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`

  @media ${QUERIES.laptopAndUp} {
    padding: 0 120px;
  }

`

export default App;
