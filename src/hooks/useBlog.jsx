import { useQuery } from "react-query";


const useBlog = () => {
    const {data: blogs = [], refetch} = useQuery(['blog'], async()=>{
        const res = await fetch('http://localhost:5000/blog');
        return res.json();
    });
    return [blogs, refetch];
};

export default useBlog;