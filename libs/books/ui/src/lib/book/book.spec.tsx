import { IBook } from '@acme/shared-models';
import { render } from '@testing-library/react';
import Book from './book';

const book: IBook = {
  id: 1,
  author: 'author',
  price: 9,
  title: 'Dummy Tittle',
  rating: 4,
};

describe('Book', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement } = render(<Book book={book} onAdd={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
});
