import { BooksFeature } from '@acme/books/feature';
import { CartFeature } from '@acme/cart/feature';
import { GlobalStyles, Header, Main, NavigationItem, NavigationList } from '@acme/ui';
import { Link, Redirect, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </>
  );
};

export default App;
