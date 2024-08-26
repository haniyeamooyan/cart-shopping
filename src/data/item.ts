export type ItemType = {
    id: string;
    title: string;
    price: number;
    image: string;
}

const productList: ItemType[] = [
    {
        id: "1",
        title: 'Product 1',
        price: 200,
        image: "/images/airpods.jpg",
    },
    {
        id: "2",
        title: 'Product 2',
        price: 300,
        image: "/images/airpods.jpg",
    },
    {
        id: "3",
        title: 'Product 3',
        price: 400,
        image: "/images/airpods.jpg",
    },
    {
        id: "4",
        title: 'Product 4',
        price: 500,
        image: "/images/airpods.jpg",
    },
]

const getProductData = (id: string) => {
    return productList.find((item) => item.id === id)
}

export {productList, getProductData}