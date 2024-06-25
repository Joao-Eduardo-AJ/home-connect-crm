"use client";

import { Button } from "@/components/button";
import { FloatingBalls } from "@/app/_components/floating-ball";
import { Input, ToogleThemeButton } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <main className="relative flex h-svh items-center justify-between overflow-hidden text-gray-800">
      <FloatingBalls />
      <section className="grid w-full max-w-lg gap-4 rounded-lg bg-background-light p-4 text-sm text-primary-900 dark:bg-background-dark dark:text-gray-100 esm:mx-14 esm:p-8 esm:text-base esm:shadow-2xl sm:ml-[10%] md:mx-auto">
        <h2 className="text-3xl font-bold esm:text-4xl">Login</h2>
        <Input label="Email" placeholder="Digite seu email" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <label className="flex gap-2 text-gray-400">
          <input type="checkbox" defaultChecked />
          <p>Manter conectado</p>
        </label>
        <Button
          variant={{ type: "contained" }}
          onClick={() => router.push("/clients")}
        >
          Entrar
        </Button>
        <div className="flex justify-between">
          <p className="text-sm italic text-gray-600">
            Para cadastro, consulte seu gestor.
          </p>
          <ToogleThemeButton variant={{ type: "login" }} />
        </div>
      </section>
      <aside className="relative -z-20 flex h-full w-0 max-w-lg flex-col gap-4 overflow-hidden bg-primary-200 text-primary-900 dark:bg-primary-1000 dark:text-primary-200 lg:w-full lg:pl-8 lg:pr-32 lg:pt-32">
        <h2 className="text-4xl font-semibold">
          Por que escolher a Home Connect?
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          totam placeat ea nesciunt deleniti excepturi, vitae saepe magni libero
          alias dolorum similique ipsam, possimus facilis reprehenderit qui
          magnam quod quaerat.
        </p>
        <Image
          src="/images/login.svg"
          alt=""
          width={470}
          height={470}
          className="absolute -left-20 bottom-4 h-auto w-auto"
          priority
        />
      </aside>
    </main>
  );
};

export default Login;
