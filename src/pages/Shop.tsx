import {Col, Row} from "react-bootstrap";
import {productList} from "../data/item.ts";
import ProductItem from "../components/ProductItem.tsx";

const Shop = () => {
    return (
        <Row xs={1} md={4} className={"g-4"}>
            {productList.map((product, index) => (
                <Col align={"center"} key={index}>
                    <ProductItem product={product}/>
                </Col>
            ))}
        </Row>
    );
};

export default Shop;
