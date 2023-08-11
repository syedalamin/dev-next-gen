
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
import useJoinCompany from "../../hooks/useJoinCompany";
import Swal from "sweetalert2";


const CompanyDelete = () => {
    const [companys, refetch] = useJoinCompany();
    const handleOfficeDelete = company => {
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
                fetch(`https://dev-next-gen-server.vercel.app/company/${company._id}`, {
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
                    companys.map(company => <div
                        key={company._id}
                    >
                        <div>
                            <div className="card w-full  cardbg h-60   shadow-xl">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <figure className="px-10 pt-10">
                                            <img src={company.image} className="rounded-xl h-12" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="card-actions">
                                                <button onClick={() => handleOfficeDelete(company)} className="btn btn-ghost bgGlash">delete</button>
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

export default CompanyDelete;

