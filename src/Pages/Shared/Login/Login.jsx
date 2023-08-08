import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [passwordVisible, setPasswordVisible]= useState(false);
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const togglePasswordVisibility = () =>{
        setPasswordVisible(!passwordVisible);
    }
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
         logIn(data.email, data.password)
         .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome To Our Dashboard',
                showConfirmButton: false,
                timer: 1500,
              })
              reset();
             navigate(from, {replace: true});
         })
         .catch(error =>{
            console.log(error.massage);
         })
        };

    return (
        <div className="relative">
            <div className=" filter blur-3xl absolute opacity-20 h-full w-full   bgGradient ">
            </div>
            <div className="h-screen w-full flex items-center justify-center flex-col">
                <div className="md:w-4/12 w-10/12 mx-auto">
                    <div className="card w-full loginbg text-neutral-content">
                        <div className="justify-center p-16  items-center text-center">
                            <div className="flex justify-center">
                                <div className="w-16">
                                    <img src="https://i.ibb.co/C129r7x/Fav-Dev-NEXTGen.png " />
                                </div>
                            </div>
                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="input loginbg  input-bordered w-full " />
                                    {errors.email && <span >Your Valid Email</span>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={passwordVisible ? 'text': 'password'} placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input loginbg  input-bordered w-full " />
                                        <span className="absolute inset-y-0  right-0 flex items-center pr-3 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility}>{passwordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }</span>
                                    </div>
                                    {errors.password?.type === 'required' && <span>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span>Password must be 6 characters</span>}
                                    {errors.password?.type === 'pattern' && <span>Password  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                                </div>
                                <button className="gradient-bg btn  w-full border-0 ">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;