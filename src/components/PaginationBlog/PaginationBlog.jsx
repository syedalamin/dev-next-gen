import SingleBlog from "../SingleBlog/SingleBlog";


const PaginationBlog = ({blogs}) => {
    return (
        <div>
             <div>
                    {blogs.length === 0 ? <p className="text-3xl text-red-600 font-bold text-center py-10">Coming Soon</p> :
                        <div className="grid md:grid-cols-3 gap-5 py-10">
                       
                            {
                                blogs.map(blog => <SingleBlog
                                    key={blog._id}
                                    blog={blog}
                                ></SingleBlog>)
                            }
                        </div>
                    }
                </div>
        </div>
    );
};

export default PaginationBlog;