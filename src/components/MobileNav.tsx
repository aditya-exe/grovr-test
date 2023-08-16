"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import React, { FC } from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import ThemeSwitch from "./ui/light-mode-toggle";

interface MobileNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

const MobileNav: FC<MobileNavProps> = ({ items, children }) => {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-80 transition-all duration-3 00 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">GroVr</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
          <ThemeSwitch />
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
