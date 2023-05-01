import MonthYearPicker from "../../support/UI/MonthYearPicker";
const TransactionList = props => {
    const monthYearHandler = (event) => {
        props.onDateChange(event)
    }
    return (
        <div className="container mt-3">
            <h4>{props.title}</h4>
            <ul className="list-group ">
                <MonthYearPicker onSelect={monthYearHandler} />
                {props.data.length ? (
                    props.data.map((item) => (
                        <li
                            key={item.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span className="badge bg-primary rounded-pill">
                                {new Date(item.transactionDate.toDate()).toDateString()}
                            </span>
                            <label>{item.category}</label>
                            <span className="badge bg-primary rounded-pill">{item.amount}</span>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-center">No record found</li>
                )}
            </ul>
        </div>
    );


}

export default TransactionList