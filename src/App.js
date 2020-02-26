import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import items from "./items.json";
let hiScore;


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
    clicked: false
  };


  //handleIncrement increments this.state.count by 1
  handleClick = id => {
    //we always use the setState method to update a component's state
    if (items.clicked) {
      alert("item already clicked you lose");
      this.setState({ count: 0 });
      this.setState({ clicked: false });
    } else {
    this.setState({ count: this.state.count + 1 });
    this.setState({ clicked: true });
    hiScore = this.state.count;
    shuffleArray(items);
    };


    // this.setState({ clicked: true});
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        <Header />

        <Main />
        <p>
        id = {this.id} <br />
        Score = {this.state.count}<br />
        Hi Score = {hiScore}</p>

        {this.state.items.map(item => (

          <Card
          handleClick={this.handleClick}
            id={item.id}
            key={item.id}
            clicked={item.clicked}
            name={item.name}
            image={item.image}
          />
        ))}
        <Footer />
     </Wrapper>
    );
  }
}

export default App;
