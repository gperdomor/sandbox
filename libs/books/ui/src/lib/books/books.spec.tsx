import { render } from '@testing-library/react';
import Books from './books';

describe('Books', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement } = render(<Books books={[]} onAdd={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
});
