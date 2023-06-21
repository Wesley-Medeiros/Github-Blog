import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import DefaultLayout from "./Layouts/DefaultLayout"
import Post from "./pages/Post"

function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}

export default Router