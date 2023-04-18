const ExpenseList = props => {

    if(props.data.length === 0){
        return (
            <div className="container mt-3">
                <h3>Recent Transactions</h3>
                <h2>No Record(s) found!!!</h2>
                
            </div>
        );

    }else{
        return (
            <div className="container mt-3">
                <h3>Recent Transactions</h3>
                {/* <ul className="list-group " style={{ height: '450px', overflow: 'auto' }}> */}
                <ul className="list-group " >

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

}

export default ExpenseList