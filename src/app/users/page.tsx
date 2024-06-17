import { TD, TH } from "@/components";
import { users } from "@/mock";

const Users = () => (
  <main className="flex flex-col items-center p-4">
    <h2>Tabela de clientes</h2>
    <table>
      <thead>
        <tr>
          <TH>Nome</TH>
          <TH>Contato</TH>
          <TH variant={{ type: "hiddenSM" }}>Endereço</TH>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <TD>{user.fullName}</TD>
            <TD>{user.contact.email}</TD>
            <TD
              variant={{ type: "hiddenSM" }}
            >{`${user.address.state} / ${user.address.city}`}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default Users;
