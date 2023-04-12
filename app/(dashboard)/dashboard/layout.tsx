import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AirVent, LucideProps, UserPlus, MessageCircle } from "lucide-react";
import { authOptions } from "@lib/auth";

type SidebarOption = {
  id: number;
  name: string;
  href: string;
  Icon: LucideProps;
};

const sidebarOptions: SidebarOption[] = [
  { id: 1, name: "Add friend", href: "/dashboard/add", Icon: <UserPlus /> },
];

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  return (
    <div className="flex h-screen w-full ">
      {/* Sidebar  */}
      <div className="hidden h-full w-full  max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 py-8  sm:flex">
        <Link href="/dashboard" className="flex w-full shrink-0 justify-start">
          <AirVent className="h-14 w-auto text-slate-900" />
        </Link>

        <div className="text-sm font-semibold leading-6 text-gray-600">
          <span className="-mx-2 text-xs font-semibold text-gray-400">
            Your chats
          </span>
          <nav className="mt-2 flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-6">
              <li>
                <Link href={"/dashboard"}>
                  <span className="flex items-center gap-x-2 hover:text-gray-400">
                    <>
                      <MessageCircle />
                    </>
                    User chat 1
                  </span>
                </Link>
              </li> 
              <li>
                <Link href={"/dashboard"}>
                  <span className="flex items-center gap-x-2 hover:text-gray-400">
                    <>
                      <MessageCircle />
                    </>
                    User chat 2
                  </span>
                </Link>
              </li> 
              <li>
                <Link href={"/dashboard"}>
                  <span className="flex items-center gap-x-2 hover:text-gray-400">
                    <>
                      <MessageCircle />
                    </>
                    User chat 3
                  </span>
                </Link>
              </li> 
              <li>
                <Link href={"/dashboard"}>
                  <span className="flex items-center gap-x-2 hover:text-gray-400">
                    <>
                      <MessageCircle />
                    </>
                    User chat 4
                  </span>
                </Link>
              </li> 
              <li>
                <Link href={"/dashboard"}>
                  <span className="flex items-center gap-x-2 hover:text-gray-400">
                    <>
                      <MessageCircle />
                    </>
                    User chat 5
                  </span>
                </Link>
              </li> 

              <li className="">
                <div className="-mx-2 text-xs font-semibold leading-6 text-gray-400">
                  Actions
                </div>
                <div className="mt-2 space-y-1">
                  {sidebarOptions.map((option) => (
                    <Link href={option.href}>
                      <span
                        key={option.id}
                        className="flex items-center gap-x-2 hover:text-gray-400"
                      >
                        <>{option.Icon}</>
                        {option.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Content  */}
      <div className="grow">{children}</div>
    </div>
  );
};

export default Layout;
