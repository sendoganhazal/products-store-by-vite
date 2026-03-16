import { Tabs, Card } from "@chakra-ui/react"
import DescriptionContent from "../atoms/DescriptionContent";
import Specifications from "../atoms/Specifications";
import ProductReviews from "../atoms/ProductReviews";

interface Reviews{
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    } 

interface ProductDescriptionTypes {
    description: string | undefined;
    specs: {
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
    };
    reviews: Reviews[] | undefined;
}

type ProductDescriptionProps = {
    productDescription: ProductDescriptionTypes;
}

const ProductDescription = ({ productDescription }: ProductDescriptionProps) => {

    const {description, specs, reviews} = productDescription;
    console.log("reviews",reviews)


    return (
        <section className="description-section">
            <Card.Root>
                <Card.Body>
                    <Tabs.Root defaultValue="description">
                        <Tabs.List>
                            <Tabs.Trigger value="description">
                                Description
                            </Tabs.Trigger>
                            <Tabs.Trigger value="specifications">
                                Product Specifications
                            </Tabs.Trigger>
                            <Tabs.Trigger value="reviews">
                                Reviews
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="description">
                            <DescriptionContent description={description}/>
                        </Tabs.Content>
                        <Tabs.Content value="specifications">
                           <Specifications specs={specs} />
                        </Tabs.Content>
                        <Tabs.Content value="reviews">
                            <ProductReviews reviews={reviews}/>
                        </Tabs.Content>
                    </Tabs.Root>
                </Card.Body>
            </Card.Root>
        </section>

    )
}

export default ProductDescription