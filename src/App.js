import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
// import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import items from "./items.json";

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
    this.setState({ count: this.state.count + 1 });
    // this.setState({ clicked: true});
  };

  // removeItem = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const items = this.state.items.filter(item => item.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ items });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />        Count = {this.state.count} 
        {/* <Header /> */}
        <Main />

        {this.state.items.map(item => (
          <Card
          handleClick={this.handleClick}
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
