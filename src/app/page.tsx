import { TD, TH } from "@/components";
import { clients } from "@/mock";

const Home = () => (
  <main className="flex flex-col items-center p-4">
    <h2>Tabela de clientes</h2>
    <table>
      <thead>
        <tr>
          <TH>Nome</TH>
          <TH variant={{ type: "hiddenMD" }}>CPF</TH>
          <TH>Contato</TH>
          <TH variant={{ type: "hiddenSM" }}>Endereço</TH>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => (
          <tr key={index}>
            <TD>{client.fullName}</TD>
            <TD variant={{ type: "hiddenMD" }}>{client.cpf ?? ""}</TD>
            <TD>{client.contact.email}</TD>
            <TD
              variant={{ type: "hiddenSM" }}
            >{`${client.address.state} / ${client.address.city}`}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default Home;
