import { useQuery } from "react-query";


const useProductShowcaseBanner = () => {
    const {data: productShowcaseBanner = [], refetch} = useQuery(['productshowcasebanner'], async()=>{
        const res = await fetch('http://localhost:5000/productshowcasebanner')
        return res.json();
    });
    return [productShowcaseBanner, refetch]
};

export default useProductShowcaseBanner;