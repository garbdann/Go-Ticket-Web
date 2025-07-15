const events = [
  {
    id: 1,
    name: "Summer Jazz Festival",
    date: "2025-09-06",
    description: "A relaxing weekend with live jazz bands, food trucks, and artisan markets.",
    limit: 150,
    remainingSpots: 45,
    location: "New Orleans, LA",
    organizer: "City Music Co."
  },
  {
    id: 2,
    name: "Tech Innovators Conference",
    date: "2025-11-14",
    description: "Join industry leaders to discuss the future of technology and innovation.",
    limit: 500,
    remainingSpots: 120,
    location: "San Francisco, CA",
    organizer: "FutureTech Group"
  },
  {
    id: 3,
    name: "Food Truck Fiesta",
    date: "2025-08-21",
    description: "Sample the best food trucks from around the city, with live entertainment all day.",
    limit: 300,
    remainingSpots: 80,
    location: "Austin, TX",
    organizer: "TasteFest Events"
  },
  {
    id: 4,
    name: "Outdoor Movie Night",
    date: "2025-10-18",
    description: "Bring your blankets and watch classic movies under the stars with friends and family.",
    limit: 200,
    remainingSpots: 15,
    location: "Denver, CO",
    organizer: "Community Events"
  },
  {
    id: 5,
    name: "Local Art Exhibit",
    date: "2025-12-02",
    description: "Explore works from talented local artists in a cozy gallery setting.",
    limit: 100,
    remainingSpots: 25,
    location: "Portland, OR",
    organizer: "ArtHouse Collective"
  },
  {
    id: 6,
    name: "Charity Fun Run",
    date: "2025-07-30",
    description: "Run, jog, or walk to support local charities. All ages welcome.",
    limit: 250,
    remainingSpots: 50,
    location: "Seattle, WA",
    organizer: "RunForGood Foundation"
  }
];

const users = [
    {
      id: 1,
      username: "ThiccWizard69",
      email: "wizard@bootyclap.io",
      password: "abrakadabooty"
    },
    {
      id: 2,
      username: "ToeSuckerElite",
      email: "toesupreme@fetlife.biz",
      password: "licklevel9000"
    },
    {
      id: 3,
      username: "DaddyDungeonMaster",
      email: "domin8@rollinitiative.xxx",
      password: "nat20submission"
    },
    {
      id: 4,
      username: "LatexLover420",
      email: "rubber@tightfit.club",
      password: "slipperyszn"
    },
    {
      id: 5,
      username: "MunchCertified",
      email: "eatheright@delulu.org",
      password: "sheatefrfr"
    },
    {
      id: 6,
      username: "CursedFeetPics",
      email: "bunions@onlytoes.co",
      password: "feet4satan"
    },
    {
      id: 7,
      username: "gege",
      email: "gege",
      password: "gege"
    }
];

export function addUser(user) {
  users.push(user);
}

export function addEvent(event) {
  events.push(event);
}
  
export function authenticateUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}