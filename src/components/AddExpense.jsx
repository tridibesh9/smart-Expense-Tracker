
import { useState } from "react";
import { useEffect } from "react";

export default function AddExpense(props) {
  const [input, setInputs] = useState({
    amount: "",
    ExpenseClass: "",
    Date: "",
  });
  const [buttonState,setbutton] = useState(true)
  
  function updateDetails(event) {
    const { name, value } = event.target;
    console.log(value);
    
    setInputs((prevValue) => {
      if (name === "amount") {
        return {
          amount: value,
          ExpenseClass: prevValue.ExpenseClass,
          Date: prevValue.Date,
        };
      } else if (name === "ExpenseClass") {
        return {
          amount: prevValue.amount,
          ExpenseClass: value,
          Date: prevValue.Date,
        };
      } else if (name === "Date") {
        return {
          amount: prevValue.amount,
          ExpenseClass: prevValue.ExpenseClass,
          Date: value,
        };
      }
    });
  }
  useEffect(()=>{
    if(input.amount !== "" && input.ExpenseClass !== "" && input.Date!=="")
      setbutton(false)
    else
      setbutton(true)
  },[input])
  function clearinput(){
    const newinput = {amount: "",
      ExpenseClass: "",
      Date: ""}
      setInputs(newinput)
  }
  
  return (
    <div className="AddExpense" id="addExpense">
      <div className="Heading">ADD YOUR EXPENSES HERE</div>
      <input
        type="text"
        placeholder="Amount"
        name="amount"
        onChange={updateDetails}
        value={input.amount}
      />
      <label for="ExpenseClass">Choose Type of Expense:</label>

      <select name="ExpenseClass" id="List" onChange={updateDetails} value={input.ExpenseClass} >
        <option value="Grocery">Grocery</option>
        <option value="Tech Purchase">Tech Purchase</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
      </select>
      <input type="date" name="Date" id="" onChange={updateDetails} value={input.Date}/>
      <button type="submit" disabled= {buttonState} onClick={()=>{
        console.log(input)
        props.addList(input)
        clearinput();

      }}>
        Add Expense
      </button>
    </div>
  );
}
