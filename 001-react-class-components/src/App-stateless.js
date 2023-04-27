import './App.css';
import React from 'react';
import Ingredient from './Ingredient-stateless';


class App extends React.Component {
  state = {
    total: 0,
  }

  onToggle = (price) => {
    this.setState(current => ({ total: current.total + price }));
  }

  render() {
    return (
      <main className="app">
        <h1>Burger</h1>
        <Ingredient label='Beef patty' price={4.50} onToggle={this.onToggle} />
        <Ingredient label='Chicken patty' price={4.00} onToggle={this.onToggle} />
        <Ingredient label='Chickpea patty' price={4.00} onToggle={this.onToggle} />
        <Ingredient label='Lettuce' price={0.25} onToggle={this.onToggle} />
        <Ingredient label='Tomato' price={0.75} onToggle={this.onToggle} />
        <Ingredient label='Cheddar Cheese' price={2.50} onToggle={this.onToggle} />
        <Ingredient label='Bacon' price={3.00} onToggle={this.onToggle} />
        <footer>
          <h2><strong>Total:</strong> ${this.state.total.toFixed(2)}</h2>
        </footer>
      </main>
    );
  }
}

export default App;
