import { getServerSession } from "next-auth";
import { authOptions } from "@lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <pre>{JSON.stringify(session,null,4)}</pre>
    </div>
  );
}
