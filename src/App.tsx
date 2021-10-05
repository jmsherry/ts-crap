import React from 'react';
import MyComponent from './components/MyComponent/MyComponent';
import TodoList from './components/TodoList/TodoList';
import TrafficLight from './components/TrafficLight/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight startLight={'amber'} />
      <MyComponent name="James" age={43} />
      <TodoList />
    </div>
  );
}

export default App;
