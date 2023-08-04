import { useQuery } from "react-query";


const useWelcomeBanner = () => {
    const {data: welcomeBanners = [], isLoading} = useQuery([''], async()=>{
        const res = await fetch('http://localhost:5000/banner')
        return res.json();
    })
    return [welcomeBanners, isLoading]
};

export default useWelcomeBanner;