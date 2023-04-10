"use client";
import { FC } from "react";
import Button from "@ui/Button";

interface AddFriendProps {}

const AddFriend: FC<AddFriendProps> = ({}) => {
  return (
    <>
      <form className="max-w-sm">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Add friend by email{" "}
        </label>
        <div className="mt-2 flex flex-col gap-6">
          <input
            type="text"
            name="friendEmail"
            id="email"
            placeholder="email@example.com"
            className="block w-full rounded-md border-0 p-1.5 text-indigo-950 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-950"
          />
          <Button>Add friend</Button>
        </div>
      </form>
    </>
  );
};

export default AddFriend;
