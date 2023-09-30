import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";


const Login = () => {

const emailRef = useRef(null)

const [success,setSuccess] = useState('')

const handleForgetPassword = () => {
  const email = emailRef.current.value;
  if(!email){
    console.log('Please,provide and email')
    return //never forget to return in these kind of cases.
  }
  else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)){
    console.log('Please,write a valid email.')
  }

sendPasswordResetEmail(auth,email)
.then(()=> {
  alert('Please,check your email')
})
.catch(error => {console.log(error)})
}



const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signInWithEmailAndPassword(auth,email,password)
    .then(result => {
        const user = result.user;
        console.log(user)
        if(result.user.emailVerified){
          setSuccess('User Logged in Successfully')
        }
        else{
          (alert('Please verify your email address'))
        }
    } )
    .catch(error => {
        console.log(error)
    })

}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             <form onSubmit={handleLogin}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>
                  New to this website? Please <NavLink  to="/heroRegister" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : "text-black rounded-3xl p-1 bg-blue-950"
  }>Register</NavLink>
                </p>
              </div>
             </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;