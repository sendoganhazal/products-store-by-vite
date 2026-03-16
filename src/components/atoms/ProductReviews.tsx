import { DataList, RatingGroup, Text, Flex } from "@chakra-ui/react";
interface ReviewsTypes {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

type ReviewsProps = {
    reviews: ReviewsTypes[] | undefined;
}

const ProductReviews = ({ reviews }: ReviewsProps) => {
    return (
        <DataList.Root orientation="vertical" divideY="1px">
            {
                reviews?.map((r, key) => {
                    const r_date = new Date(r.date).toLocaleDateString('en-GB');
                    return (

                        <DataList.Item pt="4" key={key}>
                            <DataList.ItemLabel>
                                <RatingGroup.Root readOnly count={5} value={r.rating} size="sm" colorPalette={"pink"}>
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Label>{r.rating}</RatingGroup.Label>
                                    <RatingGroup.Control />
                                </RatingGroup.Root>
                            </DataList.ItemLabel>
                            <DataList.ItemValue>
                                <Flex direction={"column"}>
                                    <Text textStyle={"md"}>{r.reviewerName}</Text>
                                    <Text textStyle={"lg"} fontWeight={"medium"}>
                                        {r.comment}
                                    </Text>
                                    <Text textStyle={"sm"}>{r_date}</Text>
                                </Flex>

                            </DataList.ItemValue>
                        </DataList.Item>
                    )
                })
            }
        </DataList.Root>
    )
}

export default ProductReviews