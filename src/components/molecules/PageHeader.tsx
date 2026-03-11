import { Heading,Text,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string | undefined;
    brand: string |undefined;
    rating: number | undefined;
}

const PageHeader = ({title,brand}: Props) => {
  return (
    <section>
        <Heading textStyle={"3xl"} color={"purple"}>{title}</Heading>
        <Text textStyle={"lg"} color={"cyan.600"} fontWeight={"medium"}>{brand}</Text>
        <Flex gap={2} alignItems={"center"}>
            Rating
            Tags 
            Category
        </Flex>
    </section>
  )
}

export default PageHeader