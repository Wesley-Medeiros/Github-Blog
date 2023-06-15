import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExtenalLink } from "../../../../components/ExtenalLink"
import { PostHeaderConatiner } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

function PostHeader() {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  } 
  
  return(
    <PostHeaderConatiner>
      <header>
      <ExtenalLink 
        onClick={goBack}
        icon={<FontAwesomeIcon 
        icon={faChevronLeft} />} 
        text="Voltar" 
        href="#" 
        variant="iconLeft" />
      <ExtenalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
          <li><FontAwesomeIcon icon={faGithub} />Wesley-Medeiros</li>
          <li><FontAwesomeIcon icon={faCalendar} />Há 1 dia</li>
          <li><FontAwesomeIcon icon={faComment} />5 comentários </li>
        </ul>
    </PostHeaderConatiner>
  )
}

export default PostHeader