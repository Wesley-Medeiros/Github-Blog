import { SearchFormContainer } from "./styles"

function SearchForm() {
  return(
    <SearchFormContainer>
      <header>
        <h3>Publucações</h3>
        <span>6 Publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}

export default SearchForm
