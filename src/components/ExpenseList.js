const ExpenseList = props => {
    return (
        <div className="container mt-3">
            <ul className="list-group">
                {props.data.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">{item.expenseDate}</span>
                        {item.category}
                        <span className="badge bg-primary rounded-pill">{item.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList