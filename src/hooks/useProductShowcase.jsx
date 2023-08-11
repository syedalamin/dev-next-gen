import { useQuery } from "react-query";

const useProductShowcase = () => {
    const {data: productShowcase = [], refetch} = useQuery(['productshowcase'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/productshowcase')
        return res.json();
    });
    return [productShowcase, refetch]
};

export default useProductShowcase;