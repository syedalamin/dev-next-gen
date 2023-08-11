import { useQuery } from "react-query";


const useBlogBanner = () => {
    const {data: blogBanner = []} = useQuery(['blogbanner'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/blogbanner');
        return res.json();
    });
    return [blogBanner];
};

export default useBlogBanner;