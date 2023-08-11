import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;


const AboutBannerUpdate = ({about}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { _id } = about;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const { heading, subHeading,} = data;
                const updateAboutBanner = { heading, image: imgURL,  subHeading, }
                fetch(`https://dev-next-gen-server.vercel.app/aboutBanner/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateAboutBanner)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Update Successful',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })

    }

    return (
        <div className="py-10">
            <div className="">
                <TitleSubTitle Title="About Update" ></TitleSubTitle>
                <div className="card w-full cardbg shadow-xl">
                    <div className="justify-center p-16  items-center text-center">
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="md:flex gap-5 items-center">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Heading</span>
                                    </label>
                                    <input type="text"  {...register("heading", { required: true })} className="input cardbg  input-bordered w-full " />
                                    {errors.heading && <span >Please Heading</span>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Sub Heading</span>
                                    </label>
                                    <input type="text"    {...register("subHeading", { required: true })} className="input cardbg  input-bordered w-full " />
                                    {errors.subHeading && <span >Please Title</span>}
                                </div>
                            </div>
                            <div className="md:flex gap-5 items-center">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Image</span>
                                    </label>
                                    <input type="file"   {...register("image", { required: true })} className="file-input cardbg file-input-success  file-input-bordered w-full " />
                                    {errors.image && <span >Your Valid Email</span>}
                                </div>
                            </div>
                            <button className="gradient-bg btn  w-full border-0 ">Update About</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBannerUpdate;