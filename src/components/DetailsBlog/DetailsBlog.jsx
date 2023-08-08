import { useParams } from "react-router-dom";
import useBlog from "../../hooks/useBlog";
import PageChangeTop from "../PageChangeTop/PageChangeTop";



const DetailsBlog = () => {
    const { url } = useParams();
    const [blogs, ] = useBlog();
    const blog = blogs.find(item => item.url === url);

    
    const {  image, date, title, subtitle, titleone,  titletwo, titlethree, titlefour, titlefive, subtitleone, subtitletwo, subtitlethree, subtitlefour, subtitlefive } = blog;

    return (
        <div>
            <PageChangeTop></PageChangeTop>
            <div className="md:w-9/12 w-11/12 mx-auto bgGlash mt-10 rounded-lg">
                <div className="w-11/12 mx-auto py-5 ">
                    <div className=" space-y-5">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p>{date}</p>
                        <img src={image} className="w-full mx-auto  rounded-lg" alt="" />
                        <p>{subtitle}</p>
                    </div>
                    <div className="space-y-7 pt-5">
                        <h1 className="text-2xl font-bold">{titleone}</h1>
                        <p>{subtitleone}</p>
                        <h1 className="text-2xl font-bold">{titletwo}</h1>
                        <p>{subtitletwo}</p>
                        <h1 className="text-2xl font-bold">{titlethree}</h1>
                        <p>{subtitlethree}</p>
                        <h1 className="text-2xl font-bold">{titlefour}</h1>
                        <p>{subtitlefour}</p>
                        <h1 className="text-2xl font-bold">{titlefive}</h1>
                        <p>{subtitlefive}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsBlog;