import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import "./Register.css"
function Register() {
  return(
    <>
    <Navbar/>
    <div className="register-page">
      <h1>Register page</h1>
      <form>
        <div>
          Name: <input type="text" placeholder="enter ur name"/>
        </div>
        <br/>
        <div>
          Email: <input type="text" placeholder="Enter your email"/>
        </div>
        <br/>
        <div>
          Password: <input type="password" placeholder="enter ur password"/>
        </div>
        <br/>
        <div>
          PhoneNumber: <input type="phonen.o" placeholder="enter ur PhoneNumber"/>
        </div>
        <br/>
        <button>Register</button>
         <p>
          Old user? <Link to="/login">Login here</Link>
        </p>
        

      </form>
    </div>
     <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
    </>

  )
}
export default Register;
