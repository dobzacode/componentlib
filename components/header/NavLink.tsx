"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: string;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={` hover:bg-black hover:text-white px-8 py-4 rounded-lg duration-medium ease-in`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
