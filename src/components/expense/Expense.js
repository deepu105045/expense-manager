import { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm'
import Transactions from './Transactions'
import GroupedTransactions from './GroupedTransactions';

const Expense = () => {

    const [newExpenseFlag, setNewExpensesFlag] = useState('');
    const addExpense = (e) => {
        setNewExpensesFlag(crypto.randomUUID())
    }
    return (
        <div>
            <div className="container">
                <div className="row" >

                    <div className="col-sm-4">
                        <ExpenseForm onAddExpense={addExpense} />
                    </div>
                    <div className="col-sm-4 ">
                        <Transactions  newExpenseFlag={newExpenseFlag}/>
                    </div>

                    <div className="col-sm-4">
                        <GroupedTransactions newExpenseFlag={newExpenseFlag}/>
                    </div>
                   

                </div>
            </div>

        </div>
    )
}

export default Expense