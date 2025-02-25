import LoginInputComponent from "../components/LoginInputComponent";
import Divider from "../components/Divider";
import Button from "../components/Button";
import Text from "../components/Text";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginUserMutation } from "../services/userApi";

const Google = "/assets/Google.svg";
const Facebook = "/assets/Facebook.svg";
const LoginArt = "/assets/Login Art.svg";

const LoginPage = () => {
  let navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, {data, error: loginError, isLoading: loginLoading}] = useLoginUserMutation();


  const handleLogin = async() => {
    try{
      const response = await loginUser({
        identifier: identifier,
        password: password,
      }).unwrap();
      console.log("Login Successful:", response);

      if(response.message){
        navigate("/dashboard");
        console.log("ASDASDASD");
      }

      if(response.error){
        console.log("wazzap")
      }

    }catch(err){
      
      if (err?.status === 404) {
        console.log("User not found. Please check your credentials.");
      } 
      // Check if it's a 400 Bad Request error (missing fields)
      else if (err?.status === 400) {
        console.log("Missing username or password.");
      } 
      // Handle Internal Server Error
      else if (err?.status === 500) {
        console.error("Internal Server Error:", err);
      } 
      // Handle any other unexpected errors
      else {
        console.error("Login Failed:", err);
      }
    }

  };

  return (
    <>
      <div
        className="flex flex-col bg-nt-white justify-start items-center h-screen w-screen overflow-y-auto border border-black py-4 px-1 gap-5 
      sm:flex-row-reverse sm:px-4"
      >
        <div className="w-11/12 h-44 sm:w-1/2 sm:h-full">
          <img
            className="w-full h-full rounded-xl justify-center object-cover"
            src={LoginArt}
          />
        </div>
        <div className="flex flex-col flex-1 w-11/12 gap-4 sm:mx-2 md:mx-4 lg:mx-8">
          <h1 className="font-noto tracking-wide text-2xl md:text-4xl">
            Welcome Back 👋
          </h1>
          <Text
            className="font-noto tracking-wide"
            text="Today is a new day. It's your day. You shape it."
          />
          <Text
            className="font-noto tracking-wide"
            text="Sign in to start managing your projects"
          />

          <div className="flex flex-col w-auto gap-1">
            <Text
              className="font-noto tracking-wide"
              text="Username or Email"
            />
            <LoginInputComponent
            type="email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="border-2 border-#input-border bg-#input-main"
              placeholder="Username or Email"
            />
          </div>

          <div className="flex flex-col w-auto gap-1">
            <Text className="font-noto tracking-wide" text="Password" />
            <LoginInputComponent
            type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-2 border-#input-border bg-#input-main"
              placeholder="Password"
            />
          </div>

          <a className="font-noto text-xs ml-auto tracking-wide">
            Forgot Password?
          </a>

          <Button
          loading={loginLoading}
            onClick={handleLogin}
            className="bg-#signin hover:bg-slate-600 transition w-full h-11 gap-2 px-4 py-2"
            buttonText="Sign in"
            textClass="text-white"
          />

          <Divider text="Or sign in with" textClassName="text-black" />

          <div
            className="flex flex-row justify-center items-center gap-2 w-full 
             sm:flex-col"
          >
            <Button
              onClick={() => console.log("Google")}
              className="bg-#socials hover:bg-slate-300 w-full h-11 gap-2 px-4 py-2"
              icon={Google}
              buttonText="Google"
            />
            <Button
              onClick={() => console.log("Facebook")}
              className="bg-#socials hover:bg-slate-300 w-full h-11 gap-2 px-4 py-2"
              icon={Facebook}
              buttonText="Facebook"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex items-center justify-center font-noto text-sm">
              Don't you have an account?{" "}
            </div>
            <a className="font-noto text-sm">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
