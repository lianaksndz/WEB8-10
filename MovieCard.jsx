import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p>{movie.description}</p>
      <p className="text-sm text-gray-600">Жанр: {movie.genre}</p>
      <p className="text-sm text-gray-600">Сеанс: {movie.datetime}</p>
      <Link to={`/booking/${movie.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Забронювати
      </Link>
    </div>
  );
}
