"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";

const MainNav = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Hoodies",
        active: pathname === "/categories/hoodies",
        href: "/categories/hoodies",
      },
      {
        label: "T-shirts",
        active: pathname === "/categories/t-shirts",
        href: "/categories/t-shirts",
      },
    ],
    [pathname]
  );
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md font-medium transition-colors hover:bg-gray-700 px-4 py-2 m-0 rounded-md",
            route.active ? "text-white" : "text-gray-300"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
