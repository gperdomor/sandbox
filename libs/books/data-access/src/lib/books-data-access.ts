import { IBook } from '@acme/shared-models';

export async function getBooks(): Promise<IBook[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}
