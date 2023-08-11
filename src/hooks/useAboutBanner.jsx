import { useQuery } from "react-query";


const useAboutBanner = () => {
    const { data: aboutBanner = [] } = useQuery(['aboutBanner'], async () => {
        const res = await fetch('https://dev-next-gen-server.vercel.app/aboutBanner')
        return res.json();
    });
    return [aboutBanner]
};

export default useAboutBanner;