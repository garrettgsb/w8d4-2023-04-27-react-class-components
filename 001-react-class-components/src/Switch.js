const Switch = ({ onChange }) => <div className='switch'>
  <label>
    <input type='checkbox' onChange={onChange} />
    <span></span>
  </label>
</div>

export default Switch;
