import { useQuery } from "react-query";


const useWelcomeBanner = () => {
    const {data: welcomeBanners = [], isLoading} = useQuery(['banner'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/banner')
        return res.json();
    })
    return [welcomeBanners, isLoading]
};

export default useWelcomeBanner;