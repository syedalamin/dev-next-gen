


import Swal from "sweetalert2";
import useClientReview from "../../hooks/useClientReview";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
const ClientReviewDelete = () => {
    const [clientReview, refetch] = useClientReview();
    const handleOfficeDelete = client => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dev-next-gen-server.vercel.app/clientreview/${client._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <TitleSubTitle Title="Delete"></TitleSubTitle>
            <div className="grid md:grid-cols-4 gap-4 items-center ">
                {
                    clientReview.map(client => <div
                        key={client._id}
                    >
                        <div>
                            <div className="card w-full  cardbg    shadow-xl">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <div className="card-body items-center text-center">
                                            <div className="avatar">
                                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={client.image} />
                                                </div>
                                            </div>
                                            <div className="card-actions">
                                                <button onClick={() => handleOfficeDelete(client)} className="btn btn-ghost bgGlash">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ClientReviewDelete;