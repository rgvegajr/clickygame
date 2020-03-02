import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import items from "./items.json";
import "./App.css";

let hiScore = 0;
let score = 0;
let name = "";
let clickedArray = [];
let notification = "Click on a fighter to ID..but only 1 time each!";
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
  // Setting this.state to the items json array count
  state = { 
    count: 0,
    items: items
  };

  resetGame = (items) => {
    score = 0;
    name = "";
    clickedArray = [];
    notification = "Click on a fighter to ID..but only 1 time each!";
    // this.setState({items: items});
    this.forceUpdate();
  }

  //handleIncrement increments this.state.count by 1
  handleClick = (id,name) => {
    console.log("clicked id = " + id);
    console.log("clicked fighter =  " + name);
    console.log(items);
    console.log(clickedArray);
    console.log("======================================="); 
      if (clickedArray.includes(name)) {
        console.log("clicked is true");
        score = 0;
        notification = "Sorry, you already clicked that one! Click EJECT to play again.";
        this.setState({ count: 0});
      } else {
        console.log("clicked is false");
        notification = "ID: "+ name; 
        clickedArray.push(name);       
        this.setState({ count: this.state.count + 1 });
        score = this.state.count +1;
        hiScore = score;
        console.log("score = " + score);
        console.log("hi score = " + hiScore);
        console.log("=======================================");
        console.log(items);
        console.log(clickedArray);
        shuffleArray(items);
    };
  };

  // Map over this.state.items and render a Card component for each item object
  render() {
    return (
      <Wrapper>
        <nav className="navbar navbar-expand-sm">
          <span className="navbar-brand">US Fighter Recognition Game!</span>
          <span className="navbar-text">Score = {score}   //  Hi Score = {hiScore}</span>
          <button type="button" className="btn btn-warning clicked" onClick={() => this.resetGame(this.items)}>EJECT!</button>
          <span className="navbar-text" onClick={() => this.resetGame(this.items)}><em>{notification}{name}</em></span>
        </nav> 
        <div className="game-space">
         {items.map(item => (
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