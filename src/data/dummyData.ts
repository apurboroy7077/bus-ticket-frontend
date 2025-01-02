export const dummyUsers = [
  {
    username: "john_doe1",
    email: "john.doe1@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4a",
    role: "user",
    createdAt: 1735689600000,
    updatedAt: 1735689600000,
  },
  {
    username: "john_doe2",
    email: "john.doe2@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4b",
    role: "admin",
    createdAt: 1735689601000,
    updatedAt: 1735689601000,
  },
  {
    username: "john_doe3",
    email: "john.doe3@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4c",
    role: "user",
    createdAt: 1735689602000,
    updatedAt: 1735689602000,
  },
  {
    username: "john_doe4",
    email: "john.doe4@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4d",
    role: "admin",
    createdAt: 1735689603000,
    updatedAt: 1735689603000,
  },
  {
    username: "john_doe5",
    email: "john.doe5@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4e",
    role: "user",
    createdAt: 1735689604000,
    updatedAt: 1735689604000,
  },
  {
    username: "john_doe6",
    email: "john.doe6@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4f",
    role: "admin",
    createdAt: 1735689605000,
    updatedAt: 1735689605000,
  },
  {
    username: "john_doe7",
    email: "john.doe7@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4g",
    role: "user",
    createdAt: 1735689606000,
    updatedAt: 1735689606000,
  },
  {
    username: "john_doe8",
    email: "john.doe8@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4h",
    role: "admin",
    createdAt: 1735689607000,
    updatedAt: 1735689607000,
  },
  {
    username: "john_doe9",
    email: "john.doe9@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4i",
    role: "user",
    createdAt: 1735689608000,
    updatedAt: 1735689608000,
  },
  {
    username: "john_doe10",
    email: "john.doe10@example.com",
    password: "$2b$10$E4wvZf.l7/mtLt5tDbQQCuEY1CqtJjqUnkzBEBJksysQcHbrcGh4j",
    role: "admin",
    createdAt: 1735689609000,
    updatedAt: 1735689609000,
  },
];
export const dummyBuses = [
  {
    name: "Express Line 42",
    description: "A fast and comfortable bus with Wi-Fi and air conditioning.",
    capacity: 50,
    departureTime: 1735693200000, // Example departure timestamp (2025-01-01T02:00:00Z)
    ticketPrice: 25, // Ticket price for the bus
    createdAt: 1735689600000, // Example timestamp (2025-01-01T00:00:00Z)
    updatedAt: 1735689600000, // Example timestamp (2025-01-01T00:00:00Z)
  },
  {
    name: "City Route 8",
    description: "Local route with frequent stops and comfortable seating.",
    capacity: 40,
    departureTime: 1735696800000, // Example departure timestamp (2025-01-01T03:00:00Z)
    ticketPrice: 15, // Ticket price for the bus
    createdAt: 1735689601000,
    updatedAt: 1735689601000,
  },
  {
    name: "Intercity Express 15",
    description:
      "A non-stop service connecting major cities with high-speed travel.",
    capacity: 60,
    departureTime: 1735700400000, // Example departure timestamp (2025-01-01T04:00:00Z)
    ticketPrice: 35, // Ticket price for the bus
    createdAt: 1735689602000,
    updatedAt: 1735689602000,
  },
  {
    name: "Tourist Bus 100",
    description:
      "Specialized bus for city tours with panoramic windows and guides.",
    capacity: 30,
    departureTime: 1735704000000, // Example departure timestamp (2025-01-01T05:00:00Z)
    ticketPrice: 40, // Ticket price for the bus
    createdAt: 1735689603000,
    updatedAt: 1735689603000,
  },
  {
    name: "Night Shuttle 101",
    description:
      "A late-night shuttle service for airport and hotel transfers.",
    capacity: 20,
    departureTime: 1735707600000, // Example departure timestamp (2025-01-01T06:00:00Z)
    ticketPrice: 50, // Ticket price for the bus
    createdAt: 1735689604000,
    updatedAt: 1735689604000,
  },
];
export const dummyTickets = [
  {
    busId: "60d3b41abdacab002f8b67d7", // Example ObjectId reference to the bus
    userId: "60d3b41abdacab002f8b67d8", // Example ObjectId reference to the user (optional)
    price: 25,
    departureTime: 1735693200000, // Example departure timestamp (2025-01-01T02:00:00Z)
    createdAt: 1735689600000, // Example timestamp (2025-01-01T00:00:00Z)
    updatedAt: 1735689600000, // Example timestamp (2025-01-01T00:00:00Z)
  },
  {
    busId: "60d3b41abdacab002f8b67d9",
    userId: "60d3b41abdacab002f8b67d9",
    price: 30,
    departureTime: 1735696800000, // Example departure timestamp (2025-01-01T03:00:00Z)
    createdAt: 1735689601000,
    updatedAt: 1735689601000,
  },
  {
    busId: "60d3b41abdacab002f8b67da",
    userId: "60d3b41abdacab002f8b67da",
    price: 22,
    departureTime: 1735700400000, // Example departure timestamp (2025-01-01T04:00:00Z)
    createdAt: 1735689602000,
    updatedAt: 1735689602000,
  },
  {
    busId: "60d3b41abdacab002f8b67db",
    userId: "60d3b41abdacab002f8b67db",
    price: 27,
    departureTime: 1735704000000, // Example departure timestamp (2025-01-01T05:00:00Z)
    createdAt: 1735689603000,
    updatedAt: 1735689603000,
  },
  {
    busId: "60d3b41abdacab002f8b67dc",
    userId: "60d3b41abdacab002f8b67dc",
    price: 33,
    departureTime: 1735707600000, // Example departure timestamp (2025-01-01T06:00:00Z)
    createdAt: 1735689604000,
    updatedAt: 1735689604000,
  },
  {
    busId: "60d3b41abdacab002f8b67dd",
    userId: "60d3b41abdacab002f8b67dd",
    price: 20,
    departureTime: 1735711200000, // Example departure timestamp (2025-01-01T07:00:00Z)
    createdAt: 1735689605000,
    updatedAt: 1735689605000,
  },
  {
    busId: "60d3b41abdacab002f8b67de",
    userId: "60d3b41abdacab002f8b67de",
    price: 28,
    departureTime: 1735714800000, // Example departure timestamp (2025-01-01T08:00:00Z)
    createdAt: 1735689606000,
    updatedAt: 1735689606000,
  },
];
