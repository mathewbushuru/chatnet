import Button from "@ui/Button";
import { db } from "@lib/db";

export default async function Home() {
  
  await db.set("hello","world")

  return (
    <main className="grid place-content-center py-5">
      ChatNet <br />
      <Button>Submit</Button>
    </main>
  );
}
