import { DataList } from "@chakra-ui/react";

interface SpecTypes {
    brand: string | undefined;
    category: string | undefined;
    returnPolicy: string | undefined;
    minimumOrderQuantity: number | undefined;
    weight: number | undefined;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    } | undefined;
    warrantyInformation: string | undefined;
    shippingInformation: string | undefined;
    availabilityStatus: string | undefined;
}
type Props = {
    specs: SpecTypes
}
const Specifications = ({ specs }: Props) => {
    const { brand, category, returnPolicy, minimumOrderQuantity, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus } = specs
    return (
        <DataList.Root orientation="horizontal" divideY="1px">
            <DataList.Item pt="4">
                <DataList.ItemLabel>Brand</DataList.ItemLabel>
                <DataList.ItemValue>
                    {brand}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Category</DataList.ItemLabel>
                <DataList.ItemValue>
                    {category}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Weight</DataList.ItemLabel>
                <DataList.ItemValue>
                    {weight}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Dimensions</DataList.ItemLabel>
                <DataList.ItemValue>
                    {`Width: ${dimensions?.width}; Height: ${dimensions?.height}; Depth: ${dimensions?.depth};`}
                </DataList.ItemValue>
            </DataList.Item>

            <DataList.Item pt="4">
                <DataList.ItemLabel>Availability Status</DataList.ItemLabel>
                <DataList.ItemValue>
                    {availabilityStatus}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Minimum Order Quantity</DataList.ItemLabel>
                <DataList.ItemValue>
                    {minimumOrderQuantity}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Return Policy</DataList.ItemLabel>
                <DataList.ItemValue>
                    {returnPolicy}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Warranty Information</DataList.ItemLabel>
                <DataList.ItemValue>
                    {warrantyInformation}
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
                <DataList.ItemLabel>Shipping Information</DataList.ItemLabel>
                <DataList.ItemValue>
                    {shippingInformation}
                </DataList.ItemValue>
            </DataList.Item>
        </DataList.Root>
    )
}

export default Specifications