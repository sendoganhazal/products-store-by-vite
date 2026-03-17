import { Container, Flex,Heading } from "@chakra-ui/react";
const HomeSearchBanner = () => {
  return (
    <section className="banner">
      <Container>
        <Flex alignItems={"center"} justifyContent={"center"} >
          <Heading textStyle={"6xl"}>This project is built with React & Vite. Data provided by DummyJSON.</Heading>
        </Flex>
      </Container>
    </section>
  )
}

export default HomeSearchBanner