import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";

export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    return { Search: [] }; // Return empty data structure to prevent undefined errors
  }
};

export const Movie = () => {
  const movieData = useLoaderData();
  const movies = movieData?.Search || [];

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Loading movies or no movies found...</p>
      )}
    </div>
  );
};
