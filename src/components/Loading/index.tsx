import { LoadingConatiner } from "./styles"

function Loading() {
  return(
    <LoadingConatiner>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>  
    </LoadingConatiner>
  )
}

export default Loading