import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./components/AppLayout"
import DonatorsGridPage from "./pages/DonatorsGridPage"
import CreatePage from "./pages/CreatePage"
import { AlertProvider } from "./contexts/AlertContext"


function App() {

  return (
    <>
      <BrowserRouter>
        <AlertProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path={`/donators`} element={<DonatorsGridPage />} />
              <Route path={`/create`} element={<CreatePage />} />
            </Route>

          </Routes>
        </AlertProvider>

      </BrowserRouter>
    </>
  )
}

export default App
