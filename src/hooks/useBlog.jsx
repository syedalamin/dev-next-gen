import { useQuery } from "react-query";


const useBlog = () => {
    const {data: blogs = [], refetch} = useQuery(['blog'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/blog');
        return res.json();
    });
    return [blogs, refetch];
};

export default useBlog;