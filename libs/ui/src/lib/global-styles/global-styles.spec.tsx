import { render } from '@testing-library/react';

import GlobalStyles from './global-styles';

describe('GlobalStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalStyles />);
    expect(baseElement).toBeTruthy();
  });
});
