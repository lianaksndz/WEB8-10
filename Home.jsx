import MovieList from "../components/MovieList";
import movies from "../data/movies";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Актуальні фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
}
