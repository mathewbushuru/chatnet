// "use client";
import { useState } from "react";
import { fetchRedis } from "@lib/helpers/redis";

interface AcceptFriendsProps {
  sessionId: string;
}

const AcceptFriends = async ({ sessionId }: AcceptFriendsProps) => {
  //   const [friendRequests, setFriendRequests] = useState();

  const friendRequests = await fetchRedis(
    "smembers",
    `user:${sessionId}:incoming_friend_requests`
  );

  console.log(friendRequests);

  return (
    <div>
      sessionId : {sessionId}
      <br />
      <br />
      friend requests count: {friendRequests.length}
      <br />
      <br />
      Session IDs of users requesting to be friend
      {friendRequests.map((request: string, index: number) => {
        return <p key="index">- {request}</p>;
      })}
    </div>
  );
};

export default AcceptFriends;
