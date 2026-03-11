import type { CartItem as Item } from "../../lib/type/types"
import { useCart } from "../../lib/hooks/useCart"
import { Button, Card, Image, Text,  Flex } from "@chakra-ui/react";


const CartItem = ({ item }: { item: Item }) => {
    const { removeFromCart, increaseQty, decreaseQty } = useCart();

    return (
        <Card.Root flexDirection="row" overflow="hidden" flexGrow={"1"} marginBottom={"1.25rem"}>
            <Image
                objectFit="cover"
                maxW="200px"
                src={item.thumbnail}
                alt="Caffe Latte"
            />

            <Card.Body>
                <Card.Title mb="2">{item.title}</Card.Title>
                <Card.Description>
                    <Flex alignItems={"center"} gap={2} marginBottom={"1rem"}>
                        <Button variant={"outline"} colorPalette={"pink"} onClick={() => decreaseQty(item.id)}>-</Button>
                        <Text color={"gray.800"} fontWeight={"medium"}>{item.quantity}</Text>
                        <Button variant={"outline"} colorPalette={"pink"} onClick={() => increaseQty(item.id)}>+</Button>
                       
                    </Flex>
                     <Text textStyle={"lg"} color={"cyan.500"} fontWeight={"medium"}> ${(item.price * item.quantity).toFixed(2)}</Text>
                </Card.Description>

            </Card.Body>
            <Card.Footer>
                <Button variant="outline" colorPalette={"red"} onClick={() => removeFromCart(item.id)}>Remove Product</Button>
            </Card.Footer>
        </Card.Root>


    )
}

export default CartItem