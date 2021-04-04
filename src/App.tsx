import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import MainSideBar from './components/PageContainer/MainSideBar/MainSideBar';
import MainContent from './components/PageContainer/MainContent/MainContent';
import Authentication from './components/PageContainer/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" components={[MainSideBar, MainContent]} />
          <Layout exact path="/login" components={[Authentication]} />
          {/* 
          <Layout exact path="/search/:search" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category" components={[SideBar,MainContent]}/>
          <Layout exact path="/:category/crear-nuevo-producto" components={[SideBar,NewProduct]}/>
          <Layout exact path="/:category/:product" components={[SideBar,Product]}/> */}
        </Switch>
      </Router>

      // <section className="main-wrapper">
      //   <Header />
      //   <Error />
      //   <NavBar />
      //   <PageContainer />
      //   <Footer />
      // </section>
    );
  }
}

export default App;
