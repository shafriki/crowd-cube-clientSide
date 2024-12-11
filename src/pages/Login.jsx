import React, { useState, useContext, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { PiEyeSlashFill } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import logo from '../assets/crowd.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Fade } from 'react-awesome-reveal';

const Login = () => {
  const { loginUser, googlePopup } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Login | CrowdCube";
  }, []);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill all fields.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    try {
      await loginUser(email, password);
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 3000,
      });

      const navigateTo = from === "/" ? "/allcampaign" : from;
      setTimeout(() => {
        navigate(navigateTo, { replace: true });
      }, 1000);
    } catch (err) {
      toast.error("Login failed. Check your email or password.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googlePopup();
      toast.success("Logged in with Google!", { position: "top-center" });

      const navigateTo = from === "/" ? "/allcampaign" : from;
      setTimeout(() => navigate(navigateTo, { replace: true }), 1500);
    } catch (err) {
      toast.error(err.message || "Google sign-in failed.", {
        position: "top-center",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('https://i.ibb.co.com/K7JhbTG/login.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex items-center justify-center h-screen mx-4 md:mx-0">
        <Fade duration={1000}>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 w-full sm:w-80 md:w-96">
            <div className="flex items-center justify-center">
              <img src={logo} className="w-8 md:w-12" alt="CrowdCube Logo" />
            </div>

            <p className="text-green-500 text-center text-sm md:text-lg">
              Welcome Back to CrowdCube
            </p>
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleLogin} className="flex flex-col">
              <label htmlFor="email" className="text-green-500 text-sm mb-2">
                Email
              </label>
              
              <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

              <label htmlFor="password" className="text-green-500 text-sm mb-2">
                Password
              </label>

              <div className="relative">
                <input type={passwordVisible ? "text" : "password"} name="password"
                  id="password" placeholder="Enter your password" className="p-3 mb-1 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>
                
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800">
                  {passwordVisible ? <PiEyeSlashFill /> : <PiEyeBold />}
                </button>
                </div>

              <button type="submit" className="bg-green-600 btn border-none text-white rounded-lg hover:bg-green-500 transition duration-300 w-full mt-4" >
              Login
              </button>

              <p className="text-green-500 border-t mt-3 text-center text-sm font-medium">
                OR LOGIN WITH
              </p>

              <button type="button" onClick={handleGoogleSignIn} className="bg-blue-600 btn border-none text-white rounded-lg hover:bg-blue-500 transition duration-300 mt-2 flex items-center justify-center gap-2 w-full">
                <FcGoogle className="text-2xl" /> Google
              </button>

              <p className="text-white text-center text-sm mt-1">
                Do not have an account yet?{" "}
                <span className="text-green-500">
                  <Link to="/register">Register.</Link>
                </span>
              </p>
            </form>
          </div>
        </Fade>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
