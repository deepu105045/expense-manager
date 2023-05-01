import { useState, useEffect } from 'react';
import { groupByCategory } from '../../support/api/firebase';
import GroupedTransactionsList from './GroupedTransactionsList';
import { getMonthBegining, getMonthEnd } from "../../support/Constants";

const GroupedTransactions = (props)=>{
    const [aggregateData,setAggregateData]= useState([]);
    let todayStart = getMonthBegining();
    let todayEnd = getMonthEnd();

    const [startDate, setStartDate] = useState(todayStart)
    const [endDate, setEndDate] = useState(todayEnd)

    useEffect(() => {
        groupByCategory(startDate,endDate).then(data =>{
            const myArray = [];
            for (const key in data) {
                myArray.push({"category":key,"amount":data[key]});
              }
            setAggregateData(myArray)
        }).catch((error)=>{
            console.log(error)
        })
        
    }, [endDate, props.newExpenseFlag, startDate])

    const dateChangeHandler = (event) => {
        const startDate = getMonthBegining(event)
        const endDate = getMonthEnd(event)
        setStartDate(startDate)
        setEndDate(endDate)
    }
    return(
        <div>
            <GroupedTransactionsList title= "Grouped transactions" data={aggregateData} onDateChange={dateChangeHandler}/>
        </div>
    )
}

export default GroupedTransactions