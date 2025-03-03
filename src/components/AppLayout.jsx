import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import ScrollToTopButton from "./ScrollToTopButton";

import { useAlertContext } from "../contexts/AlertContext";
import AppAlert from "./AppAlert";

function AppLayout() {
    const { error, message } = useAlertContext(); // Usa il contesto per ottenere gli alert

    return (
        <>
            <AppNavbar />

            <AppAlert />

            <Outlet />
            <ScrollToTopButton />
            <AppFooter />

        </>
    )
}

export default AppLayout;