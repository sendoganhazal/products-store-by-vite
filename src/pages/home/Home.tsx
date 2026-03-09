import { Container, Image} from "@chakra-ui/react";
import StayTuned from "../../assets/stay_tuned.jpg"

const Home = () => (
  <Container>
    <Image src={StayTuned} alt="Stay Tuned"/>
  </Container>
);


export default Home;