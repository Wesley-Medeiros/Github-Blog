/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react"
import PostList from "./components/Post"
import Profile from "./components/Profile"
import SearchForm from "./components/SearchForm"
import { PostListContainer } from "./styles"
import { api } from "../../lib/axios"
import Loading from "../../components/Loading"

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`);
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }

  },
   [posts]
   );

   useEffect(() => {
    getPosts()
   }, [])

  return(
    <>
      <Profile />
      <SearchForm getPosts={getPosts} postLength={posts.length} />

      {isLoading ? <Loading /> : (
        <PostListContainer>
        {posts.map((post) => (
          <PostList key={post.number} post={post} />
        ))}
      </PostListContainer>
      )}
    </>
  )
}

export default Home