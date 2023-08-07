import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";


const ProductBannerUpdate = ({ productBanner }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { _id } = productBanner;


    const onSubmit = data => {

        const { title, subTitle } = data;
        const updateBanner = { title, subTitle, }

        fetch(`http://localhost:5000/productshowcasebanner/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBanner)
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
    }

    return (
        <div className="py-10">
            <div className="">
                <TitleSubTitle Title="Product Banner" ></TitleSubTitle>
                <div className="card w-full cardbg shadow-xl">
                    <div className="justify-center p-16  items-center text-center">
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                                        <span className="label-text text-white">Sub Title</span>
                                    </label>
                                    <input type="text"   {...register("subTitle", { required: true })} className="input cardbg  input-bordered w-full " />
                                    {errors.subTitle && <span >Please Sub Title</span>}
                                </div>
                            </div>
                            <button className="gradient-bg btn  w-full border-0 ">Update Product </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBannerUpdate;