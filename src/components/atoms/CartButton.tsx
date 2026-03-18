import { Button, Badge, Drawer } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";

interface BadgeProps {
  totalItems: number;
}

export const CartButton = ({ totalItems }: BadgeProps) => {

  return (
    <Drawer.Trigger asChild>
      <Button colorPalette="teal" variant="solid">
        <IoCartOutline /> Cart
        {
          totalItems > 0 && <Badge colorPalette="pink">{totalItems}</Badge>
        }

      </Button>
    </Drawer.Trigger>

  )
}
