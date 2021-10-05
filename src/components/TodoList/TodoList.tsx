import React, { useState, useEffect } from "react"; // eslint-disable-line


type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  loading: boolean;
  todos: Array<Todo>;
  error: Error | null;
};

const defaultState: State = {
  loading: false,
  todos: [],
  error: null,
};

function MyComponent(): JSX.Element {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const fetchTodos = async () => {
      setState({
        ...state,
        loading: true,
      });

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        console.log(response)
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const data = await response.json();
        setState({
          ...state,
          loading: false,
          todos: data,
        });
      } catch (err) {
        console.log(err);
        setState({
          ...state,
          loading: false,
          error: err as Error,
        });
      }
    };
    fetchTodos();
  }, []); // eslint-disable-line

  const { loading, error, todos } = state;

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
