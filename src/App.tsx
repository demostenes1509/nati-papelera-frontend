import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import SideBar from './components/Containers/SideBar/SideBar';
import MainContent from './components/Containers/MainContent/MainContent';
import Authentication from './components/Containers/Authentication/Authentication';
import CategoryContent from './components/Containers/CategoryContent/CategoryContent';
import ProductContent from './components/Containers/ProductContent/ProductContent';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" components={[SideBar, MainContent]} />
          <Layout exact path="/login" components={[Authentication]} />
          <Layout exact path="/:category" components={[SideBar, CategoryContent]} />
          <Layout exact path="/:category/:product" components={[SideBar, ProductContent]} />
          {/* 
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category/crear-nuevo-producto" components={[SideBar,NewProduct]}/>
          */}
        </Switch>
      </Router>
    );
  }
}

export default App;
