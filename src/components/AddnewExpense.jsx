import { useState } from "react";
import Editmodal from "./Editmodal";
export default function AddnewExpense(props2) {
  console.log(props2);
   const [editState,setEdit] = useState(false)
   function changeEditstate() {
      setEdit(!editState)
   }
  return (
    
    <div className="Expenses">
      <p>{props2.amount}</p>
      <p>{props2.ExpenseClass}</p>
      <p>{props2.Date}</p>
      <button onClick={e=>{
            props2.deleteExpense(props2.index)
        }} >-</button>
      <button onClick={
        ()=>{
          setEdit(!editState)
          console.log(editState)
        }
      }>edit</button>
      <Editmodal editstate = {editState} {...props2} changeEditstate = {changeEditstate}/>
    </div>
  );
}
