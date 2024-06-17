import { TD, TH } from "@/components";
import { IconButton } from "@/components/icon-button";
import { users } from "@/mock";
import { EditOutlined } from "@mui/icons-material";

const Users = () => (
  <main className="flex flex-col items-center p-4">
    <h2>Tabela de usuários</h2>
    <table>
      <thead>
        <tr>
          <TH>Nome</TH>
          <TH>Contato</TH>
          <TH variant={{ type: "hiddenSM" }}>Endereço</TH>
          <TH />
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
            <TD>
              <IconButton>
                <EditOutlined fontSize="small"/>
              </IconButton>
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default Users;
