import AddFriend from "@/components/AddFriend";
import { FC } from "react";

const AddFriendPage: FC = ({}) => {
  return (
      <main className=" pt-8 m-8">
        <h1 className="bg-100 mb-8 text-4xl font-bold">Add friend</h1>
        <AddFriend/>
      </main>
  );
};

export default AddFriendPage;
