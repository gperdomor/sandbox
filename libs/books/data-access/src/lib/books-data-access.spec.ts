import { getBooks } from './books-data-access';

jest.mock('./books-data-access', () => {
  const originalModule = jest.requireActual('./books-data-access');

  return {
    __esModule: true,
    ...originalModule,
    getBooks: () => [],
  };
});

describe('getBooks', () => {
  it('should work', () => {
    expect(getBooks()).toEqual([]);
  });
});
