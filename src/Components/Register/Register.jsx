import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
 

 

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character")
    .required("Password is required"),
   
});

function Register() {
const Navigate = useNavigate()
    const user={
        name:"",
        email:"",
        password:"",
         
    }
    const formik = useFormik({
        initialValues:user,
        userSchema,
        onSubmit:(values)=>{
            register(values)
        }
    })
 
    function register(values){
        axios.post('https://e-commerce-red-rho-36.vercel.app/users',values)
        .then((user)=>{
            console.log(user);
          Navigate('/login')  
        }).catch((err)=>{
            console.log(err.message);
            
        })
    }
    return (
        <>
<form onSubmit={formik.handleSubmit} className="w-full max-w-md px-4 py-10 mx-auto">
  <div className="relative z-0 w-full mb-6 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.name}
      onBlur={formik.handleBlur}
      type="text"
      name="name"
      id="name"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-500 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="name"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Name
    </label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.email}
      onBlur={formik.handleBlur}
      type="email"
      name="email"
      id="email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-500 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="email"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email
    </label>
  </div>

  <div className="relative z-0 w-full mb-6 group">
    <input
      onChange={formik.handleChange}
      value={formik.values.password}
      onBlur={formik.handleBlur}
      type="password"
      name="password"
      id="password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-500 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="password"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Password
    </label>
  </div>

  <button
    type="submit"
    className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    Register
  </button>
</form>

</>
    )
}

export default Register
