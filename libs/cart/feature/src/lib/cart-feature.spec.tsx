import { cartReducer, CART_FEATURE_KEY } from '@acme/cart/data-access';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CartFeature from './cart-feature';

jest.mock('@acme/cart/data-access', () => {
  const originalModule = jest.requireActual('@acme/cart/data-access');

  return {
    __esModule: true,
    ...originalModule,
    checkout: () => Promise.resolve({ order: 123 }),
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

describe('CartFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <CartFeature />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
