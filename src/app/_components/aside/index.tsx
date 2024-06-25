"use client";

import { useRef, useState } from "react";
import {
  Logout,
  ManageAccountsOutlined,
  PeopleAltOutlined
} from "@mui/icons-material";
import { Button, ToogleThemeButton } from "@/components";
import { usePathname, useRouter } from "next/navigation";

export function Aside() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <></>;
  }

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [opened, setOpened] = useState(false);

  function toggleNavVisible() {
    if (menuButtonRef.current != null) {
      const classList = menuButtonRef.current.classList;
      classList.toggle("is-active");
      setOpened((prev) => !prev);
    }
  }
  return (
    <aside
      className={`absolute right-0 top-0 flex h-screen flex-col justify-between ${opened ? "w-60 px-4" : "w-0"} bg-primary-200 pb-4 pt-12 dark:bg-primary-1000`}
    >
      <button
        ref={menuButtonRef}
        onClick={toggleNavVisible}
        className="hamb--squeeze absolute -right-1 top-3 z-50 mr-4 h-6 w-7 cursor-pointer transition-all duration-1000 hover:opacity-90 "
        type="button"
      >
        <span className="hamb-box cursor-pointer">
          <span className="hamb-inner cursor-pointer"></span>
        </span>
      </button>
      <Nav />
      <ToogleThemeButton />
    </aside>
  );
}

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav>
      {pathname !== "/users" && (
        <Button
          variant={{ type: "text" }}
          onClick={() => {
            router.push("/users");
          }}
        >
          Listagem de Usuáros <PeopleAltOutlined fontSize="small" />
        </Button>
      )}
      {pathname !== "/clients" && (
        <Button
          variant={{ type: "text" }}
          onClick={() => {
            router.push("/clients");
          }}
        >
          Listagem de Clientes <ManageAccountsOutlined fontSize="small" />
        </Button>
      )}
      <Button
        variant={{ type: "text" }}
        onClick={() => {
          router.push("/");
        }}
      >
        Sair <Logout fontSize="small" />
      </Button>
    </nav>
  );
};
