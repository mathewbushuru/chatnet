import AddFriend from "@/components/AddFriend";
import { FC } from "react";

const AddFriendPage: FC = ({}) => {
  return (
    <main className=" m-8 pt-8 sm:mx-auto sm:mt-12 sm:max-w-lg sm:pt-0">
      <h1 className="bg-100 mb-8 text-4xl font-bold">Add friend</h1>
      <AddFriend />
    </main>
  );
};

export default AddFriendPage;
