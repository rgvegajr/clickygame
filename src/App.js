import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
// import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer";
import items from "./items.json";
import "./App.css";

let hiScore = 0;
let score = 0;
let notification = "Click on a fighter to start!";
console.log("initial items array: ")
console.log(items);
console.log("=======================================");

function shuffleArray(items) {
  let i = items.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }
  return items;
}

class App extends Component {
  // Setting this.state.friends to the items json array
  state = {
    items: items,
    count: 0,
    // clicked: false
  };


  // handleInputChange = event => {
  //   const id = event.target.id;
  //   const clicked = event.target.clicked;
  //   this.setState({
  //     [id] :id,
  //     [clicked]: true
  //   });
  // };

  //handleIncrement increments this.state.count by 1
  handleClick = id => {
    // const items = this.state.items.filter(item => item.id !== id);
    console.log("clicked id = " + id);
    // this.setState({items});
    console.log(items);
    console.log("=======================================");
    //we always use the setState method to update a component's state
    // if (items.id.clicked === true) {
    //   alert("item already clicked you lose");
    //   this.setState({ count: 0 });
    //   this.setState({ clicked: false });
    // } else {

      console.log("pre if score = " + score);
      
      if (items[id].clicked === true) {
        score = 0;
        notification = "Sorry you lose, already clicked that one! Reload page to play again.";
        console.log("Already clicked, you lose!");
        this.setState({ count: 0, clicked: false });
      } else {
        items[id].clicked = true;  ///FIX HTIS
        console.log("updated items[" + (id) + "]");
        this.setState({ count: this.state.count + 1 });
        score = this.state.count +1;
        hiScore = this.state.count +1;
        console.log("score = " + score);
        console.log("hi score = " + hiScore);
        console.log("=======================================");
        // this.setState({items});
        shuffleArray(items);
    };
    // };
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>


        {/* <Nav /> */}
        {/* <Header /> */}
        <nav className="navbar">
        <span className="navbar-text">US Fighter Recognition Click Game!!</span>
        {/* <span className="navbar-text">{count}</span> */}
        <span className="navbar-text">{notification}</span>
        <span className="navbar-text"> Score = {score} Hi Score = {hiScore}</span>

      </nav>
 
 <div className="game-space">

        {/* <Main /> */}
        {this.state.items.map(item => (
        // {items.map(item => (
          <Card
            id={item.id}
            key={item.id}
            clicked={item.clicked}
            name={item.name}
            image={item.image}
            handleClick={this.handleClick}
          />
        ))}
    </div>

    <Footer />
    </Wrapper>

  


    );
  }
}

export default App;
