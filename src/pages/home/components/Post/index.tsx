import { IPost } from "../..";
import RelativeDateFormatter from "../../../../utils/Formatter";
import { PostContainer } from "./styles"

interface PostProps {
  post: IPost;
}

function PostList({ post }: PostProps) {
  const formattedDate = RelativeDateFormatter(post.created_at)

  return(
   <PostContainer to={`/post/${post.number}`}>
    <div>
      <strong>{post.title}</strong>
      <span>{formattedDate}</span>
    </div>

    <p>{post.body}</p>
   </PostContainer> 
  )
}

export default PostList