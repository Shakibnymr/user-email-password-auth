import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";


const HeroRegister = () => {


const[heroError,setHeroError] = useState('')

const [success,setSuccess] = useState('')

const handleHero = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    setHeroError('')
    setSuccess('')

if(password.length < 6){
    setHeroError('Password should be at least 6 characters (auth/weak-password).')
    return
}

    createUserWithEmailAndPassword(auth,email,password)
    .then(userCredential => {
        const user = userCredential.user
        console.log(user)
        setSuccess('User Created Successfully')
    })
    .catch(error => {
        console.log(error)
        setHeroError(error.message)
    })
}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Hero Register</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleHero}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>
       <div className="text-2xl text-red-700 font-semibold">
        {heroError && <p>{heroError}</p> }
       </div>
       <div className="text-2xl text-green-700 font-semibold">
        {success && <p>{success}</p> }
       </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default HeroRegister;