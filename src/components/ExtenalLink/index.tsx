import { ExtenalLinkContainer } from "./styles"

interface ExtenalLinkProps {
  text: string;
}

function ExtenalLink({ text }: ExtenalLinkProps) {
  return(
    <ExtenalLinkContainer>
      {text}
    </ExtenalLinkContainer>
  )
}

export default ExtenalLink