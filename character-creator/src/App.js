import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="front">
      <CharacterEditor />
      <Footer />
      </div>
      <div className="horizon">
      </div>
    </>
  );
}

export default App;
