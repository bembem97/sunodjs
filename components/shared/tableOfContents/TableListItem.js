import PropTypes from "prop-types"

const TableListItem = ({ children, jumpTo, title }) => {
  return (
    <li>
      <a href={`#${jumpTo}`} className="flex gap-1">
        <span className="hover:underline">{title}</span>
      </a>
      {children}
    </li>
  )
}

export default TableListItem

TableListItem.propTypes = {
  jumpTo: PropTypes.string.isRequired,
}
