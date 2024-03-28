import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto h-16">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;