import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify ({logger: true});

server.register(cors, {
  origin: "*", // todos tem acesso
});

const teams = [
  { "id": 1, "name": "Scuderia Ferrari HP",           "base": "Maranello, Itália" },
  { "id": 2, "name": "Haas F1 Team",                  "base": "Kannapolis, EUA / Banbury, Reino Unido / Maranello, Itália" },
  { "id": 3, "name": "Mercedes-AMG Petronas F1 Team", "base": "Brackley (chassi) e Brixworth (motor), Reino Unido" },
  { "id": 4, "name": "Red Bull Racing",               "base": "Milton Keynes, Reino Unido" },
  { "id": 5, "name": "Kick Sauber F1 Team",           "base": "Hinwil, Suíça" },
];

const drivers = [
  {
    "id": 1,
    "name": "Scuderia Ferrari HP",
    "base": "Maranello, Itália",
    "drivers": ["Charles Leclerc", "Lewis Hamilton"]
  },
  {
    "id": 2,
    "name": "MoneyGram Haas F1 Team",
    "base": "Kannapolis, EUA / Banbury, Reino Unido / Maranello, Itália",
    "drivers": ["Esteban Ocon", "Oliver Bearman"]
  },
  {
    "id": 3,
    "name": "Mercedes-AMG Petronas F1 Team",
    "base": "Brackley (chassi) e Brixworth (motor), Reino Unido",
    "drivers": ["George Russell", "Andrea Kimi Antonelli"]
  },
  {
    "id": 4,
    "name": "Red Bull Racing",
    "base": "Milton Keynes, Reino Unido",
    "drivers": ["Max Verstappen", "Liam Lawson"]
  },
  {
    "id": 5,
    "name": "Kick Sauber F1 Team",
    "base": "Hinwil, Suíça",
    "drivers": ["Nico Hulkenberg", "Gabriel Bortoleto"]
  }
]

server.get("/teams", async (request, Response ) =>{
    Response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, Response) => {
    Response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
  id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", 
  async (request, Response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if(!driver) {
      Response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      Response.type("application/json").code(202);
      return { driver };
    }
  }
)

server.listen({port: 3333}, () =>{
    console.log("server init")
});