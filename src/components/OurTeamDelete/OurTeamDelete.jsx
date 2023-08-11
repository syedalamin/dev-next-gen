
import Swal from "sweetalert2";
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
import useOurTeams from "../../hooks/useOurTeams";

const OurTeamDelete = () => {
    const [ourTeams, refetch] = useOurTeams();
    const handleOfficeDelete = team => {
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
                fetch(`https://dev-next-gen-server.vercel.app/ourteams/${team._id}`, {
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
                    ourTeams.map(team => <div
                        key={team._id}
                    >
                        <div>
                            <div className="card w-full  cardbg h-72   shadow-xl">
                                <div className="flex items-center justify-center">
                                    <div>
                                        <figure className="px-10 pt-10">
                                            <img src={team.image} className="rounded-xl h-32" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div className="card-actions">
                                                <button onClick={() => handleOfficeDelete(team)} className="btn btn-ghost bgGlash">delete</button>
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


export default OurTeamDelete;