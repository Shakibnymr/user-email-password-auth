import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Register = () => {

const handleRegister = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        console.log(error)
    })
}

    return (
        <div>
            <div>
            <h1 className="text-3xl mb-8">Do your registration!</h1>
            <form onSubmit={handleRegister}>
                <input className="mb-4 w-3/4 py-2 px-4" placeholder="Email Address" type="email" name="email" id="" />
                <br />
                <input type="password" name="password" className="mb-4 w-3/4 py-2 px-4" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Register" className="btn btn-secondary mb-4 w-3/4" />
            </form>
            </div>
        </div>
    );
};

export default Register;