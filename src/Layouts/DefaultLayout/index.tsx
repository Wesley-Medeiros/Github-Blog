import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles"
import Header from "../../components/Header"

function DefaultLayout() {
  return(
    <div>
      <LayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </div>
  )
}

export default DefaultLayout