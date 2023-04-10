"use client";
import { FC } from "react";
import Button from "@ui/Button";

interface AddFriendProps {}

const AddFriend: FC<AddFriendProps> = ({}) => {
  return (
    <>
      <form className="max-w-sm">
        <label className="mb-8 flex w-full flex-col text-sm font-medium leading-8 text-gray-900">
          Add friend by email
          <input
            type="text"
            placeholder="email@example.com"
            className=" w-full rounded-md border border-slate-900 p-1.5 text-sm font-normal text-gray-700 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </label>

        <Button>Add friend</Button>
      </form>
    </>
  );
};

export default AddFriend;
