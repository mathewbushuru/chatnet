import AddFriend from "@/components/AddFriend";
import { FC } from "react";

const AddFriendPage: FC = ({}) => {
  return (
    <main className=" m-8 pt-8 sm:mx-12 sm:mt-0 sm:max-w-lg">
      <h1 className="bg-100 mb-8 text-4xl text-slate-900 font-bold">Add friend</h1>
      <AddFriend />
    </main>
  );
};

export default AddFriendPage;
