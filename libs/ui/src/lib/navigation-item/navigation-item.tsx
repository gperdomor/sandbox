import { LiHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledNavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationItem = (props: LiHTMLAttributes<HTMLLIElement>) => {
  return <StyledNavigationItem>{props.children}</StyledNavigationItem>;
};

export default NavigationItem;
