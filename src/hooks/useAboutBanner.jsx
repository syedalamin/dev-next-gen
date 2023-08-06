import { useQuery } from "react-query";


const useAboutBanner = () => {
    const { data: aboutBanner = [] } = useQuery(['aboutBanner'], async () => {
        const res = await fetch('http://localhost:5000/aboutBanner')
        return res.json();
    });
    return [aboutBanner]
};

export default useAboutBanner;