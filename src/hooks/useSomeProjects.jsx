import { useQuery } from "react-query";

const useSomeProjects = () => {
    const {data: someProjects = [], refetch } = useQuery(['someprojects'], async () => {
        const res = await fetch('http://localhost:5000/someprojects')
        return res.json();
    });
    return [someProjects, refetch];
};

export default useSomeProjects;