import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";

const BlogPost = () => {
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
                    const { url, title, subtitle, titleone,  titletwo, titlethree, titlefour, titlefive, subtitleone, subtitletwo, subtitlethree, subtitlefour, subtitlefive } = data;
                    const postBlog = { url, image: imgURL, title, subtitle, titleone,  titletwo, titlethree, titlefour, titlefive, subtitleone, subtitletwo, subtitlethree, subtitlefour, subtitlefive }
                    fetch('http://localhost:5000/blog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postBlog)
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
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Url</span>
                                </label>
                                <input type="text"    {...register("url", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.url && <span >Please Title</span>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title</span>
                                </label>
                                <input type="text"    {...register("title", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.title && <span >Please Title</span>}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title </span>
                                </label>
                                <textarea {...register("subtitle", { required: true })} className="textarea textarea-bordered cardbg w-full" ></textarea>
                                {errors.subtitle && <span >Please Sub Title</span>}
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
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title 1</span>
                                </label>
                                <input type="text"    {...register("titleone", { required: true })} className="input cardbg  input-bordered w-full " />
                                {errors.titleone && <span >Please Title</span>}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title 1</span>
                                </label>
                                <textarea {...register("subtitleone", { required: true })} className="textarea textarea-bordered cardbg w-full" ></textarea>
                                {errors.subtitleone && <span >Your Valid Sub Title</span>}
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title 2</span>
                                </label>
                                <input type="text"    {...register("titletwo")} className="input cardbg  input-bordered w-full " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title 2</span>
                                </label>
                                <textarea {...register("subtitletwo")} className="textarea textarea-bordered cardbg w-full" ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title 3</span>
                                </label>
                                <input type="text"    {...register("titlethree")} className="input cardbg  input-bordered w-full " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title 3</span>
                                </label>
                                <textarea {...register("subtitlethree")} className="textarea textarea-bordered cardbg w-full" ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title 4</span>
                                </label>
                                <input type="text"    {...register("titlefour")} className="input cardbg  input-bordered w-full " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title 4</span>
                                </label>
                                <textarea {...register("subtitlefour")} className="textarea textarea-bordered cardbg w-full" ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white">Title 5</span>
                                </label>
                                <input type="text"    {...register("titlefive")} className="input cardbg  input-bordered w-full " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Sub Title 5</span>
                                </label>
                                <textarea {...register("subtitlefive")} className="textarea textarea-bordered cardbg w-full" ></textarea>
                            </div>
                        </div>
                      
                        <button className="gradient-bg btn  flex justify-start border-0 ">Blog Post</button>
                    </form>
                </div>
            </div>

        </div>
    );
};


export default BlogPost;