import { type IUser } from "@/services/repositorys/user/type";

export const clients: IUser[] = [
  {
    id: 2,
    fullName: "Ana Clara Souza",
    cpf: "999.999.999-99",
    contact: { email: "anaclara@gmail.com", phoneNumber: "(11) 9 8765-4321" },
    address: { city: "São Paulo", state: "SP" }
  },
  {
    id: 3,
    fullName: "Bruno Oliveira",
    cpf: "999.999.999-99",
    contact: {
      email: "bruno.oliveira@gmail.com",
      phoneNumber: "(21) 9 1234-5678"
    },
    address: { city: "Rio de Janeiro", state: "RJ" }
  },
  {
    id: 4,
    fullName: "Carla Pereira",
    cpf: "999.999.999-99",
    contact: { email: "carla.p@gmail.com", phoneNumber: "(31) 9 9876-5432" },
    address: { city: "Belo Horizonte", state: "MG" }
  },
  {
    id: 5,
    fullName: "Daniel Costa",
    cpf: "999.999.999-99",
    contact: {
      email: "daniel.costa@yahoo.com",
      phoneNumber: "(51) 9 2345-6789"
    },
    address: { city: "Porto Alegre", state: "RS" }
  },
  {
    id: 6,
    fullName: "Eliana Silva",
    cpf: "999.999.999-99",
    contact: {
      email: "eliana.silva@hotmail.com",
      phoneNumber: "(81) 9 8765-4321"
    },
    address: { city: "Recife", state: "PE" }
  },
  {
    id: 7,
    fullName: "Fernando Lima",
    cpf: "999.999.999-99",
    contact: {
      email: "fernando.lima@outlook.com",
      phoneNumber: "(71) 9 1234-5678"
    },
    address: { city: "Salvador", state: "BA" }
  },
  {
    id: 8,
    fullName: "Gabriela Santos",
    cpf: "999.999.999-99",
    contact: {
      email: "gabriela.santos@gmail.com",
      phoneNumber: "(41) 9 2345-6789"
    },
    address: { city: "Curitiba", state: "PR" }
  },
  {
    id: 9,
    fullName: "Henrique Ferreira",
    cpf: "999.999.999-99",
    contact: {
      email: "henrique.ferreira@live.com",
      phoneNumber: "(62) 9 3456-7890"
    },
    address: { city: "Goiânia", state: "GO" }
  },
  {
    id: 10,
    fullName: "Isabela Mendes",
    cpf: "999.999.999-99",
    contact: {
      email: "isabela.mendes@gmail.com",
      phoneNumber: "(85) 9 4567-8901"
    },
    address: { city: "Fortaleza", state: "CE" }
  },
  {
    id: 11,
    fullName: "João Almeida",
    cpf: "999.999.999-99",
    contact: {
      email: "joao.almeida@yahoo.com",
      phoneNumber: "(27) 9 5678-9012"
    },
    address: { city: "Vitória", state: "ES" }
  },
  {
    id: 12,
    fullName: "Karla Rodrigues",
    cpf: "999.999.999-99",
    contact: {
      email: "karla.rodrigues@hotmail.com",
      phoneNumber: "(67) 9 6789-0123"
    },
    address: { city: "Campo Grande", state: "MS" }
  },
  {
    id: 13,
    fullName: "Lucas Souza",
    cpf: "999.999.999-99",
    contact: {
      email: "lucas.souza@gmail.com",
      phoneNumber: "(91) 9 7890-1234"
    },
    address: { city: "Belém", state: "PA" }
  },
  {
    id: 14,
    fullName: "Mariana Rocha",
    cpf: "999.999.999-99",
    contact: {
      email: "mariana.rocha@outlook.com",
      phoneNumber: "(51) 9 8901-2345"
    },
    address: { city: "Porto Alegre", state: "RS" }
  },
  {
    id: 15,
    fullName: "Nathalia Martins",
    cpf: "999.999.999-99",
    contact: {
      email: "nathalia.martins@live.com",
      phoneNumber: "(11) 9 9012-3456"
    },
    address: { city: "São Paulo", state: "SP" }
  },
  {
    id: 16,
    fullName: "Otávio Carvalho",
    cpf: "999.999.999-99",
    contact: {
      email: "otavio.carvalho@gmail.com",
      phoneNumber: "(81) 9 0123-4567"
    },
    address: { city: "Recife", state: "PE" }
  },
  {
    id: 17,
    fullName: "Patrícia Gomes",
    cpf: "999.999.999-99",
    contact: {
      email: "patricia.gomes@hotmail.com",
      phoneNumber: "(61) 9 1234-5678"
    },
    address: { city: "Brasília", state: "DF" }
  },
  {
    id: 18,
    fullName: "Renato Barbosa",
    cpf: "999.999.999-99",
    contact: {
      email: "renato.barbosa@yahoo.com",
      phoneNumber: "(13) 9 2345-6789"
    },
    address: { city: "Santos", state: "SP" }
  },
  {
    id: 19,
    fullName: "Silvia Teixeira",
    cpf: "999.999.999-99",
    contact: {
      email: "silvia.teixeira@gmail.com",
      phoneNumber: "(27) 9 3456-7890"
    },
    address: { city: "Vitória", state: "ES" }
  }
];

export const users: IUser[] = [
  {
    id: 1,
    fullName: "João Eduardo Amorim Jardim",
    cpf: "029.611.950-47",
    birthDate: "16/12/2000",
    password: "#Joao1612",
    contact: { email: "joaoeduaj@gmail.com", phoneNumber: "(51) 9 9945-9277" },
    address: { city: "Nova Santa Rita", state: "RS" },
    role: "Administrator"
  }
];
