import { Input } from "@chakra-ui/react"

const Searchbox = () => {
  return (
    <form>
        <Input placeholder='Search products' size={"xl"} bg={"white"} width={"100%"} display={"block"}/>
    </form>
  )
}

export default Searchbox