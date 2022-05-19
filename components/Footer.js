const Footer = ({ className, ...props }) => {
  return (
    <footer
      id="footer"
      className={`${className || ""} py-10 mt-5`.trim()}
      {...props}
    >
      <div className="lg:max-w-5xl mx-auto px-3">
        <div className="mx-auto w-fit font-semibold">&copy; Bembem</div>
      </div>
    </footer>
  )
}

export default Footer
