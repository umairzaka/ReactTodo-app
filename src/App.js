import React,{useState, useEffect} from 'react';

// import Fire from './Fire'
import './App.css';
import Todo from './Todo'


function App() {
  const [todos,SetTodos]=useState(['hello this is umair ','hello is the demo line '])
  const [input,SetInput]=useState('')

  // useEffect(() => {
   
    
  // }, [])


  const onAdd = (e) => {
    e.preventDefault();
  // console.log(input)

  SetTodos([...todos, input])
  SetInput('')
   
  }
  

  return (
    <div className="App">
        <h1>Hello this demo heading </h1>
        <form>
        <input type='text'  value={input} onChange={(Event) => SetInput(Event.target.value)}/>
        <button disabled={!input} type='submit' onClick={onAdd}>CLick</button>
        </form>
        <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
          ))}
          
        </ul>
    </div>
  );
}

export default App;
