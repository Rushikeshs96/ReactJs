import React, {useState, useEffect} from "react";

export default function GetMoviesComponent() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7194/api/Movies1")
        .then((responce) => responce.json())
        .then((data) => {
            console.log(data);
            setMovies(data);
        })
    }, []);


    return (
        <div>
          <header>
            WELCOME TO MOVIE WEBSITE
          </header>
          <div>
            <h1 style={{color:'red'}}>Movies List</h1>
            <table border={1}style={{margin: 'auto' }}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>genre</td>
                        <td>releaseDate</td>
                    </tr>
                </thead>
                <tbody> {
                    movies.map((item) => (
                        <tr key={ item.id }>
                            <td>{item.id}</td>
                            <td>{ item.title}</td>
                            <td>{item.genre}</td>
                            <td>{item.releaseDate}</td>
                        </tr>
                    ))
                } </tbody>
            </table>
            </div>
        </div>
    );
}
