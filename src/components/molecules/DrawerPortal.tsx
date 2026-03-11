import { Drawer, Portal, CloseButton, Text, Button } from "@chakra-ui/react"
import { useCart } from "../../lib/hooks/useCart"
import CartItem from "../atoms/CartItem";


const DrawerPortal = () => {
  const { items } = useCart();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Cart</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body  flexDirection={"column"} overflow={"auto"}>
            <Text textStyle="xl" fontWeight={"semibold"} color={"purple.900"} marginBottom={"1.5rem"}>Total Price: ${totalPrice}</Text>
            {items.length === 0 ? (
              <p>Sepet boş 🛒</p>
            ) : (
              items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            )}

          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="solid" colorPalette={"teal"}>View Cart</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  )
}

export default DrawerPortal