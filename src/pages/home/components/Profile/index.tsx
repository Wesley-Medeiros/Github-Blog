/* eslint-disable react-hooks/exhaustive-deps */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExtenalLink } from "../../../../components/ExtenalLink"
import { ProfileContainer, ProfileDetails, ProfileImg } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import Loading from "../../../../components/Loading";

const userName = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  work?: string;
  followers: number;
}

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${userName}`)

      setProfileData(response.data)
    }finally {
     setIsLoading(false)
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData()
  }, [])

  return(
    <ProfileContainer>
      {isLoading ? <Loading /> : (
        <>
        
      <ProfileImg src={profileData.avatar_url} />

        <ProfileDetails>
          <header>
            <h1>{profileData.name}</h1>
            <ExtenalLink text="Github" 
            href={profileData.html_url} 
            target="_blank"/>
          </header>

          <p>{profileData.bio}</p>
          <ul>
            <li><FontAwesomeIcon icon={faGithub} />{profileData.login}</li>
            {profileData?.work && (<li><FontAwesomeIcon icon={faBuilding} />{profileData.work}</li>)}
            <li><FontAwesomeIcon icon={faUserGroup} />{profileData.followers} seguidores</li>
          </ul>
        </ProfileDetails>
                </>
              )}
    </ProfileContainer>
  )
}

export default Profile