"use client";

import { Button, Input } from "@/components";
import { clients } from "@/mock";

interface IProps {
  params: { clientId?: number };
}

function UserDetails({ params }: IProps) {
  const user = clients.find((client) => client.id == params.clientId);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center p-4">
      <h2 className="font-extrabold text-xl text-gray-900 dark:text-gray-200">Cadastro do usuário {user?.fullName}</h2>
      <form
        className="grid gap-x-6 gap-y-2 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <Input label="Name" name="name" defaultValue={user?.fullName} />
        <Input label="Id" name="Id" defaultValue={user?.id} disabled />
        <Input label="Cpf" name="cpf" defaultValue={user?.cpf} />
        <Input
          label="birthdate"
          name="birthdate"
          defaultValue={user?.birthDate}
        />
        <Input
          label="phone"
          name="phone"
          defaultValue={user?.contact.phoneNumber}
        />
        <Input label="email" name="email" defaultValue={user?.contact.email} />
        <Input label="city" name="city" defaultValue={user?.address.city} />
        <Input label="state" name="state" defaultValue={user?.address.state} />
        <div className="col-span-2 flex gap-8 mt-4">
          <Button type="submit" variant={{ type: "contained" }}>
            Salvar
          </Button>
          <Button type="reset" variant={{ type: "contained", color: "warning" }}>
            Cancelar
          </Button>
          <Button variant={{ type: "contained", color: "error" }}>Delete</Button>
        </div>
      </form>
    </main>
  );
}

export default UserDetails;
