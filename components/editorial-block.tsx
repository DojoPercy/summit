interface EditorialBlockProps {
  title?: string
  leftContent: string
  rightContent: string
}

export default function EditorialBlock({
  title,
  leftContent,
  rightContent,
}: EditorialBlockProps) {
  return (
    <div className="space-y-8">
      {title && (
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          {leftContent.split('\n').map((paragraph, index) => (
            <p
              key={index}
              className="text-foreground/80 text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          {rightContent.split('\n').map((paragraph, index) => (
            <p
              key={index}
              className="text-foreground/80 text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
