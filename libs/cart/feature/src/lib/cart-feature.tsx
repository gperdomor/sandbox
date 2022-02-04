import styled from 'styled-components';
import { Button } from '@acme/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartActions,
  selectCartItems,
  selecteCartStatus,
  selectOrderNumber,
  selectTotal,
  checkoutCart,
} from '@acme/cart/data-access';

const StyledCartFeature = styled.div`
  .item {
    display: flex;
    align-items: center;
    padding-bottom: 9px;
    margin-bottom: 9px;
    border-bottom: 1px #ccc solid;
  }
  .description {
    flex: 1;
  }
  .cost {
    width: 10%;
  }
  .action {
    width: 10%;
  }
`;

export const CartFeature = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const status = useSelector(selecteCartStatus);
  const order = useSelector(selectOrderNumber);
  const total = useSelector(selectTotal);
  const cartIsEmpty = cartItems.length === 0;
  return (
    <StyledCartFeature>
      <h1>My Cart</h1>
      {order ? (
        <p>
          Thank you for ordering. Your order number is <strong>#{order}</strong>.
        </p>
      ) : (
        <>
          {cartIsEmpty ? <p>Your cart is empty</p> : null}
          <div>
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <span className="description">{item.description}</span>
                <span className="cost">${item.cost.toFixed(2)}</span>
                <span className="action">
                  <Button onClick={() => dispatch(cartActions.remove(item.id))}>Remove</Button>
                </span>
              </div>
            ))}
          </div>
          <p>Total: ${total.toFixed(2)}</p>{' '}
          <Button disabled={cartIsEmpty || status !== 'ready'} onClick={() => dispatch(checkoutCart(cartItems))}>
            Checkout
          </Button>
        </>
      )}
    </StyledCartFeature>
  );
};

export default CartFeature;
