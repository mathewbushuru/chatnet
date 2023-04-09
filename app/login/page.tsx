"use client";

import Button from "@ui/Button";
import { FC, useState } from "react";
import { AirVent } from "lucide-react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 md:px-8">
        <div className="flex w-full max-w-md flex-col items-center gap-5 ">
          <div className="flex flex-col items-center">
            <AirVent />
            <h2 className="text-3-xl mt-3 text-center font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <label className="flex w-full max-w-xs flex-col text-md">
            Email
            <input
              type="text"
              placeholder="email@example.com"
              className="rounded-md  border border-slate-400 py-1 px-2 placeholder:opacity-50 placeholder:text-sm focus:outline-none" 
            />
          </label>

          <label className="flex w-full max-w-xs flex-col text-md">
            Password
            <input
              type="password"
              placeholder="password"
              className="rounded-md  border border-slate-400 py-1 px-2 placeholder:opacity-50 placeholder:text-sm focus:outline-none" 
            />
          </label>

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
