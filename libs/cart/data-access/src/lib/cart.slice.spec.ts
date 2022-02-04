import { ICartItem } from '@acme/shared-models';
import { cartAdapter, cartReducer, checkoutCart } from './cart.slice';

describe('cart reducer', () => {
  it('should handle initial state', () => {
    const expected = cartAdapter.getInitialState({
      cartStatus: 'ready',
      error: undefined,
    });

    expect(cartReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchCarts', () => {
    const cartItem: ICartItem = {
      id: 1,
      description: 'The Picture of Dorian Gray ',
      cost: 9.99,
    };

    let state = cartReducer(undefined, checkoutCart.pending('', [cartItem]));

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'pending',
        error: undefined,
      })
    );

    state = cartReducer(state, checkoutCart.fulfilled({ order: '123' }, 'null', [cartItem]));

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'ordered',
        error: undefined,
        order: '123',
      })
    );

    state = cartReducer(state, checkoutCart.rejected(new Error('Uh oh'), 'null', [cartItem]));

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'error',
        error: 'Uh oh',
      })
    );
  });
});
