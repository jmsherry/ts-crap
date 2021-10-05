import React from 'react';

type MyComponentProps = {
  name: string;
  age: number;
}

const MyComponent = ({name='', age}:MyComponentProps) => {
  return <p>{name}: Age in dog years = {age * 7}</p>
};

export default MyComponent;