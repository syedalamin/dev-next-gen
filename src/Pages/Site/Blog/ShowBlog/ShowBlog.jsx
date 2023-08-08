
import PaginationBlog from "../../../../components/PaginationBlog/PaginationBlog";
import useBlog from "../../../../hooks/useBlog";


import { useState } from "react";
import ReactPaginate from "react-paginate";


const ShowBlog = () => {
    const [blogs] = useBlog();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const totalCount = Math.ceil(blogs.length / postsPerPage);

    const handlePageClick = (data) => {
        const current = data.selected + 1;
        setCurrentPage(current);
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexofFirstPost, indexOfLastPost)



    return (
        <div className="relative w-full">
            <div className=" rounded-full filter blur-3xl absolute opacity-50 top-0 left-0 h-96 md:w-96 w-full   bgGradient"></div>
            <div className=" rounded-full filter blur-3xl absolute opacity-50 bottom-0 right-10 h-96 md:w-96 w-full   bgGradient"></div>
            <div className=" rounded-full filter blur-3xl absolute opacity-50 bottom-0 left-0 h-96 md:w-96 w-full hidden md:visible  bgGradient"></div>
            <div className=" rounded-full filter blur-3xl absolute opacity-50 top-0 right-10 h-96 md:w-96 w-full hidden md:visible  bgGradient"></div>
            <div className="w-11/12 mx-auto pt-10 md:pt-0  relative">
                <div>
                    <div>
                        <PaginationBlog blogs={currentPosts}></PaginationBlog>
                    </div>
                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        pageCount={totalCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
                        onPageChange={handlePageClick}
                        containerClassName={'flex justify-center '}
                        pageClassName={'mx-2 '}
                        previousClassName={' gradient-bg    border borde rounded cursor-pointer'}
                        previousLinkClassName={'px-2  '}
                        nextClassName={' gradient-bg  border borde rounded cursor-pointer'}
                        nextLinkClassName={'px-2  '}
                        pageLinkClassName={' md:px-5 px-2 text-lg  border borde  rounded  cursor-pointer'}
                        breakClassName={' border borde rounded cursor-pointer'}
                        breakLinkClassName={'md:px-5 px-2'}
                        activeClassName={'gradient-bg rounded  '}
                    />

                </div>

            </div>
        </div>
    );
};

export default ShowBlog;