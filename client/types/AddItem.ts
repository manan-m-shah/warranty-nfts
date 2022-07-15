import { HTMLAttributes } from "react";

export type AddItemTabButton = {
  text: string,
  style: className,
  selectedStyle: className,
  selectedAltStyle: className,
}

type className = HTMLAttributes<HTMLElement>["className"];