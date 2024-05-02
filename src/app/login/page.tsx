import { FloatingBalls } from "@/components/floating-ball";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";

const Login = () => (
  <main className="flex h-svh items-center justify-between text-gray-800">
    <FloatingBalls />
    <section className="grid w-full max-w-lg gap-4 rounded-lg bg-background-light p-4 text-sm text-text-900 dark:bg-background-dark dark:text-text-300 esm:mx-14 esm:p-8 esm:text-base esm:shadow-2xl sm:ml-[10%] md:mx-auto">
      <h1 className="text-3xl font-bold esm:text-4xl">Login</h1>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" />
      <label className="flex gap-2 text-gray-400">
        <input type="checkbox" defaultChecked />
        <p>Manter conectado</p>
      </label>
      <button className="rounded-lg bg-primary-600 p-2 text-lg text-text-100 dark:bg-primary-900 dark:text-text-300 esm:p-4 esm:text-xl">
        Entrar
      </button>
      <Link href="/">Home</Link>
    </section>
    <section className="relative -z-20 flex h-full w-0 max-w-lg flex-col gap-4 bg-primary-200 text-primary-900 dark:bg-primary-900 dark:text-primary-100 lg:w-full lg:pl-8 lg:pr-32 lg:pt-32">
      <h2 className="text-4xl font-semibold">
        Por que escolher a Home Connect?
      </h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam
        placeat ea nesciunt deleniti excepturi, vitae saepe magni libero alias
        dolorum similique ipsam, possimus facilis reprehenderit qui magnam quod
        quaerat.
      </p>
      <Image
        src="/images/login.svg"
        alt=""
        width={480}
        height={480}
        className="absolute -left-20 bottom-4"
      />
    </section>
  </main>
);

export default Login;
