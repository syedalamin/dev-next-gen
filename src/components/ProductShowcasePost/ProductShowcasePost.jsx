import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;


const ProductShowcasePost = () => {
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
                    const {  title, liveLink} = data;
                    const postProduct = { title, subtitle: "Let’s See Portfolio", liveLink, image: imgURL, }
                    fetch('https://dev-next-gen-server.vercel.app/productshowcase', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postProduct)
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
                                    <span className="label-text text-white">Title</span>
                                </label>
                                <input type="text"    {...register("title", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.title && <span >Please Title</span>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Live Link</span>
                                </label>
                                <input type="text"    {...register("liveLink", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.liveLink && <span >Please Live Link</span>}
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
                        <button className="gradient-bg btn  flex justify-start border-0 ">Product Showcase</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProductShowcasePost;