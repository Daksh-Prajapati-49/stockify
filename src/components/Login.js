import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                    <div style={{margin:"auto",width:"50%"}}>                                                                 
                        <form>                                              
                            <div style={{margin:"auto",width:"50%",padding:"1rem"}}>
                                <label htmlFor="email-address">
                                    <b>Email:</b>
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div style={{margin:"auto",width:"50%",padding:"1rem"}}>
                                <label htmlFor="password">
                                    <b>Password:</b>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div style={{margin:"auto",width:"50%"}}>
                                <button                                    
                                    onClick={onLogin}
                                    style={{width:"50%",backgroundColor: "#4CAF50",
                            color: "white",
                            padding: "15px 32px",
                            textAlign:"center",
                            fontSize:"16px",
                            cursor: "pointer",
                            marginLeft:"6rem"
                        }}                                               
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login