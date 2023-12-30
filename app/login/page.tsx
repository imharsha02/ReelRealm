"use client";
import { useState } from "react";
import TopBar from "./components/TopBar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoginForm from "../ui/LoginForm";

const LoginPage = () => {
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);
  return (
    <div>
      <TopBar />
      <LoginForm
        loginButtonClicked={loginButtonClicked}
        setLoginButtonClicked={setLoginButtonClicked}
      />
      {loginButtonClicked && (
        <div className="flex flex-col items-center justify-center p-4">
          <AiOutlineLoading3Quarters className="animate-spin w-32 h-32 mx-auto" />
          <p className="p-4 text-lg">Signing in...</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
