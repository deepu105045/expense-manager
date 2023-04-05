import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/expense/ExpenseForm';
import ExpenseList from './components/expense/ExpenseList'
import Header from './components/header/header';
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
      <Header/>
      <ExpenseForm onAddExpense={addExpense}/>
      <ExpenseList data ={data}/>
    </div>
  );
}

export default App;
