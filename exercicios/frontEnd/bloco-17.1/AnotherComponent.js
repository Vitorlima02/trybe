import React from 'react';
import MyContext from './MyContext';

function AnotherComponent() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <Nothing />
      )}
    </MyContext.Consumer>
  )
}

export default AnotherComponent;