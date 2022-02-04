import { ICart } from '@acme/shared-models';

export async function checkout(cart: ICart): Promise<{ order: string }> {
  const data = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  return data.json();
}
