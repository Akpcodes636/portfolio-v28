"use client";
import useHash from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import { File, Home, LucideSend, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  {
    id: 1,
    name: "Home.tsx",
    path: "#home",
    icon: Home,
  },
  {
    id: 2,
    name: "About.tsx",
    path: "#about",
    icon: User,
  },
  {
    id: 3,
    name: "Projects.tsx",
    path: "#projects",
    icon: File,
  },
  {
    id: 3,
    name: "Contact-Me.tsx",
    path: "#contact",
    icon: LucideSend,
    isRight: true,
  },
];

export default function Header() {
  const { hash } = useHash();

  return (
    <div className="w-full h-12 border-b bg-muted flex items-center">
      <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">
        {/* <Image
          src="/imgs/logo.png" // Update this path to match your logo's location in the public folder
          alt="AKP Logo"
          width={24}
          height={24}
          className="object-contain"
        /> */}
        <h2>Akp</h2>
      </div>
      <div className="flex items-center size-full">
        {navItems.map((item) => {
          const isActive =
            item.path === hash || (item.path === "#home" && hash === "");
          return (
            <Link
              key={item.id}
              href={item.path}
              scroll
              className={cn(
                "relative h-full w-fit md:min-w-40 border-x flex items-center justify-start gap-2 text-muted-foreground hover:bg-background px-4",
                isActive && "text-foreground bg-background hover:bg-background",
                item.isRight && "ml-auto"
              )}
            >
              <item.icon size={14} className="text-primary-foreground" />
              <span className="hidden md:inline">{item.name}</span>{" "}
              {isActive && <BorderActive />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
    <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
  </>
);
