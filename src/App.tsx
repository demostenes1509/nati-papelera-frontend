import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './components/Containers/Admin/Admin';
import CategoriesList from './components/Containers/Admin/Category/CategoriesList';
import MercadoLibreCategoriesFileUpload from './components/Containers/Admin/Category/MercadoLibreCategoriesFileUpload';
import Configuration from './components/Containers/Admin/configuration/Configuration';
import ProviderFileUpload from './components/Containers/Admin/Providers/ProviderFileUpload';
import Authentication from './components/Containers/Authentication/Authentication';
import sessionActions from './components/Containers/Authentication/SessionActions';
import { getToken, userLoggedIn } from './components/Containers/Authentication/SessionApi';
import MainContent from './components/Containers/MainContent/MainContent';
import DataProtection from './components/Containers/OtherContents/DataProtection';
import Product from './components/Containers/Product/Product';
import ProductsList from './components/Containers/ProductsList/ProductsList';
import SideBar from './components/Containers/SideBar/SideBar';
import Layout from './components/layouts/Layout';

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
        <Layout exact path="/admin" components={[Admin]} />
        <Layout exact path="/admin/categories/management" components={[CategoriesList]} />
        <Layout exact path="/admin/configuration" components={[Configuration]} />
        <Layout exact path="/admin/categories/fileupload" components={[MercadoLibreCategoriesFileUpload]} />
        <Layout exact path="/admin/providers/fileupload" components={[ProviderFileUpload]} />
        <Layout exact path="/other/dataprotection" components={[SideBar, DataProtection]} />
        <Layout exact path="/:category" components={[SideBar, ProductsList]} />
        <Layout exact path="/:category/:product" components={[SideBar, Product]} />
        {/* 
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
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
