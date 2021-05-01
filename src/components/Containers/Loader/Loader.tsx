import React from 'react';
import Loader from 'react-loader-spinner';

const App = ({ className }) => {
  return (
    <div className={className}>
      <Loader type="Puff" color="#00BFFF" height={30} width={30} />
    </div>
  );
};

export default App;
