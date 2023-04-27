import Switch from './Switch';

const Ingredient = ({ label, price, onToggle }) =>
  <div className='ingredient'>
    <Switch onChange={(e) => {
      const delta = e.target.checked ? 1 : -1;
      onToggle?.(price * delta)
  }} />
    <span className='label'>{label}</span>
    <span>${price?.toFixed(2)}</span>
  </div>
export default Ingredient
