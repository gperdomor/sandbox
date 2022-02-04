import { cartReducer, CART_FEATURE_KEY } from '@acme/cart/data-access';
import { configureStore } from '@reduxjs/toolkit';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

jest.mock('@acme/books/data-access', () => {
  const originalModule = jest.requireActual('@acme/books/data-access');

  return {
    __esModule: true,
    ...originalModule,
    getBooks: () => Promise.resolve([]),
  };
});

export const store = configureStore({
  reducer: { [CART_FEATURE_KEY]: cartReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env['NODE_ENV'] !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

describe('App', () => {
  afterEach(cleanup);
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        {' '}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a header as the title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText('Bookstore')).toBeTruthy();
  });
});
