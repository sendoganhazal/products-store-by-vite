import React from 'react'
import { Button } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";

export const CartButton = () => {
  return (
    <Button colorPalette="teal" variant="solid">
      <IoCartOutline /> Cart
    </Button>
  )
}
