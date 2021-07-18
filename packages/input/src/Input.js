import React from 'react';

export default function Input({value = '', type = 'text', placeholder, onChange = () => console.log('changed')}) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
