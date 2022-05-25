import Typography from "components/shared/Typography"

const TableOfContents = ({ children }) => {
  return (
    <div
      id="toc"
      className="toc h-fit px-2 hidden md:block md:col-span-3 lg:col-span-2"
    >
      <div className="toc-box custom-scrollbar overflow-auto h-screen pb-24 xl:pb-1">
        <Typography variant={"h4"}>Table of contents</Typography>

        {children}
      </div>
    </div>
  )
}

export default TableOfContents
