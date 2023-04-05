/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Expense Manager</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                        </ul>
                        <button type="button" className="btn btn-outline-success">Logout</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header