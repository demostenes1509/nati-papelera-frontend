import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Authentication from './components/Containers/Authentication/Authentication';
import sessionActions from './components/Containers/Authentication/SessionActions';
import { getToken, userLoggedIn } from './components/Containers/Authentication/SessionApi';
import CategoryContent from './components/Containers/CategoryContent/CategoryContent';
import MainContent from './components/Containers/MainContent/MainContent';
import ProductContent from './components/Containers/ProductContent/ProductContent';
import ProviderFileUpload from './components/Containers/ProviderContent/FileUpload/ProviderFileUpload';
import DataProtection from './components/Containers/OtherContents/DataProtection';
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
        <Layout exact path="/other/dataprotection" components={[SideBar, DataProtection]} />
        <Layout exact path="/providers/:provider/fileupload" components={[SideBar, ProviderFileUpload]} />
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
