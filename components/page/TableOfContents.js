const TableOfContents = ({ children, className, ...props }) => {
  return (
    <div {...props} id="toc" className={`toc hidden xl:block h-fit`}>
      <div className="custom-scrollbar overflow-auto h-screen pb-24 xl:pb-1">
        <p className="h4">Table of contents</p>

        {children}
      </div>
    </div>
  )
}

export default TableOfContents
