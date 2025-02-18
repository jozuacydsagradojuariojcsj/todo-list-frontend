import React from "react";
import image from "../assets/flower_placeholder.jpg";
import LoginInputComponent from "../components/LoginInputComponent";
import Divider from "../components/Divider";
import Column from "../components/Column";
import Row from "../components/Row";
import Button from "../components/Button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <>
      <Column className="justify-start items-center h-screen w-screen py-5 px-5 border gap-5 border-black  sm:flex-row">
        <div className="w-11/12 sm:w-72 sm:h-72  border border-black">
          <img
            className="rounded-xl justify-center object-cover sm:rounded-none"
            src={image}
          />
        </div>
        <Column className="border border-black flex-1 w-11/12 gap-2">
            <h1 className="font-noto tracking-wide text-2xl">Welcome Back</h1>
            <p className="font-noto text-xs tracking-wide">
                Today is a new day. It's your day. You shape it. <br /> Sign in to
                start managing your projects.
            </p>
            <Column className="w-auto border border-red-600">
                <p className="font-noto text-xs tracking-wide">Username or Email</p>
                <LoginInputComponent defaultValue="Username or Email"/>
            </Column>

            <Column>
                <p className="font-noto text-xs tracking-wide">Password</p>
                <LoginInputComponent defaultValue="Password"/>
            </Column>

            <a className="font-noto text-sm ml-auto tracking-wide">
                Forgot Password?
            </a>

            {/* <Button buttonText="Sign In"/> */}

            <Divider text="Or sign in with"/>

            <Row className="justify-center items-center gap-2 w-full border border-red-950">
                <Button className="flex items-center justify-center w-full h-11 border border-green-700 font-noto text-base rounded-lg" icon={<FaGoogle/>} buttonText="Google"/>
                <Button className="flex items-center justify-center w-full h-11 border border-green-700 font-noto text-base rounded-lg" icon={<FaFacebook/>} buttonText="Facebook"/>
            </Row>
        </Column> 
      </Column>
    </>
  );
};

export default LoginPage;
