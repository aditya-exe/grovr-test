"use client";

import { FC } from "react";
import { Icons } from "./Icons";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { useState } from "react";
import MobileNav from "./MobileNav";

interface NavbarProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ items, children }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 z-50">
      <Link
        href="/"
        className="hidden items-center space-x-2 md:flex text-lg hover:text-violet-500"
      >
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">GroVr</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={cn(
                "flex items-center hover:text-violet-500 text-lg font-medium transition-colors hover:underline hover:underline-offset-2 sm:text-sm"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center md:hidden space-x-2"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {mobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
};

export default Navbar;
