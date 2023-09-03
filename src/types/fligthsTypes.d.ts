// write type for thsi
// {
// {
//   "id": 1,
//   "departure_airport": "(ADB) İzmir Adnan Menderes Havalimanı İzmir",
//   "arrival_airport": "(TZX) Trabzon Havalimanı Trabzon",
//   "departure_date": "2024-06-03T12:53:42.000Z",
//   "departure_hour": "7:48 AM",
//   "price": 238.08,
//   "flight_length": 13.23,
//   "airline": "Etihad Airways",
//   "arrival_hour": "9:02 PM",
//   "updated_departure_date": "2024-06-04T02:07:42.000Z"
// },

export interface IFlightsTypes {
  id: number;
  departure_airport: string;
  arrival_airport: string;
  departure_date: string;
  departure_hour: string;
  price: number;
  flight_length: number;
  airline: string;
  arrival_hour: string;
  updated_departure_date: string;
}
