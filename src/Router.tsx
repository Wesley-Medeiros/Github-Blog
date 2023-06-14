import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DefaultLayout from "./Layouts/DefaultLayout"

function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router