import { useQuery } from "react-query";

const useSomeProjects = () => {
    const {data: someProjects = [], refetch } = useQuery(['someprojects'], async () => {
        const res = await fetch('https://dev-next-gen-server.vercel.app/someprojects')
        return res.json();
    });
    return [someProjects, refetch];
};

export default useSomeProjects;