"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { FC } from "react";
import { toast } from "react-hot-toast";

interface SignoutButtonProps {}

const SignoutButton: FC<SignoutButtonProps> = ({}) => {
  return (
    <span
      className="mb-2 flex cursor-pointer items-center gap-x-2 hover:text-gray-400"
      onClick={async () => {
        try {
          await signOut();
        } catch (error) {
          toast.error("There was a problem signing  out");
        }
      }}
    >
      <LogOut />
      Log out
    </span>
  );
};

export default SignoutButton;
