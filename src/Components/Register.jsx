import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../assets/Lottes/Register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { creatUser, signInWithGoggleUser } = useContext(AuthContext);
  const handleGoogle = () => {
    signInWithGoggleUser()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, number, address, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Responsive Lottie Animation */}
        <div className="text-center lg:text-left flex justify-center items-center w-full lg:w-1/2">
          <Lottie
            animationData={RegisterImage}
            loop={true}
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
          />
        </div>

        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* Number */}
              <label className="label">Number</label>
              <input
                type="text"
                name="number"
                className="input"
                placeholder="Number"
              />
              {/* Address */}
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input"
                placeholder="Address"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>

            <button onClick={handleGoogle} className="btn btn-outline">
              <FcGoogle size={25} />
              Sign In With Google
            </button>

            <p className="py-2 text-center">
              Already Have An Account?{" "}
              <Link className="text-blue-600" to="/signIn">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
