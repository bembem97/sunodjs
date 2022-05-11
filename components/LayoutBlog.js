import SideNav from "./SideNav"
import Modal from "./shared/Modal"

const LayoutBlog = ({ children }) => {
  return (
    <>
      <div>
        <Modal>
          <SideNav />
        </Modal>
      </div>
      <div className="lg:pl-80">{children}</div>
    </>
  )
}

export default LayoutBlog
