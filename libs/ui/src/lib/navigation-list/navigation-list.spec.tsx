import { render } from '@testing-library/react';

import NavigationList from './navigation-list';

describe('NavigationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationList />);
    expect(baseElement).toBeTruthy();
  });
});
