import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import ScrollToTopButton from "./ScrollToTopButton";

function AppLayout() {
    return (
        <>
            <AppNavbar />
            <Outlet />
            <ScrollToTopButton />
            <AppFooter />

        </>
    )
}

export default AppLayout;