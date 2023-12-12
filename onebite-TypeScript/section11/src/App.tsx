import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

interface Todo{
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const idRef = useRef(0)

  useEffect(()=>{
    console.log(todos)
  },[todos])

  const onClickAdd = (text:string) => {
    setTodos([
      ...todos,
      ({
        id:idRef.current++,
        content: text
      })
    ])
  }

  return (
    <div className="App">
        <h1>TODO</h1>
        <Editor onClickAdd={onClickAdd}/>
    </div>
  );
}

export default App;
