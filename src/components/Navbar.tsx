import { Navbar as NavbarBs, Button, Modal, ModalBody } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { useContext, useState } from "react";
import { CartContext , ItemType} from "../context/CartContext";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {items} = useContext(CartContext)

  const productsCount = items.reduce((sum, product: ItemType) => sum + product.quantity , 0)

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBs className={"border-bottom border-secondary"}>
        <NavbarBs.Collapse className={"justify-content-end"}>
          <Button
            className={"text-white"}
            variant={"outline-secondary"}
            onClick={handleShow}
          >
            ({productsCount})
            <BsCart className={"mx-2"} />
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal 
      show={showModal} 
      onHide={handleClose}
       contentClassName="card-bg"
       dir="rtl" 
       >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>سبد خرید</Modal.Title>
          <Modal.Body>محصول</Modal.Body>
        </Modal.Header>
       </Modal>
    </>
  );
};

export default Navbar;
