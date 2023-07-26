import { HTMLProps } from "react"

export default function Container ({ className, ...props}: HTMLProps<HTMLDivElement>) {
  return <div className={`mx-auto max-w-7xl px-4 ${className}`} {...props} />
}