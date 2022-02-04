import { render } from '@testing-library/react';

import NavigationItem from './navigation-item';

describe('NavigationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationItem />);
    expect(baseElement).toBeTruthy();
  });
});
