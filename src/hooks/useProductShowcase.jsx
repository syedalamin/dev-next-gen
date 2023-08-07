import { useQuery } from "react-query";

const useProductShowcase = () => {
    const {data: productShowcase = [], refetch} = useQuery(['productshowcase'], async()=>{
        const res = await fetch('http://localhost:5000/productshowcase')
        return res.json();
    });
    return [productShowcase, refetch]
};

export default useProductShowcase;