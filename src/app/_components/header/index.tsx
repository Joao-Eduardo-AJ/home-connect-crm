"use client";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <></>;
  }
  return (
    <header className="bg-primary-200 px-8 text-primary-1000 dark:bg-primary-1000 dark:text-primary-100 md:py-2 ">
      <h1 className="text-xl font-bold">HomeConnect CRM</h1>
    </header>
  );
};
