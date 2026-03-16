import { DataList } from "@chakra-ui/react";

interface SpecTypes {
    brand: string | undefined;
    category: string | undefined;
    returnPolicy: string | undefined;
    weight: number | undefined;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    } | undefined;
    warrantyInformation: string | undefined;
    shippingInformation: string | undefined;
   
}
type Props = {
    specs: SpecTypes
}
const Specifications = ({ specs }: Props) => {
    const { brand, category, returnPolicy, weight, dimensions, warrantyInformation, shippingInformation } = specs
    return (
        <DataList.Root orientation="horizontal" divideY="1px">
            <DataList.Item pt="4" pb={"4"} gap={0}>
                <DataList.ItemLabel>Brand</DataList.ItemLabel>
                <DataList.ItemValue>
                    {brand}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0} backgroundColor={"gray.50"}>
                <DataList.ItemLabel>Category</DataList.ItemLabel>
                <DataList.ItemValue>
                    {category}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0}>
                <DataList.ItemLabel>Weight</DataList.ItemLabel>
                <DataList.ItemValue>
                    {weight}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0} backgroundColor={"gray.50"}>
                <DataList.ItemLabel>Dimensions</DataList.ItemLabel>
                <DataList.ItemValue>
                    {`Width: ${dimensions?.width}; Height: ${dimensions?.height}; Depth: ${dimensions?.depth};`}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0}>
                <DataList.ItemLabel>Return Policy</DataList.ItemLabel>
                <DataList.ItemValue>
                    {returnPolicy}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0} backgroundColor={"gray.50"}>
                <DataList.ItemLabel>Warranty Information</DataList.ItemLabel>
                <DataList.ItemValue>
                    {warrantyInformation}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4" pb={"4"} gap={0}>
                <DataList.ItemLabel>Shipping Information</DataList.ItemLabel>
                <DataList.ItemValue>
                    {shippingInformation}
                </DataList.ItemValue>
            </DataList.Item>
        </DataList.Root>
    )
}

export default Specifications