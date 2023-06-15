import { ComponentProps } from "react";
import { ExtenalLinkContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExtenalLinkProps = ComponentProps<typeof ExtenalLinkContainer> & {
  text: string;
}

export function ExtenalLink({ text, ...rest }: ExtenalLinkProps) {
  return <ExtenalLinkContainer {...rest}>
    {text}
    <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExtenalLinkContainer>
}

