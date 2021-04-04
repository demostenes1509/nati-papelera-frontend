import React, { Component } from "react";
import MainSideBar from "./MainSideBar/MainSideBar";
import MainContent from "./MainContent/MainContent";

class PageContainer extends Component {
  render() {
    return (
      <section className="page-container clear-fix">
        {/* <Authentication /> */}
        <MainSideBar />
        <MainContent />
      </section>
    );
  }
}

export default PageContainer;
