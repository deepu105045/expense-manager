import React, { useState , useEffect} from "react";
import Button from "../../support/UI/Button";
import CalendarInput from "../../support/UI/CalendarInput";
import InputField from "../../support/UI/InputField";

const ExpenseForm = (props) => {
 
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString().substring(0,10));
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [category,setCategory] = useState("");
  const [formInvalid, setFormInvalid] = useState(true);    

  const validateForm = ()=>{
    if((amount !=null && amount.length >0) && (expenseDate !=null && expenseDate.length >0) && 
       (category !=null && category.length >0) ){
        setFormInvalid(false);
    }else{
      setFormInvalid(true);
    }
  }

  const expenseDateHandler = event => {
    setExpenseDate( event.target.value)
    validateForm()
  }

  const handleNotes = event =>{
    setNotes(event.target.value)
  }

  const handleCategory = event =>{
    setCategory(event.target.value)
    validateForm()
  }

  const handleAmount = event => {
    setAmount(event.target.value)
    validateForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const id = Date.now();
    let expense ={id,expenseDate,category,amount,notes}
    props.onAddExpense(expense)
    // setExpenseDate(new Date().toISOString().substring(0,10))
    setAmount('')
    setNotes('')
    setCategory('')
    setFormInvalid(true);


  };

  return (
    <div className="container mt-3">
      <h4>ADD Expense</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <div className="d-grid gap-2">
                Date : <CalendarInput value = {expenseDate} className="form-control" onChange={expenseDateHandler}/>
                Category : <InputField value ={category} className="form-control" onChange ={handleCategory}/>
                Amount : <InputField value = {amount} type="number" className="form-control" onChange={handleAmount}/>
                Notes : <InputField value = {notes} type = "text" className="form-control" onChange = {handleNotes}/>
                <Button type="submit" disabled= {formInvalid} text ="Add expense" className="btn btn-lg btn-primary"/>
            </div>
        </div>
      </form>

      
    </div>
  );
};


export default ExpenseForm