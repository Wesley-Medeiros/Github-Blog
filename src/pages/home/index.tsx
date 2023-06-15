import Post from "./components/Post"
import Profile from "./components/Profile"
import SearchForm from "./components/SearchForm"
import { PostListContainer } from "./styles"

function Home() {
  return(
    <>
      <Profile />
      <SearchForm />

      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  )
}

export default Home