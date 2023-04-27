import './App.css';
import React from 'react';
import Ingredient from './Ingredient-stateless';

const ingredients = [
  { label: 'Beef patty', price: 4.50 },
  { label: 'Chicken patty', price: 4.00 },
  { label: 'Chickpea patty', price: 4.00 },
  { label: 'Lettuce', price: 0.25 },
  { label: 'Tomato', price: 0.75 },
  { label: 'Cheddar Cheese', price: 2.50 },
  { label: 'Bacon', price: 3.00 },
];

const availableFreebies = [
  { price: 10, label: 'Medium Soda' },
  { price: 14, label: 'Medium Fries' },
  { price: 16, label: 'Pint o\' Ranch'},
  { price: 18, label: 'A second, smaller burger' },
];

class App extends React.Component {
  state = { total: 0, freebies: [] };

  constructor() {
    super();
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.total !== this.state.total) {
      this.setState(state => ({ ...state, freebies: availableFreebies.filter(f => f.price <= state.total) }));
    }
  }

  addToOrder(price) { this.setState(state => ({ ...state, total: state.total + price })) }

  render() {
    return (
      <main className="app">
        <h1>Burger</h1>
        { ingredients.map(({ label, price }) => <Ingredient label={label} price={price} onToggle={this.addToOrder} />) }
        <footer>
          <h2><strong>Total:</strong> ${this.state.total.toFixed(2)}</h2>
          { Boolean(this.state.freebies.length) && <div className='freebies'>
              <h3>Your order also qualifies for the following freebies-- Cool!</h3>
              <ul>{this.state.freebies.map(freebie => <li><strong>{freebie.label}</strong> (spend more than ${freebie.price})</li>)}</ul>
            </div>
          }
        </footer>
      </main>
    );
  }
}

export default App;
