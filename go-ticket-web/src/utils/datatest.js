let events = [
  {
    id: 1,
    name: "Festival de Jazz de Verão",
    date: "2025-09-06",
    time: "18:00",
    description: "Um fim de semana relaxante com bandas de jazz ao vivo, food trucks e mercados de artesanato.",
    limit: 150,
    location: "Nova Orleans, LA",
    organizer: "Companhia Musical da Cidade",
    subject: "Música",
    category: "Festival",
    imageUrl: "https://vidasemparedes.com.br/wp-content/uploads/2017/07/Vida-sem-Paredes-S%C3%A3o-Louren%C3%A7o-Jazz-e-Blues-6.jpg"
  },
  {
    id: 2,
    name: "Conferência de Inovadores de Tecnologia",
    date: "2025-11-14",
    time: "09:30",
    description: "Junte-se a líderes da indústria para discutir o futuro da tecnologia e inovação.",
    limit: 500,
    location: "São Francisco, CA",
    organizer: "Grupo FutureTech",
    subject: "Tecnologia",
    category: "Conferência",
    imageUrl: "https://www.folhadevalinhos.com.br/wp-content/uploads/2025/06/20250618_fotoestande-2048x1536-1-1024x768-1.jpg"
  },
  {
    id: 3,
    name: "Festa de Food Trucks",
    date: "2025-08-21",
    time: "12:00",
    description: "Experimente os melhores food trucks da cidade, com entretenimento ao vivo o dia todo.",
    limit: 300,
    location: "Austin, TX",
    organizer: "Eventos SaborFest",
    subject: "Comida",
    category: "Festival",
    imageUrl: "https://thumbs.dreamstime.com/b/caminh%C3%A3o-mexicano-do-alimento-marisco-108502673.jpg"
  },
  {
    id: 4,
    name: "Noite de Cinema ao Ar Livre",
    date: "2025-10-18",
    time: "20:00",
    description: "Traga suas mantas e assista a filmes clássicos sob as estrelas com amigos e família.",
    limit: 200,
    location: "Denver, CO",
    organizer: "Eventos Comunitários",
    subject: "Cinema",
    category: "Entretenimento",
    imageUrl: "https://cdn.folhape.com.br/img/c/800/600/dn_arquivo/2019/12/cinema.jpg"
  },
  {
    id: 5,
    name: "Exposição de Arte Local",
    date: "2025-12-02",
    time: "14:00",
    description: "Explore obras de talentosos artistas locais em um ambiente de galeria aconchegante.",
    limit: 100,
    location: "Portland, OR",
    organizer: "Coletivo ArtHouse",
    subject: "Arte",
    category: "Exposição",
    imageUrl: "https://guiadavila.tudoeste.com.br/wp-content/files/sites/6/2019/09/kobra-exp-5.jpg"
  },
  {
    id: 6,
    name: "Corrida Beneficente Divertida",
    date: "2025-07-30",
    time: "07:00",
    description: "Corra, trote ou caminhe para apoiar instituições de caridade locais. Todas as idades são bem-vindas.",
    limit: 250,
    location: "Seattle, WA",
    organizer: "Fundação CorreParaOBem",
    subject: "Corrida",
    category: "Beneficente",
    imageUrl: "https://www.sesc-rs.com.br/wp-content/uploads/2024/07/circuito-corrida.jpg"
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

export const filterEventsByCategory = (category) => {
  if (!category || category === '') {
    return events;
  }
  return events.filter(event => event.category === category);
};

export const filterEventsBySubject = (subject) => {
  if (!subject || subject === '') {
    return events;
  }
  return events.filter(event => event.subject === subject);
};

export const filterEventsByDate = (dateString) => {
  if (!dateString || dateString === '') {
    return events;
  }
  return events.filter(event => event.date === dateString);
};

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
    time: newEventData.time || "00:00",
    description: newEventData.description,
    limit: Number(newEventData.limit),
    remainingSpots: Number(newEventData.limit),
    location: newEventData.location,
    organizer: newEventData.organizer,
    subject: newEventData.subject,
    category: newEventData.category,
    imageUrl: newEventData.imageUrl || null,
  };

  events.push(eventToAdd);
}

export function authenticateUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}

export function getUpcomingEvents() {
  const now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);

  const futureEvents = events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.time}`);
    eventDateTime.setSeconds(0);
    eventDateTime.setMilliseconds(0);

    return eventDateTime.getTime() >= now.getTime();
  });

  futureEvents.sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.time}`);
    const dateTimeB = new Date(`${b.date}T${b.time}`);
    return dateTimeA.getTime() - dateTimeB.getTime();
  });

  return futureEvents.slice(0, 3);
}