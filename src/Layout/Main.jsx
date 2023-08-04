
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import AutoReloadPage from '../components/AutoReloadPage/AutoReloadPage';
import MainLoading from '../components/MainLoading/MainLoading';

const Main = () => {
    const [loading] = AutoReloadPage();

    if(loading){
        return <MainLoading></MainLoading>
    }
    
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;