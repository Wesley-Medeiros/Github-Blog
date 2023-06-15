import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExtenalLink } from "../../../../components/ExtenalLink"
import { ProfileContainer, ProfileDetails, ProfileImg } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return(
    <ProfileContainer>
      <ProfileImg src="https://github.com/Wesley-Medeiros.png" />

      <ProfileDetails>
        <header>
          <h1>Wesley Medeiros</h1>
          <ExtenalLink text="Github" href="#"/>
        </header>

        <p>Desenvolvedor Front-end com foco em #html #css #javascript #react #typescript</p>
        <ul>
          <li><FontAwesomeIcon icon={faGithub} />Wesley-Medeiros</li>
          <li><FontAwesomeIcon icon={faBuilding} />SeedOn</li>
          <li><FontAwesomeIcon icon={faUserGroup} />13k seguidores</li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}

export default Profile