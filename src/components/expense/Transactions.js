import TransactionList from "./TransactionList"
import { useState, useEffect } from 'react';
import { filterByDates } from '../../support/api/firebase';
import { getMonthBegining, getMonthEnd } from "../../support/Constants";

const Transactions = (props) => {
    const [data, setData] = useState([]);
    let todayStart = getMonthBegining();
    let todayEnd = getMonthEnd();

    const [startDate, setStartDate] = useState(todayStart)
    const [endDate, setEndDate] = useState(todayEnd)

    useEffect(() => {
        filterByDates(startDate, endDate).then(data => {
            setData(data)
        }).catch(error => {
            console.log('Error in getting data from firestore ' + error)
        })

    }, [endDate, props.newExpenseFlag, startDate])

    const dateChangeHandler = (event) => {
        const startDate = getMonthBegining(event)
        const endDate = getMonthEnd(event)
        setStartDate(startDate)
        setEndDate(endDate)
    }

    return (
        <div>
            <TransactionList title="Recent Transaction(s)" data={data} onDateChange={dateChangeHandler} />
        </div>
    )
}

export default Transactions