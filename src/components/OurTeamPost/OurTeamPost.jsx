import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;


const OurTeamPost = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })

            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name,  position} = data;
                    const postWork = { name, position, image: imgURL, }
                    fetch('http://localhost:5000/ourteams', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postWork)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    };

    return (
        <div className="">
            <TitleSubTitle Title="Post"></TitleSubTitle>
            <div className="card w-full cardbg shadow-xl">
                <div className="justify-center p-16  items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="md:flex gap-5 items-center">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text"    {...register("name", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.name && <span >Please Name</span>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Position</span>
                                </label>
                                <select {...register("position", { required: true })} className="select select-bordered w-full cardbg ">
                                    <option className="bg-slate-600 ">Web Designer</option>
                                    <option className="bg-slate-600 ">React Js Developer</option>
                                    <option className="bg-slate-600 ">Web Developer</option>    
                                    <option className="bg-slate-600 ">Front-End Developer</option>    
                                    <option className="bg-slate-600 ">Back-End Developer</option>    
                                    <option className="bg-slate-600 ">Full Stack Developer</option>    
                                    <option className="bg-slate-600 ">MERN Stack Developer</option>    
                                    <option className="bg-slate-600 ">App Developer</option>
                                    <option className="bg-slate-600 ">Digital Marketer</option>
                                    <option className="bg-slate-600 ">Wordpress Developer</option>
                                    <option className="bg-slate-600 ">Shopify Developer</option>
                                </select>
                                {errors.position && <span >Please Select </span>}
                            </div>
                        </div>
                        <div className="md:flex gap-5 items-center">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Image</span>
                                </label>
                                <input type="file"   {...register("image", { required: true })} className="file-input cardbg file-input-success  file-input-bordered w-full " />
                                {errors.image && <span >Your Valid Image</span>}
                            </div>
                        </div>
                        <button className="gradient-bg btn  flex justify-start border-0 ">Some Project</button>
                    </form>
                </div>
            </div>

        </div>
    );
};


export default OurTeamPost;