import { Button, Card, CardBody, Row, Form, Col } from "react-bootstrap";
import { ItemType } from "../data/item.ts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";

interface props {
  product: ItemType;
}

const ProductItem = ({ product }: props) => {
  const {
    addItemToCart,
    getProductQuantity,
    removeItemFromCart,
    deleteFromCart,
  } = useContext(CartContext);

  const productQuantity = getProductQuantity(product.id);

  return (
    <Card className={"mt-5 card-bg"}>
      <CardBody>
        <Card.Img
          variant={"top"}
          src={product.image}
          height={"200px"}
          style={{ objectFit: "cover" }}
        />
        <Card.Title className={"text-light pt-4 justify-content-end"}>
          {product.title}
        </Card.Title>
        <Card.Text className={"text-light justify-content-end"} dir="rtl">
          {product.price} تومان
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label className="text-white" column={true} sm="6">
                تعداد : {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  className="mx-2 text-white"
                  variant="Button-outline"
                  onClick={() => {
                    addItemToCart(product.id);
                  }}
                >
                  +
                </Button>
                <Button
                  className="mx-2 text-white"
                  variant="Button-outline"
                  onClick={() => {
                    removeItemFromCart(product.id);
                  }}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              className="my-4"
              variant="light"
              onClick={() => {
                deleteFromCart(product.id);
              }}
            >
              حذف از سبد خرید
            </Button>
          </>
        ) : (
          <Button
            variant={"outline-secondary"}
            className={"text-white"}
            onClick={() => {
              addItemToCart(product.id);
            }}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default ProductItem;
