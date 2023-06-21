/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react"
import PostHeader from "./components/PostHeader"
import { IPost } from "../home";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import PostContent from "./components/PostContent";

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;


function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostsDetails = useCallback( async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/repos/${userName}/${repoName}/issues/${id}`);

      setPostData(response.data)
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostsDetails()
  }, [])

  return(
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}

export default Post