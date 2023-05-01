import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { signInWithGoogle } from '../../support/api/firebase';
import { DISPLAY_NAME } from '../../support/Constants';

const GmailLogin = (props) => {
    const [username, setUsername] = useState('Guest');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleGoogleSign = () => {
        const displayName = localStorage.getItem(DISPLAY_NAME);
        if(displayName !=null && displayName.length> 1){
            setUsername(displayName)
            setIsLoggedIn(true)

        }else{
            signInWithGoogle().then((user) => {
                setIsLoggedIn(true)
                setUsername(user.displayName)
            });
        }
        
    }

    const handleLogout = () => {
        localStorage.removeItem(DISPLAY_NAME)
        setUsername()
        setIsLoggedIn(false)
    }

    const showLoginButton = <div>
                                <button className="btn btn-primary" onClick={handleGoogleSign}>
                                    <FaGoogle /> Login with Gmail
                                </button>
                            </div>

    const showLoggedInButton = 
                            <div>
                                <button type="button" className="btn btn-outline-success">Welcome, {username}</button>
                                <button onClick={handleLogout} type="button" className="btn btn-outline-success">Log out</button>
                            </div>
                            
    return (
        <div>
            {
                isLoggedIn ? showLoggedInButton : showLoginButton
            }
        </div>

        
    );
}

export default GmailLogin