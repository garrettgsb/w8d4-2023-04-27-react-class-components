import React from 'react';
import Switch from './Switch';

class IngredientClassy extends React.Component {
  render() {
    const { label, price, onToggle } = this.props;
    return <div className='ingredient'>
      <Switch onChange={(e) => {
        const delta = e.target.checked ? 1 : -1;
        onToggle?.(price * delta)
    }} />
      <span className='label'>{label}</span>
      <span>${price?.toFixed(2)}</span>
    </div>
  }
}

export default IngredientClassy
