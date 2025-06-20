 
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const { token,setToken } = useContext(AuthContext);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIssuccess] = useState(false);
   
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios.post('https://e-commerce-red-rho-36.vercel.app/users/signin', values)
      .then((res) => {
        console.log(res.data.token);  
        const newToken = res.data.token;
        const finalToken = `ahmed__${newToken}`;
        localStorage.setItem('toky', finalToken);
        setToken(res.data.token);

        setTimeout(() => {
          setIssuccess(true);
        }, 2000);
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.message); 
        setIsError(err.response?.data?.message || "Login failed");
        setTimeout(() => {
          setIsError(null);
        }, 2000);
      });
  };
   
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      const finalToken = `ahmed__${token}`;
      localStorage.setItem("toky", finalToken);
      setToken(finalToken);
        navigate("/products");

    }
    
  }, []);
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="text-center my-3 text-sm text-gray-400">or</div>

        <button
          type="button"
          onClick={() => window.location.href = 'https://e-commerce-red-rho-36.vercel.app/auth/google'}

          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Login with Google
        </button>

        {isError && <p className="text-red-500 text-sm mt-4">{isError}</p>}
        {isSuccess && <p className="text-green-500 text-sm mt-4">Login successful!</p>}
      </div>
    </div>
  );
}
