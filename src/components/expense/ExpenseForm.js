import React, { useState } from "react";
import Button from "../../UI/Button";
import CalendarInput from "../../UI/CalendarInput";
import InputField from "../../UI/InputField";

const ExpenseForm = (props) => {
    
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString().substring(0,10));
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [category,setCategory] = useState("");

  const expenseDateHandler = event => {
    setExpenseDate(event.target.value)
  }

  const handleNotes = event =>{
    setNotes(event.target.value)
  }

  const handleCategory = event =>{
    setCategory(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    let expense ={id,expenseDate,category,amount,notes}
    props.onAddExpense(expense)
    setExpenseDate(new Date().toISOString().substring(0,10))
    setAmount('')
    setNotes('')
    setCategory('')

  };

  return (
    <div className="container mt-3">
      <h1>ADD Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <div className="d-grid gap-2">
                Date : <CalendarInput value = {expenseDate} className="form-control" onChange={expenseDateHandler}/>
                Category : <InputField value ={category} className="form-control" onChange ={handleCategory}/>
                Amount : <InputField value = {amount} type="number" className="form-control" onChange={e=> setAmount(e.target.value)}/>
                Notes : <InputField value = {notes} type = "text" className="form-control" onChange = {handleNotes}/>
                <Button type="submit" text ="Add expense" className="btn btn-lg btn-primary"/>
            </div>
        </div>
      </form>
    </div>
  );
};


export default ExpenseForm