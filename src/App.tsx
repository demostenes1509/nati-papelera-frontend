import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import SideBar from './components/Containers/SideBar/SideBar';
import MainContent from './components/Containers/MainContent/MainContent';
import Authentication from './components/Containers/Authentication/Authentication';
import CategoryContent from './components/Containers/CategoryContent/CategoryContent';
import ProviderContent from './components/Containers/ProviderContent/ProviderContent';
import ProductContent from './components/Containers/ProductContent/ProductContent';
import { getToken } from './components/Containers/Authentication/SessionApi';
import sessionActions from './components/Containers/Authentication/SessionActions';
import { userLoggedIn } from './components/Containers/Authentication/SessionApi';
import { connect } from 'react-redux';

interface IPathProps {
  loggedIn(token: string);
}

interface IStateProps {
  isLoggedIn: boolean;
}

const App = ({ isLoggedIn, loggedIn }: IStateProps & IPathProps) => {
  useEffect(() => {
    const token = getToken();
    if (token) {
      loggedIn(userLoggedIn(token));
    }
  }, []);

  if (isLoggedIn === null) return <></>;

  return (
    <Router>
      <Switch>
        <Layout exact path="/" components={[SideBar, MainContent]} />
        <Layout exact path="/login" components={[Authentication]} />
        <Layout exact path="/providers/:provider" components={[SideBar, ProviderContent]} />
        <Layout exact path="/:category" components={[SideBar, CategoryContent]} />
        <Layout exact path="/:category/:product" components={[SideBar, ProductContent]} />
        {/* 
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category/crear-nuevo-producto" components={[SideBar,NewProduct]}/>
          */}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state): IStateProps => ({
  isLoggedIn: state.sessionReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch): IPathProps => ({
  loggedIn: (token) => dispatch(sessionActions.loggedIn(token)),
});

export default connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(App);
