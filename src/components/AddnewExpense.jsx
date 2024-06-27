export default function AddnewExpense(props2) {
  console.log(props2);

  return (
    <div className="Expenses">
      <p>{props2.amount}</p>
      <p>{props2.ExpenseClass}</p>
      <p>{props2.Date}</p>
      <button onClick={e=>{
            props2.deleteExpense(props2.index)
        }} >-</button>
      
    </div>
  );
}
