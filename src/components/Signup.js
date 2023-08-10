import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <div style={{margin:"auto",width:"50%"}}>
                <div>                                                                                              
                    <form>                                                                                            
                        <div style={{margin:"auto",width:"50%",padding:"1rem"}}>
                            <label htmlFor="email-address">
                                <b>Email:</b>
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required                                                                
                            />
                        </div>

                        <div style={{margin:"auto",width:"50%",padding:"1rem"}}>
                            <label htmlFor="password">
                                <b>Password:</b>
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                               
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}
                            style={{width:"20%",backgroundColor: "#4CAF50",
                            color: "white",
                            padding: "15px 32px",
                            textAlign:"center",
                            fontSize:"16px",
                            cursor: "pointer",
                            marginLeft:"40%"
                        }}                    
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p style={{marginLeft:"35%",width:"50%"}}>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup