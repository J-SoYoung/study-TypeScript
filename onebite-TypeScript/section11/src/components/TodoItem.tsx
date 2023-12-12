import { useTodoDispatch } from "../App";
import { Todo } from "../type";

interface Props extends Todo {}

export default function TodoItem(props:Props){
  const dispatch = useTodoDispatch()

  const onClickDelete=()=>{
    dispatch.onClickDelete(props.id)
  }
  
  return(
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}