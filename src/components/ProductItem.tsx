import {Button, Card, CardBody} from "react-bootstrap";
import {ItemType} from "../data/item.ts";

interface props {
    product: ItemType
}

const ProductItem = ({product}: props) => {
    return (
        <Card className={"mt-5 card-bg"}>
            <CardBody>
                <Card.Img
                variant={"top"}
                src={product.image}
                height={"200px"}
                style={{objectFit: "cover"}}
                />
                <Card.Title className={"text-light pt-4 justify-content-end"}>{product.title}</Card.Title>
                <Card.Text className={"text-light justify-content-end"}>{product.price}</Card.Text>
                <Button variant={"outline-secondary"} className={"text-white"}>افزودن به سبد خرید</Button>
            </CardBody>
        </Card>
    );
};

export default ProductItem;
