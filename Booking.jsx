import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";

export default function Booking() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Бронювання місць</h1>
      <CinemaHall movieId={id} />
    </div>
  );
}
