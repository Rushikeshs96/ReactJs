import React, { useState, useEffect } from "react";

export default function GetMoviesComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = () => {
      fetch("https://localhost:7194/api/Movies1")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovies(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>MOVIES LIST</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <b>{movie.title}</b> - {movie.genre} ({movie.releaseDate})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
