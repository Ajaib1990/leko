import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  )
}
