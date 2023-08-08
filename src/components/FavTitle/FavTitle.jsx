import { Helmet } from "react-helmet-async";

const FavTitle = ({FavTitle}) => {
    return (
        <div>
            <Helmet>
                <title>{FavTitle} || DevNextGen</title>
            </Helmet>
        </div>
    );
};

export default FavTitle;