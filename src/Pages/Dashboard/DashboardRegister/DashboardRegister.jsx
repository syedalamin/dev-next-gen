import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const DashboardRegister = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const password = watch('password');
    const { createUser, updateUserProfile } = useContext(AuthContext);



    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    const toggleConfirmVisibility = () => {
        setConfirmVisible(!confirmVisible);
    }


    const onSubmit = data => {
    
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                       const saveUser = {name: data.name, email: data.email}
                       fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                       })
                       .then(res => res.json())
                       .then(data =>{
                        if(data.insertedId){
                            console.log('user name update')
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Create User Successful',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            reset();
                        }
                       })
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="w-10/12 mx-auto">
            <div className="flex w-full h-full items-center justify-center ">
                <div className="card w-full loginbg shadow-xl">
                    <div className="justify-center p-16  items-center text-center">
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="md:flex gap-5 items-center">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input loginbg  input-bordered w-full " />
                                    {errors.name && <span >Please Your Name</span>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="input loginbg  input-bordered w-full " />
                                    {errors.email && <span >Your Valid Email</span>}
                                </div>
                            </div>
                            <div className="md:flex gap-5 items-center">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={passwordVisible ? 'text' : 'password'} placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input loginbg  input-bordered w-full " />
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" onClick={togglePasswordVisibility}>{passwordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                    </div>
                                    {errors.password?.type === 'required' && <span>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span>Password must be 6 characters</span>}
                                    {errors.password?.type === 'pattern' && <span>Password  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Confirm Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={confirmVisible ? "text" : "password"} placeholder="confirm password" ref {...register("confirmPassword", { required: true, validate: (value) => value === password || 'Passwords do not match', minLength: 6, pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input loginbg  input-bordered w-full " />
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" onClick={toggleConfirmVisibility}>{confirmVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                    </div>
                                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                    {errors.confirmPassword?.type === 'required' && <span>confirm is required</span>}
                                    {errors.confirmPassword?.type === 'minLength' && <span>confirm must be 6 characters</span>}
                                    {errors.confirmPassword?.type === 'pattern' && <span>confirm  must have one uppercase one lower case one number and one special characters  20 characters</span>}
                                </div>
                            </div>
                            <div className="md:flex  gap-5 items-center"> 
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text text-white">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Your Photo" {...register("photo", { required: true })} className="input loginbg  input-bordered w-full " />
                                    {errors.photo && <span >Your Valid Photo</span>}
                                </div>
                            </div>
                            <button className="gradient-bg btn  w-full border-0 ">Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DashboardRegister;