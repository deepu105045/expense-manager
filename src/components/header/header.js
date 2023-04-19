import { DISPLAY_NAME } from "../../support/Constants";

const Header = props => {
    let displayText;

    const handleLogout = () =>{
        localStorage.removeItem(DISPLAY_NAME)
    }

    const isLoggedIn = props.displayNam!=null && props.displayName.length > 0 ? true : false;
    if (isLoggedIn) {
        displayText = <div>
                        <button className="btn btn-outline-success">{props.displayName}</button>
                        <button onClick={handleLogout} type="button" className="btn btn-outline-success">Log out</button>
                    </div>
    } else {
        displayText =  <button type="button" className="btn btn-outline-success">Log in</button>

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1 className="navbar-brand" >{props.title}</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                        </ul>

                        {displayText}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header