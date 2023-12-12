import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './type';

type Action = {
  type: "CREATE",
  data: {
    id:number, 
    content:string
  }
}|{ 
  type:"DELETE",
  id: number
}

function reducer(state:Todo[], action:Action){
  switch(action.type) {
    case "CREATE" : {
      return [...state, action.data]
    }
    case "DELETE" : {
      return state.filter((it)=> it.id !== action.id)
    }
  }

}

function App() {
  const [todos, dispatch] = useReducer(reducer,[])
  const idRef = useRef(0)

  useEffect(()=>{
    console.log(todos)
  },[todos])

  const onClickAdd = (text:string) => {
    dispatch({
      type:"CREATE",
      data: {
        id:idRef.current++,
        content: text
      }
    })
  }

  const onClickDelete = (id:number) => {
    dispatch({
      type:"DELETE",
      id: id
    })
  }


  return (
    <div className="App">
        <h1>TODO</h1>
        <Editor onClickAdd={onClickAdd}/>
        <div>
          {todos.map((todo)=>( 
              <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete}/> 
           ))}
        </div>
    </div>
  );
}

export default App;
