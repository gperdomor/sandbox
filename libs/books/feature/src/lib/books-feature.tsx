import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { cartActions } from '@acme/cart/data-access';
import { IBook } from '@acme/shared-models';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books
        books={books}
        onAdd={(book) =>
          dispatch(
            cartActions.add({
              id: book.id,
              description: book.title,
              cost: book.price,
            })
          )
        }
      />
    </>
  );
};
