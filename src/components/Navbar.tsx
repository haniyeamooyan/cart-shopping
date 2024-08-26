import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
            <BsCart className={"mx-2"} />
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handleClose}></Modal>
    </>
  );
};

export default Navbar;
