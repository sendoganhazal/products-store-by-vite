import { Flex, Button, Box, Container } from "@chakra-ui/react"

// Sıralama kriterleri için tip tanımlayalım
export type SortKey = "rating" | "title" | "price";

interface Props {
    onSort: (key: SortKey) => void;
}

const CategoryProductFilters = ({ onSort }: Props) => {
    return (
      <Container>
          <Flex gap={4} alignItems={"center"} justifyContent={"space-between"} paddingTop={"1.25rem"} paddingBottom={"1.25rem"}>
            <Box></Box>
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