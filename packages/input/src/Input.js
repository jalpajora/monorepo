import React from 'react';

const Input = ({value = '', type = 'text', placeholder, onChange = () => console.log('changed')}) => (
  <input onChange={onChange} placeholder={placeholder} type={type} value={value} />
);

export default Input;
