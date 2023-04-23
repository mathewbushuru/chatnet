import AcceptFriends from "@/components/AcceptFriends";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/auth";
import { notFound } from "next/navigation";

const AddFriendPage = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  return (
    <main className=" m-8 pt-8 sm:mx-12 sm:mt-0 sm:max-w-lg">
      <h1 className="bg-100 mb-8 text-4xl font-bold text-slate-900">
        Accept friend requests
      </h1>
      <AcceptFriends sessionId={session.user.id} />
    </main>
  );
};

export default AddFriendPage;
