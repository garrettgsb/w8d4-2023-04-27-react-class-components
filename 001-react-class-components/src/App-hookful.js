import './App.css';
import { useState, useEffect } from 'react';
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
  { price: 18, label: 'A second, smaller burger' },
];

function App() {
  const [total, setTotal] = useState(0);
  const [freebies, setFreebies] = useState([])

  useEffect(() => setFreebies(availableFreebies.filter(f => f.price <= total)), [total]);

  const addToOrder = (price) => { setTotal(total => total + price) }
  return (
    <main className="app">
      <h1>Burger</h1>
      { ingredients.map(({ label, price }) => <Ingredient label={label} price={price} onToggle={addToOrder} />) }
      <footer>
        <h2><strong>Total:</strong> ${total.toFixed(2)}</h2>
        { Boolean(freebies.length) && <div className='freebies'>
            <h3>Your order also qualifies for the following freebies-- Cool!</h3>
            <ul>{freebies.map(freebie => <li><strong>{freebie.label}</strong> (spend more than ${freebie.price})</li>)}</ul>
          </div>
        }
      </footer>
    </main>
  );
}

export default App;
