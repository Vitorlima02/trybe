import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import clickReducer from './reducer';

const renderWithRedux = (
  component,
  { inititalState, store = createStore(combineReducers({clickReducer}), inititalState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
};

const store = createStore(renderWithRedux);

export default store;