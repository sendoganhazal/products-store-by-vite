/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Text, DataList } from "@chakra-ui/react"


type Props = {
    sku: string | undefined;
    stock: number | undefined;
    availabilityStatus: string | undefined;
    price: number | undefined;
    discountPercentage: number | undefined;
    minimumOrderQuantity: number | undefined;
}

const ProductOverview = ({ sku, stock, price, discountPercentage, minimumOrderQuantity, availabilityStatus }: Props) => {
    return (
        <Card.Root>
            <Card.Header>
                <Text textStyle="xl" color="teal">${price}</Text>
                <Text textStyle={"md"} color="purple">{discountPercentage && `-${discountPercentage}%`}</Text>
            </Card.Header>
            <Card.Body>
                <DataList.Root orientation="horizontal" divideY="1px">
                    <DataList.Item pt="4" pb={"4"} gap={0}>
                        <DataList.ItemLabel>SKU</DataList.ItemLabel>
                        <DataList.ItemValue>
                            {sku}
                        </DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item pt="4" pb={"4"} gap={0} backgroundColor={"gray.50"}>
                        <DataList.ItemLabel>Stock Quantity</DataList.ItemLabel>
                        <DataList.ItemValue>
                            {stock}
                        </DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item pt="4" pb={"4"} gap={0}>
                        <DataList.ItemLabel>Availability Status</DataList.ItemLabel>
                        <DataList.ItemValue>
                            {availabilityStatus}
                        </DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item pt="4" pb={"4"} gap={0} backgroundColor={"gray.50"}>
                        <DataList.ItemLabel>Minimum Order Quantity</DataList.ItemLabel>
                        <DataList.ItemValue>
                            {minimumOrderQuantity}
                        </DataList.ItemValue>
                    </DataList.Item>
                </DataList.Root>
            </Card.Body>
        </Card.Root>
    )
}

export default ProductOverview