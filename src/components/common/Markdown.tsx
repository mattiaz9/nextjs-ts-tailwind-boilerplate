import React, { useMemo } from "react"

import microdown from "@utils/microdown"

type MarkdownProps = {
  as?: React.ElementType
  role?: string
  rawMarkdown: string
  className?: string
  style?: React.CSSProperties
  onClick?(): void
}

const Markdown: React.FC<MarkdownProps> = ({
  as: As = "div",
  role,
  className,
  style,
  rawMarkdown,
  onClick,
}) => {
  const markdown = useMemo(() => {
    return microdown(rawMarkdown)
  }, [rawMarkdown])

  return (
    <As
      className={className}
      style={style}
      role={role}
      dangerouslySetInnerHTML={{ __html: markdown }}
      onClick={onClick}
    />
  )
}

export default Markdown