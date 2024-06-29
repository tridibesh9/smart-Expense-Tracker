import { useState } from "react";
import Editmodal from "./Editmodal";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function AddnewExpense(props2) {
  console.log(props2);
   const [editState,setEdit] = useState(false)
   function changeEditstate() {
      setEdit(!editState)
   }
  return (
    <div className="Expensebar">
    <div className="Expenses">
      <p>{props2.amount}</p>
      <p>{props2.ExpenseClass}</p>
      <p>{props2.Date}</p>
      <button onClick={e=>{
            props2.deleteExpense(props2.index)
            changeEditstate()
        }} ><MdDelete /></button>
      <button onClick={
        ()=>{
          setEdit(!editState)
          console.log(editState)
        }
      }><MdOutlineEdit /></button>
      </div>
      <Editmodal editstate = {editState} {...props2} changeEditstate = {changeEditstate}/>
    </div>
  );
}
