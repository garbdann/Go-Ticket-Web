let events = [
  {
    id: 1,
    name: "Festival de Jazz de Verão",
    date: "2025-09-06",
    time: "18:00",
    description: "Um fim de semana relaxante com bandas de jazz ao vivo, food trucks e mercados de artesanato.",
    limit: 150,
    remainingSpots: 45,
    location: "Nova Orleans, LA",
    organizer: "Companhia Musical da Cidade",
    subject: "música",
    category: "festival",
    imageUrl: "https://images.unsplash.com/photo-1549488390-349079a40536?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" 
  },
  {
    id: 2,
    name: "Conferência de Inovadores de Tecnologia",
    date: "2025-11-14",
    time: "09:30",
    description: "Junte-se a líderes da indústria para discutir o futuro da tecnologia e inovação.",
    limit: 500,
    remainingSpots: 120,
    location: "São Francisco, CA",
    organizer: "Grupo FutureTech",
    subject: "tecnologia",
    category: "conferência",
    imageUrl: "https://images.unsplash.com/photo-1517032204724-c18731383794?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
  },
  {
    id: 3,
    name: "Festa de Food Trucks",
    date: "2025-08-21",
    time: "12:00",
    description: "Experimente os melhores food trucks da cidade, com entretenimento ao vivo o dia todo.",
    limit: 300,
    remainingSpots: 80,
    location: "Austin, TX",
    organizer: "Eventos SaborFest",
    subject: "comida",
    category: "festival",
    imageUrl: "https://images.unsplash.com/photo-1555939524-ce6ef1c4636f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
  },
  {
    id: 4,
    name: "Noite de Cinema ao Ar Livre",
    date: "2025-10-18",
    time: "20:00",
    description: "Traga suas mantas e assista a filmes clássicos sob as estrelas com amigos e família.",
    limit: 200,
    remainingSpots: 15,
    location: "Denver, CO",
    organizer: "Eventos Comunitários",
    subject: "cinema",
    category: "entretenimento",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-70c86e153f3e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
  },
  {
    id: 5,
    name: "Exposição de Arte Local",
    date: "2025-12-02",
    time: "14:00",
    description: "Explore obras de talentosos artistas locais em um ambiente de galeria aconchegante.",
    limit: 100,
    remainingSpots: 25,
    location: "Portland, OR",
    organizer: "Coletivo ArtHouse",
    subject: "arte",
    category: "exposição",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e650e2bd345d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
  },
  {
    id: 6,
    name: "Corrida Beneficente Divertida",
    date: "2025-07-30",
    time: "07:00",
    description: "Corra, trote ou caminhe para apoiar instituições de caridade locais. Todas as idades são bem-vindas.",
    limit: 250,
    remainingSpots: 50,
    location: "Seattle, WA",
    organizer: "Fundação CorreParaOBem",
    subject: "corrida",
    category: "beneficente",
    imageUrl: "https://images.unsplash.com/photo-1552670055-667950c059be?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
  }
];

let users = [
  {
    id: 1,
    username: "MagoGordinho69",
    email: "mago@bootyclap.io",
    password: "abrakadabooty"
  },
  {
    id: 2,
    username: "SugadorDePésElite",
    email: "pesupremo@fetlife.biz",
    password: "licklevel9000"
  },
  {
    id: 3,
    username: "MestreDaMasmorraPapai",
    email: "domina8@rollinitiative.xxx",
    password: "nat20submission"
  },
  {
    id: 4,
    username: "AmanteDeLatex420",
    email: "borracha@ajusteperfeito.club",
    password: "slipperyszn"
  },
  {
    id: 5,
    username: "CertificadoMordedor",
    email: "comecerto@delulu.org",
    password: "sheatefrfr"
  },
  {
    id: 6,
    username: "FotosDePésAmaldiçoados",
    email: "joanetes@onlytoes.co",
    password: "feet4satan"
  },
  {
    id: 7,
    username: "gege",
    email: "gege",
    password: "gege"
  }
];

export const getEvents = () => events;

export function addUser(newUserData) {
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const userToAdd = {
    id: newId,
    username: newUserData.username,
    email: newUserData.email,
    password: newUserData.password
  };
  users.push(userToAdd);
}

export function addEvent(newEventData) {
  const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
  
  const eventToAdd = {
    id: newId,
    name: newEventData.name,
    date: newEventData.date,
    time: newEventData.time || "00:00", // valor padrão se não informado
    description: newEventData.description,
    limit: Number(newEventData.limit),
    remainingSpots: Number(newEventData.limit),
    location: newEventData.location,
    organizer: "Usuário Criador",
    subject: newEventData.subject,
    category: newEventData.category,
    imageUrl: newEventData.imageUrl || null,
  };

  events.push(eventToAdd);
  console.log("Evento Adicionado (temporariamente):", eventToAdd);
  console.log("Todos os Eventos (temporariamente):", events);
}

export function authenticateUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}
