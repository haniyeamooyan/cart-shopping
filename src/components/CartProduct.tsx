import { Button } from "react-bootstrap";
import { getProductData } from "../data/item";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface propT {
  id: string;
  quantity: number;
}

const CartProduct = ({ id, quantity }: propT) => {
  const { deleteFromCart } = useContext(CartContext);

  const productData = getProductData(id);
  if (!productData) return;
  return (
    <div>
      <p>{productData.title}</p>
      <p>تعداد : {quantity}</p>
      <p>قیمت : {quantity * productData.price}</p>
      <Button
        onClick={() => {
          deleteFromCart(id);
        }}
        size="sm"
        className="mb-5 text-white"
        variant={"outline-secondary"}
      >
        حذف
      </Button>
    </div>
  );
};

export default CartProduct;
