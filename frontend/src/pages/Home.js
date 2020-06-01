import React, { Component } from "react";
import Navbar from "../components/Navbar";
import TagContainer from "../containers/TagContainer";
import Mail from "../components/Mail";
import FooterContainer from "../containers/FooterContainer";
import GameListContainer from "../containers/GameListContainer";
import MainContainer from "../containers/MainContainer";
import PaginationContainer from '../containers/PaginationContainer'
import "../css/bootstrap4-neon-glow.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>
        <MainContainer></MainContainer>
        <TagContainer></TagContainer>
        <GameListContainer></GameListContainer>
        <Mail></Mail>
        <PaginationContainer></PaginationContainer>
        <FooterContainer></FooterContainer> 
      </div>
    );
  }
}

export default Home;



























