import { useQuery } from "react-query";


const useProductShowcaseBanner = () => {
    const {data: productShowcaseBanner = [], refetch} = useQuery(['productshowcasebanner'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/productshowcasebanner')
        return res.json();
    });
    return [productShowcaseBanner, refetch]
};

export default useProductShowcaseBanner;