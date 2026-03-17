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
            <Flex gap={4} alignItems={"center"} justifyContent={"space-between"} paddingTop={"1.25rem"} paddingBottom={"1.25rem"}>
                <Box>
                    <InputGroup flex="1" maxW="300px" startElement={<LuSearch />}>
                        <Input
                            placeholder="Search products..."
                            variant="outline"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </InputGroup>
                </Box>
                <Flex gap={2} alignItems={"center"}>
                    <Button onClick={() => onSort("rating")} variant={"solid"} colorPalette={"pink"}>Sort by Rating</Button>
                    <Button onClick={() => onSort("title")} variant={"solid"} colorPalette={"purple"}>Sort by Title</Button>
                    <Button onClick={() => onSort("price")} variant={"solid"} colorPalette={"cyan"}>Sort by Price</Button>

                </Flex>
            </Flex>
        </Container>
    )
}

export default CategoryProductFilters