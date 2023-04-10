import { getServerSession } from "next-auth";
import { authOptions } from "@lib/auth";
import { addFriendValidator } from "@lib/validations/add-friend";
import { fetchRedis } from "@lib/helpers/redis";
import { db } from "@lib/db";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email: requestedFriendEmail } = addFriendValidator.parse(
      body.email
    );

    // Find user's id from their email
    const requestedFriendId = (await fetchRedis(
      "get",
      `user:email:${requestedFriendEmail}`
    )) as string;

    // Find user's id from their email
    // const RESTResponse = await fetch(
    //   `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${requestedFriendEmail}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    //     },
    //     cache: "no-store",
    //   }
    // );

    // const data = (await RESTResponse.json()) as { result: string };

    // const requestedFriendId = data.result; 
    if (!requestedFriendId) {
      return new Response("This person does not exist", { status: 400 });
    }

    const requestSendersSession = await getServerSession(authOptions);
    if (!requestSendersSession) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (requestedFriendId === requestSendersSession.user.id) {
      return new Response("You cannot add yourself as a friends", {
        status: 400,
      });
    }

    // prevent adding user with pending friend request
    const isAlreadyAdded = (await fetchRedis(
      "sismember",
      `user:${requestedFriendId}:incoming_friend_requests`,
      requestSendersSession.user.id
    )) as 0 | 1;

    if (isAlreadyAdded) {
      return new Response("Already sent friend request", { status: 400 });
    }

    // prevent adding user already in friend list
    const isFriendAlready = (await fetchRedis(
      "sismember",
      `user:${requestSendersSession.user.id}:friends`,
      requestedFriendId
    )) as 0 | 1;

    if (isFriendAlready) {
      return new Response("Already friends with this user", { status: 400 });
    }

    // valid - send friend request
    db.sadd(
      `user:${requestedFriendId}:incoming_friend_requests`,
      requestSendersSession.user.id
    );
    return new Response("Friend request sent!");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request payload", { status: 422 }); // unprocessable  entity
    }

    return new Response("Invalid request", { status: 400 });
    // return new Response(`${error}`, { status: 400 });
  }
}
