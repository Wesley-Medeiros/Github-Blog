import { ComponentProps, ReactNode } from "react";
import { ExtenalLinkContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExtenalLinkProps = ComponentProps<typeof ExtenalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft",
}

export function ExtenalLink({ text, icon, ...rest }: ExtenalLinkProps) {
  return <ExtenalLinkContainer {...rest}>
    {text}
    {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExtenalLinkContainer>
}

