import { useState } from "react";
import LoginSubPage from "./login-sub-page";
import RegisterSubPage from "./register-sub-page";
import { Toaster } from "@components/ui/toaster";
import AuthMiddleware from "src/middleware/auth-middleware";
export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [transitioning, setTransitioning] = useState(false);

  const handleModeChange = async (newMode: string) => {
    setTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setMode(newMode);
    setTransitioning(false);
  };

  const renderSubPage = () => {
    if (mode === "login") {
      return <LoginSubPage changeMode={handleModeChange} />;
    } else if (mode === "register") {
      return <RegisterSubPage changeMode={handleModeChange} />;
    }
  };
  return (
    <AuthMiddleware>
      <div className="w-screen h-screen lg:items-start lg:justify-start font-nunito flex items-center justify-center">
        <div
          className={`hidden lg:block ${
            mode === "login" ? "lg:w-[65%]" : "lg:w-[55%]"
          } lg:p-7 lg:pr-0 h-full transition-all duration-300`}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/youpi-92b43.appspot.com/o/assets%2Ffood-form.jpg?alt=media&token=13865b70-dc84-4a62-b94d-b8ba811ef19dhttps://firebasestorage.googleapis.com/v0/b/youpi-92b43.appspot.com/o/assets%2Ffood-form.jpg?alt=media&token=b24d39c0-8e4d-4a89-8f76-545d9fe38721"
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale lg:rounded-[2rem]"
          />
        </div>
        <div
          className={`flex h-full w-full items-center justify-center overflow-y-scroll ${
            mode === "login" ? "lg:w-[35%]" : "lg:w-[45%]"
          } lg:p-[5%] h-full transition-all duration-300 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {renderSubPage()}
        </div>
        <Toaster />
      </div>
    </AuthMiddleware>
  );
}
