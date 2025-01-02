type busesDataType = {
  name: string;
  description: string;
  capacity: number;
  departureTime: number; // Example departure timestamp (2025-01-01T06:00:00Z)
  ticketPrice: number; // Ticket price for the bus
  createdAt: number;
  updatedAt: number;
  _id: string;
}[];
type ticketsDataType = {
  busId: string;
  createdAt: number; // Timestamp in milliseconds
  departureTime: number; // Timestamp in milliseconds
  price: number; // Assuming it's a monetary value
  updatedAt: number; // Timestamp in milliseconds
  userId: string;
  __v: number;
  _id: string;
}[];
type fetchStatusType = "FETCHING" | "FETCHED" | "FETCH_FAILED";
