import React, { Component } from "react";
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import PageContainer from "./components/PageContainer/PageContainer";

class App extends Component {
  render() {
    return (
      <section className="main-wrapper">
        <Header />
        <Error />
        <NavBar />
        <PageContainer />
        <Footer />
      </section>
    );
  }
}

export default App;
