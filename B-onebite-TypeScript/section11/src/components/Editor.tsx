import { useContext, useRef, useState } from "react"
import { TodoDispatchContext, useTodoDispatch } from "../App"

interface Props {}

export default function Editor(){
  const dispatch = useTodoDispatch()
  const [text, setText] = useState('')
  
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onClickAdd = ()=>{
    dispatch.onClickAdd(text)
    setText('')
  }

  return (
    <>
      <input value={text} onChange={onChangeInput}/>
      <button onClick={onClickAdd}>추가</button>
     </>
  )
}