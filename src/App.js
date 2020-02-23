import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import items from "./items.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    items
  };

  removeItem = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const items = this.state.items.filter(item => item.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ items });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav>US Fighter Aircraft Recognition Click Game</Nav>
        <Header />
        <Main />
        {this.state.items.map(item => (
          <Card
            removeItem={this.removeItem}
            id={item.id}
            key={item.id}
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
