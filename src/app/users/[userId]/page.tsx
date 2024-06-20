"use client";

import { Button, Input } from "@/components";
import { users } from "@/mock";
import { FormEventHandler, InputHTMLAttributes, useState } from "react";

interface IProps {
  params: { userId?: number };
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function UserDetails({ params }: IProps) {
  const user = users.find((user) => user.id == params.userId);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center p-4">
      <h2>Cadastro do usuário {user?.fullName}</h2>
      <form className="grid md:grid-cols-2 gap-x-6 gap-y-2" onSubmit={handleSubmit}>
        <Input label="Name" name="name" defaultValue={user?.fullName}/>
        <Input label="Id" name="Id" defaultValue={user?.id}/>
        <Input label="Cpf" name="cpf" defaultValue={user?.cpf}/>
        <Input label="birthdate" name="birthdate" defaultValue={user?.birthDate}/>
        <Input label="phone" name="phone" defaultValue={user?.contact.phoneNumber}/>
        <Input label="email" name="email" defaultValue={user?.contact.email}/>
        <Input label="city" name="city" defaultValue={user?.address.city}/>
        <Input label="state" name="state" defaultValue={user?.address.state}/>
        <Button type="submit" variant={{type: "contained"}} aditionalStyle="col-span-2">Salvar</Button>
      </form>
    </main>
  );
}

export default UserDetails;
