"use client";

import Button from "@ui/Button";
import { FC, useState } from "react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 md:px-8">
        <div className="flex w-full max-w-md flex-col items-center space-y-8 ">
          <div className="flex flex-col items-center gap-8">
            Logo
            <h2 className="text-3-xl mt-6 text-center font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="mx-auto w-full max-w-xs"
            onClick={loginWithGoogle}
          >
            Sign in
          </Button>

          <Button
            isLoading={isLoading}
            variant="outline"
            type="button"
            className="align-items mx-auto flex w-full max-w-xs gap-2"
            onClick={loginWithGoogle}
          >
            <img src="/google.svg" className="w-4" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
};

async function loginWithGoogle() {}

export default LoginPage;
