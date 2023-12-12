import { useRef, useState } from "react"

interface Props {
  onClickAdd: (text:string)=> void
}

export default function Editor(props:Props){
  const [text, setText] = useState('')

  
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onClickAdd = ()=>{
    props.onClickAdd(text)
    setText('')
  }

  return (
    <>
      <input value={text} onChange={onChangeInput}/>
      <button onClick={onClickAdd}>추가</button>
     </>
  )
}