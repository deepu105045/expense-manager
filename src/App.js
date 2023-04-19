import { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/expense/ExpenseForm';
import ExpenseList from './components/expense/ExpenseList'
import Header from './components/header/header';
import LineChart from './components/charts/LineChart';
import { addDocument, getDocuments, updateDocument, deleteDocument } from './support/api/firebase'
import { EXPENSE_COLLECTION, CREATED_TIMESTAMP, DESC } from './support/Constants';
import LoginPage from './components/Login/LoginPage';
import { DISPLAY_NAME } from './support/Constants';

export const chartData = [
  ["Month", "Expense", "Income", "Investment"],
  ["2004", 1000, 400, 500],
  ["2005", 1170, 460, 700],
  ["2006", 660, 1120, 1200],
  ["2007", 1030, 540, 2000],
];

function App() {
  const [data, setData] = useState([]);
  const [newExpenseFlag, setNewExpensesFlag] = useState(false);
  const displayName = localStorage.getItem(DISPLAY_NAME);

  useEffect(() => {
    getDocuments(EXPENSE_COLLECTION, CREATED_TIMESTAMP, DESC).then(snap => {
      let expenses = [];
      snap.forEach((doc) => {
        expenses.push({ ...doc.data(), id: doc.id })
      })
      setData(expenses)
      setNewExpensesFlag(false)
    }).catch((error) => {
      console.log(error)
    })
  }, [newExpenseFlag])

  const addExpense = (e) => {
    setNewExpensesFlag(true)
    addDocument(EXPENSE_COLLECTION, e)
      .then(() => {
        console.log('Document added successfully!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }


  return (
    <div>
      <Header title="Expense Manager" displayName = {displayName}/>

      <div className="container">
        <div className="row" >
          <div className="col-sm-4">
            <LoginPage />
          </div>
          <div className="col-sm-4">
            <ExpenseForm onAddExpense={addExpense} />
          </div>

          <div className="col-sm-4 ">
            <ExpenseList data={data} />
          </div>

        </div>

        <div className='row'>
          <div className="col-sm-6">
            <LineChart data={chartData} />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
