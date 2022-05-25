const TableOfContents = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      id="toc"
      className={`toc h-fit px-2 ${className || ""}`.trim()}
    >
      <div className="toc-box custom-scrollbar overflow-auto h-screen pb-24 xl:pb-1">
        <p className="h4">Table of contents</p>

        {children}
      </div>
    </div>
  )
}

export default TableOfContents
