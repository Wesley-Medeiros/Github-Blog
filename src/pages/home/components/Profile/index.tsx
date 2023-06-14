import ExtenalLink from "../../../../components/ExtenalLink"
import { ProfileContainer, ProfileDetails, ProfileImg } from "./styles"

function Profile() {
  return(
    <ProfileContainer>
      <ProfileImg src="https://github.com/Wesley-Medeiros.png" />

      <ProfileDetails>
        <header>
          <h1>Wesley Medeiros</h1>
          <ExtenalLink text="Github"/>
        </header>
      </ProfileDetails>
    </ProfileContainer>
  )
}

export default Profile