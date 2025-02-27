import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./components/AppLayout"
import DonatorsGridPage from "./pages/DonatorsGridPage"
import CreatePage from "./pages/CreatePage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path={`/donatores`} element={<DonatorsGridPage />} />
            <Route path={`/create`} element={<CreatePage />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
