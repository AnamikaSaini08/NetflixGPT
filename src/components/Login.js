import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = ()=>{
    //Validate the form data
    const message = 
                    checkValidData(email.current.value, password.current.value,isSignInForm?null:username.current.value,isSignInForm);
    setErrorMessage(message);
    console.log(message)
  }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="bgImg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-[90%] md:w-3/12 bg-black bg-opacity-75 p-12 mx-auto right-0 left-0 my-20 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&  <input
          ref={username}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button className="p-4 my-6  bg-red-700 w-full rounded-lg" onClick={()=>{handleButtonClick()}}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={() => toggleSigninForm()}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
