import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { PiEyeSlashFill } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import logo from "../assets/crowd.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser, googlePopup } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    document.title = "Register | CrowdCube";
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    let showToast = false;

    // Password validations
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-center",
      });
      showToast = true;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.", {
        position: "top-center",
      });
      showToast = true;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.", {
        position: "top-center",
      });
      showToast = true;
    }

    if (showToast) {
      return;
    }

    try {
      // Firebase create user
      await createUser(email, password, name, photo);
      toast.success("Registration Successful!", { position: "top-center" });

      // Send user data to the backend
      const newUser = { name, email, photo };
      await fetch("https://crowd-cube-server-one.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      setTimeout(() => navigate("/allcampaign"), 1500);
    } catch (error) {
      if (error.message.includes("already")) {
        toast.error("User already registered. Please log in.", {
          position: "top-center",
        });
      } else {
        toast.error(error.message || "Registration failed.", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/g9KKg0w/Untitled-design-20.png')",
      }}
    >
      <ToastContainer />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Register Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 overflow-auto">
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 w-full sm:w-80 md:w-96">

          <div className="flex items-center justify-center">
            <img src={logo} className="w-8 md:w-12" />
          </div>
          <p className="text-green-500 text-center text-sm md:text-lg">
            Join CrowdCube Today
          </p>
          <h2 className="text-green-500 text-xl md:text-2xl font-semibold text-center mb-4">
            Register
          </h2>

          <form onSubmit={handleRegister} className="flex flex-col">
            <label htmlFor="name" className="text-green-500 text-sm mb-2">
              Name
            </label>
            <input type="text" name="name" id="name" placeholder="Enter your name"
              className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full" />

            <label htmlFor="email" className="text-green-500 text-sm mb-2">
              Email{" "}
            </label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

            <label htmlFor="photo" className="text-green-500 text-sm mb-2">
              Photo URL{" "}
            </label>
            <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full" />

            <label htmlFor="password" className="text-green-500 text-sm mb-2">
              Password{" "}
            </label>
            <div className="relative">
              <input type={passwordVisible ? "text" : "password"} name="password"
                id="password" placeholder="Create a password" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

              <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800" >
                {passwordVisible ? <PiEyeSlashFill /> : <PiEyeBold />}
              </button>
            </div>

            <button type="submit" className="bg-green-600 btn border-none text-white rounded-lg hover:bg-green-500 transition duration-300 w-full mt-4" >
              Register
            </button>

            <p className="text-white text-center text-sm mt-1">
              Already have an account?
              <span className="text-green-500">
                <Link to="/login" className="ml-1">
                  Login.
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
