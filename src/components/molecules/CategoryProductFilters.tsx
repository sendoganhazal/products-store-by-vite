import { Flex, Button, Box, Container, Input, InputGroup } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu";

// Sıralama kriterleri için tip tanımlayalım
export type SortKey = "rating" | "title" | "price";

interface Props {
    onSort: (key: SortKey) => void;
    onSearch: (value: string) => void;
}

const CategoryProductFilters = ({ onSort, onSearch }: Props) => {
    return (
        <Container>
            <Flex flexDirection={{base:"column", md:"row"}} gap={4} align={{base:"stretch", md:"center"}} justify={{base:"center", md:"space-between"}}paddingTop={"1.25rem"} paddingBottom={"1.25rem"}>
                <Box>
                    <InputGroup flex="1" maxW="300px" startElement={<LuSearch />}>
                        <Input
                            placeholder="Search products..."
                            variant="outline"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </InputGroup>
                </Box>
                <Flex flexWrap={"wrap"} gap={2} alignItems={"center"} >
                    <Button onClick={() => onSort("rating")} variant={"solid"} colorPalette={"pink"} flexBasis={{base:"45%", md:"auto"}}>Sort by Rating</Button>
                    <Button onClick={() => onSort("title")} variant={"solid"} colorPalette={"purple"} flexBasis={{base:"45%", md:"auto"}}>Sort by Title</Button>
                    <Button onClick={() => onSort("price")} variant={"solid"} colorPalette={"cyan"} flexBasis={{base:"45%", md:"auto"}}>Sort by Price</Button>

                </Flex>
            </Flex>
        </Container>
    )
}

export default CategoryProductFilters