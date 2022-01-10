import React from 'react';
import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value={132}>
      <AnotherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;