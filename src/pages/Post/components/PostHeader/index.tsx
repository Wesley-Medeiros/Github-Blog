import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExtenalLink } from "../../../../components/ExtenalLink"
import { PostHeaderConatiner } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { IPost } from "../../../home"
import Loading from "../../../../components/Loading"
import RelativeDateFormatter from "../../../../utils/Formatter"

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  } 

  const formattedDate = RelativeDateFormatter(postData?.created_at)
  
  return(
    <PostHeaderConatiner>
      {isLoading ? <Loading /> : (
        <>
         <header>
          <ExtenalLink 
            onClick={goBack}
            icon={<FontAwesomeIcon 
            icon={faChevronLeft} />} 
            text="Voltar" 
            href="#" 
            variant="iconLeft" />
          <ExtenalLink text="Ver no Github" href={postData.html_url} target="_blank" />
          </header>

          <h1>{postData.title}</h1>

          <ul>
              <li><FontAwesomeIcon icon={faGithub} />{postData.user.login}</li>
              <li><FontAwesomeIcon icon={faCalendar} />{formattedDate}</li>
              <li><FontAwesomeIcon icon={faComment} />{postData.comments} comentários</li>
            </ul>
        </>
      )}
    </PostHeaderConatiner>
  )
}

export default PostHeader