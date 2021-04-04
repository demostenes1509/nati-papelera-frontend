import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import NavBar from '../NavBar/NavBar';

/* eslint-disable  @typescript-eslint/no-explicit-any */

interface LayoutProps extends RouteProps {
  components: any;
  exact: boolean;
  path: string;
}

const Layout = ({ components, ...rest }: LayoutProps) => (
  <Route
    {...rest}
    render={() => (
      <section className="main-wrapper">
        <Header />
        <Error />
        <NavBar />
        <section className="page-container clear-fix">
          {components.map((Component: any, i: number) => (
            <Component key={i} />
          ))}
        </section>
        <Footer />
      </section>
    )}
  />
);
/* eslint-enable  @typescript-eslint/no-explicit-any */

export default Layout;
