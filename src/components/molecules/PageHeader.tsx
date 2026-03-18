import { Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string | undefined;
  brand: string | undefined;
}

const PageHeader = ({ title, brand }: Props) => {
  return (
    <section>
      <Heading textStyle={"3xl"} color={"purple"}>{title}</Heading>
      <Text textStyle={"lg"} color={"cyan.600"} fontWeight={"medium"}>{brand}</Text>
    </section>
  )
}

export default PageHeader