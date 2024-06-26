"use client"

import { TD, TH } from "@/components";
import { IconButton } from "@/components/icon-button";
import { clients } from "@/mock";
import { EditOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Clients = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center p-4">
      <h2>Tabela de clientes</h2>
      <table>
        <thead>
          <tr>
            <TH>Nome</TH>
            <TH variant={{ type: "hiddenMD" }}>CPF</TH>
            <TH>Contato</TH>
            <TH variant={{ type: "hiddenSM" }}>Endereço</TH>
            <TH />
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <TD>{client.fullName}</TD>
              <TD variant={{ type: "hiddenMD" }}>{client.cpf ?? ""}</TD>
              <TD>{client.contact.email}</TD>
              <TD>{`${client.address.state} / ${client.address.city}`}</TD>
              <TD>
                <IconButton onClick={() => router.push(`clients/${client.id}`)}>
                  <EditOutlined fontSize="small" />
                </IconButton>
              </TD>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Clients;
