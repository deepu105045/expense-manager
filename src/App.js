import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseData from './data/ExpenseData';

function App() {
  const [data, setData] =useState(ExpenseData);
  const addExpense = (e) =>{
    setData(prev =>{
      return [e,...prev]
    });
  }
  return (
    <div>
      <ExpenseForm onAddExpense={addExpense}/>
      <ExpenseList data ={data}/>
    </div>
  );
}

export default App;
