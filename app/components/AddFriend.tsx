"use client";
import { FC, useState } from "react";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@ui/Button";
import { addFriendValidator } from "@lib/validations/add-friend";

type FormData = z.infer<typeof addFriendValidator>;

interface AddFriendProps {}

const AddFriend: FC<AddFriendProps> = ({}) => {
  const [requestSuccessful, setRequestSuccessful] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator),
  });

  async function sendFriendRequest(email: string) {
    try {
      const validatedEmail = addFriendValidator.parse({ email });

      //todo: develop add friends api
      await axios.post("/api/friends/add", {
        email: validatedEmail,
      });

      setRequestSuccessful(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        //todo: show incorrect email error to user
        return;
      }

      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });
        //todo: show network request error to user
        return;
      }

      //todo: show toast to user
      setError("email", { message: "Something went wrong!" });
    }
  }

  const handleFormSubmission = (data: FormData) => {
    sendFriendRequest(data.email);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmission)} className="max-w-sm">
      <label className="mb-8 flex w-full flex-col text-sm font-medium leading-8 text-gray-900">
        Add friend by email
        <input
          type="text"
          placeholder="email@example.com"
          className=" w-full rounded-md border border-slate-900 p-1.5 text-sm font-normal text-gray-700 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
          {...register("email")}
        />
      </label>

      <Button>Add friend</Button>

      {/* todo: show toasts for successful or error friend requests */}
      <p className="mt-4 text-red-600">{errors.email?.message}</p>
      {requestSuccessful && (
        <p className="mt-4 text-green-600">{errors.email?.message}</p>
      )}
    </form>
  );
};

export default AddFriend;
