import { ICart } from '@acme/shared-models';
import { checkout } from './cart-data-access';

jest.mock('./cart-data-access', () => {
  const originalModule = jest.requireActual('./cart-data-access');

  return {
    __esModule: true,
    ...originalModule,
    checkout: () => ({
      order: 'mocked',
    }),
  };
});

describe('checkout', () => {
  it('should work', () => {
    const cart: ICart = { items: [] };

    expect(checkout(cart)).toEqual({ order: 'mocked' });
  });
});
