import Container from "../components/Container";
import Column from "../components/Column";
import Row from "../components/Row";
import Button from "../components/Button";
import Text from "../components/Text";
const Camera = "/assets/Camera Icon.svg";
const IGTV = "/assets/IGTV.svg";
const Airplane = "/assets/Shape.svg";

const Dashboard = () => {
  return (
    <>
      <Container className="flex flex-col w-screen h-screen py-4 px-2">

        <Row className="items-center justify-between border border-green-700 w-full px-2">
          <Button className="border border-purple-600 h-full w-auto" iconClassName="w-7 h-7" icon={Camera}></Button>
          <Text
            className="font-cursive tracking-tight text-2xl border border-blue-600" 
            text="Instagram"
          />
          <Row className="flex-shrink-0 border border-red-600 gap-4">
            <Button className="border border-black h-auto w-auto" iconClassName="w-7 h-7" icon={IGTV}></Button>
            <Button className="border border-black h-auto w-auto" icon={Airplane} iconClassName=" h-6 w-7"></Button>
          </Row>
        </Row>
        
        <Container>
          <Row>Stories</Row>
        </Container>

        <Container>
          <Column>Posts</Column>
        </Container>

        <Container>
          <Row>Bottom Navbar</Row>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
