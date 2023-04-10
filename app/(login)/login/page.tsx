"use client";

import Button from "@ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { AirVent } from "lucide-react";
import { toast } from "react-hot-toast";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);

  async function loginWithGoogle() {
    try {
      setIsLoadingGoogle(true);
      await signIn("google");
    } catch (error) {
      toast.error("Sign in failed! Try again");
    } finally {
      setIsLoadingGoogle(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 md:px-8">
        <div className="flex w-full max-w-md flex-col items-center gap-5 ">
          <div className="flex flex-col items-center">
            <AirVent />
            <h2 className="text-3-xl mt-3 text-center font-bold tracking-tight text-slate-900">
              Sign in to your account
            </h2>
          </div>

          <label className="text-md leading-8 flex w-full max-w-xs flex-col">
            Email
            <input
              type="text"
              placeholder="email@example.com"
              className="rounded-md border border-slate-900 p-1.5 text-sm text-gray-700 placeholder:text-sm placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </label>

          <label className="text-md leading-8 flex w-full max-w-xs flex-col">
            Password
            <input
              type="password"
              placeholder="password"
              className="rounded-md border border-slate-900 p-1.5 text-sm text-gray-700 placeholder:text-sm placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </label>

          <Button
            isLoading={isLoading}
            type="button"
            className="mx-auto w-full max-w-xs"
            onClick={loginWithGoogle}
            isDisabled={true}
          >
            Sign in with email
          </Button>

          <Button
            isLoading={isLoadingGoogle}
            variant="outline"
            type="button"
            className="align-items mx-auto flex w-full max-w-xs gap-2"
            onClick={loginWithGoogle}
          >
            {!isLoadingGoogle && (
              <img
                src="/google.svg"
                width="16px"
                height="16px"
                className="w-4"
              />
            )}
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
