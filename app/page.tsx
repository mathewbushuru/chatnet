import Link from "next/link";

import Button from "@ui/Button";
import { db } from "@lib/db";

export default async function Home() {
  
  // await db.set("hello","world")

  return (
    <main className="grid place-content-center py-5 text-center">
      ChatNet <br />
      <Button className="mt-3">
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}
