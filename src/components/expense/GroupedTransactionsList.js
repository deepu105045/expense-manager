import MonthYearPicker from "../../support/UI/MonthYearPicker";

const GroupedTransactionsList = (props) => {
    const monthYearHandler = (event) => {
        props.onDateChange(event)
    }
    return (
        <div className="container mt-2">
            <h3>{props.title}</h3>
            <ul className="list-group ">
                <MonthYearPicker onSelect={monthYearHandler} />

                {props.data.length ? (
                    props.data.map((item) => (
                        <li
                            key={item.category}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span >{item.category}</span>
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

export default GroupedTransactionsList