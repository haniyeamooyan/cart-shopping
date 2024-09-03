import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { useContext, useState } from "react";
import { CartContext , ItemType} from "../context/CartContext";
import CartProduct from "./CartProduct";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {items, getTotalAmount} = useContext(CartContext)

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
        <Modal.Header closeVariant="white">
          <Modal.Title>سبد خرید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ? (
              <>
                {items.map((item: ItemType , index) => (
                  <CartProduct key={index} id={item.id} quantity={item.quantity}/>
                ))}
                <h4>محموع قیمت : {getTotalAmount()}</h4>
              </>
            ): (
              <div style={{minHeight:"5em"}}><h4>سبد خرید خالی است</h4></div>
             
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button 
            onClick={handleClose}
            variant={"outline-secondary"}
            className="text-white"
            >
              بستن
            </Button>
          </Modal.Footer>
       </Modal>
    </>
  );
};

export default Navbar;
