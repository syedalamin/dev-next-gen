import { useQuery } from "react-query";


const useBlogBanner = () => {
    const {data: blogBanner = []} = useQuery(['blogbanner'], async()=>{
        const res = await fetch('http://localhost:5000/blogbanner');
        return res.json();
    });
    return [blogBanner];
};

export default useBlogBanner;