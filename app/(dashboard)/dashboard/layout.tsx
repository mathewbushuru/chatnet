import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AirVent,
  LucideProps,
  UserPlus,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { authOptions } from "@lib/auth";
import SignoutButton from "@/components/SignoutButton";

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

        <div className="h-full text-sm font-semibold leading-6 text-gray-600">
          <nav className="flex h-full flex-1 flex-col ">
            <ul className="flex h-full flex-1 flex-col justify-between">
              <div>
                {/* User chats  */}
                <div className="-mx-2 mb-2 text-xs font-semibold leading-6 text-gray-400">
                  My chats
                </div>
                {Array(5).fill(null).map((_: any, index: number) => (
                  <>
                    <li key={index} className="mb-5">
                      <Link href={"/dashboard"}>
                        <span className="flex items-center gap-x-2 hover:text-gray-400">
                          <>
                            <MessageCircle />
                          </>
                          Friend chat
                        </span>
                      </Link>
                    </li>
                  </>
                ))}

                {/* User actions  */}
                <li className="mt-6">
                  <div className="-mx-2 text-xs font-semibold leading-6 text-gray-400">
                    Actions
                  </div>
                  <div className="mt-2 space-y-1">
                    {sidebarOptions.map((option) => (
                      <Link href={option.href}>
                        <span
                          key={option.id}
                          className="flex items-center mb-5 gap-x-2 hover:text-gray-400"
                        >
                          <>{option.Icon}</>
                          {option.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </li>
              </div>

              {/* Profile  info  */}
              <li className="mt-6">
                <div className="-mx-2 text-xs font-semibold leading-6 text-gray-400">
                  My profile
                </div>
                <div className="mt-2 space-y-1">
                  <Link href={"/dashboard"}>
                    <span className="flex items-center mb-5 gap-x-2 hover:text-gray-400">
                      <>
                        <Settings />
                      </>
                      Settings
                    </span>
                  </Link>
                  {/* <Link href={"/"}>
                    <span className="mb-2 flex items-center gap-x-2 hover:text-gray-400">
                      <>
                        <LogOut />
                      </>
                      Log out
                    </span>
                  </Link> */}
                  <SignoutButton/>
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
