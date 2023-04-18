import { FaGoogle } from 'react-icons/fa';
import './LoginPage.css'
import { signInWithGoogle } from '../../support/api/firebase';
const LoginPage = (props) => {
  const handleGoogleSign = () =>{
    signInWithGoogle()
  }


  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Login</div>
          <div className="card-body  text-center">
            <button className="btn btn-primary" onClick={handleGoogleSign}>
              <FaGoogle /> Login with Gmail
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};


export default LoginPage;
