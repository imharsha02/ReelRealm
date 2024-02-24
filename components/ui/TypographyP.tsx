export function TypographyP({children, className}:{className?:React.ReactNode,children:React.ReactNode}) {
    return (
      <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
        {children}
      </p>
    )
  }
  