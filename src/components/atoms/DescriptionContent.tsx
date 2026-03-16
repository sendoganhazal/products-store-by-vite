import { Text } from "@chakra-ui/react"

type Props = {
    description: string | undefined;
}
const DescriptionContent = ({description} : Props) => {
  return (
    <Text textStyle={"lg"}>{description}</Text>
  )
}

export default DescriptionContent