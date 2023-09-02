// Type definitions for Flights
// "id": 2082,
// "departure_airport": "(ISL) İstanbul Atatürk Havalimanı İstanbul",
// "arrival_airport": "(SAW) Sabiha Gökçen Havalimanı İstanbul",
// "departure_date": "2023-09-05T12:58:00.000Z",
// "arrival_date": "2023-09-10T17:04:40.000Z",
// "departure_hour": "4:31 PM",
// "arrival_hour": "1:42 PM",
// "price": 94.31,
// "flight_length": 12.36,
// "airline": "Aeroflot"

export interface IFlightsTypes {
  id: number;
  departure_airport: string;
  arrival_airport: string;
  departure_date: string;
  arrival_date: string;
  departure_hour: string;
  arrival_hour: string;
  price: number;
  flight_length: number;
  airline: string;
}
