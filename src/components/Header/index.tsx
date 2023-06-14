import { HeaderContainer } from "./styles"
import Logo from "../../assets/Logo.svg"

function Header() {
  return(
    <HeaderContainer>
      <img src={Logo} />
    </HeaderContainer>
  )
}

export default Header