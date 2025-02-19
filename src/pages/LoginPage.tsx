
import LoginInputComponent from "../components/LoginInputComponent";
import Divider from "../components/Divider";
import Column from "../components/Column";
import Row from "../components/Row";
import Button from "../components/Button";
import Text from "../components/Text";
import Center from "../components/Center";
import Container from "../components/Container";

const Google = "/assets/Google.svg";
const Facebook = "/assets/Facebook.svg";
const LoginArt = "/assets/Login Art.svg"

const LoginPage = () => {
  return (
    <>
      <Container className="flex flex-col bg-nt-white justify-start items-center h-screen w-screen overflow-y-auto border border-black py-4 px-1 gap-5 
      sm:flex-row-reverse sm:px-4">
        <div className="w-11/12 h-44 sm:w-1/2 sm:h-full">
          <img
            className="w-full h-full rounded-xl justify-center object-cover"
            src={LoginArt}
          />
        </div>
        <Column className="flex-1 w-11/12 gap-4 sm:mx-2 md:mx-4 lg:mx-8">
            <h1 className="font-noto tracking-wide text-2xl md:text-4xl">Welcome Back 👋</h1>
            <Text className="font-noto tracking-wide" text="Today is a new day. It's your day. You shape it."/>
            <Text className="font-noto tracking-wide" text="Sign in to start managing your projects"/>

            <Column className="w-auto gap-1">
                <Text className="font-noto tracking-wide" text="Username or Email"/>
                <LoginInputComponent className="border-2 border-#input-border bg-#input-main" placeholder="Username or Email"/>
            </Column>

            <Column className="w-auto gap-1">
                <Text className="font-noto tracking-wide" text="Password"/>
                <LoginInputComponent className="border-2 border-#input-border bg-#input-main" placeholder="Password"/>
            </Column>

            <a className="font-noto text-xs ml-auto tracking-wide">
                Forgot Password?
            </a>

            <Button className="bg-#signin hover:bg-slate-600 transition w-full h-11gap-2 px-4 py-2" buttonText="Sign in" textClass="text-white"/>
            
            <Divider text="Or sign in with" textClassName="text-black"/>

            <Row className="justify-center items-center gap-2 w-full 
             sm:flex-col">
                <Button className="bg-#socials hover:bg-slate-300 w-full h-11 gap-2 px-4 py-2" icon={Google} buttonText="Google"/>
                <Button className="bg-#socials hover:bg-slate-300 w-full h-11 gap-2 px-4 py-2"  icon={Facebook} buttonText="Facebook"/>
            </Row>
            <Row className="justify-center items-center gap-1">
              <Center className="font-noto text-sm">Don't you have an account? </Center>
              <a className="font-noto text-sm">Sign up</a>
            </Row>
        </Column> 
      </Container>
    </>
  );
};

export default LoginPage;
