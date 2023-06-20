import { useForm } from "react-hook-form"
import { SearchFormContainer } from "./styles"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>;
  postLength: number;
}

function SearchForm({ getPosts, postLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchPost(data: SearchFormInput) {
   await getPosts(data.query)
  }

  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)} >
      <header>
        <h3>Publucações</h3>
        <span>{postLength} Publicações</span>
      </header>

      <input 
      type="text"
      placeholder="Buscar conteúdo"
      {...register("query")}
       autoComplete="off" />
    </SearchFormContainer>
  )
}

export default SearchForm
