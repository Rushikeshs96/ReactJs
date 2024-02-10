import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';

export default function GetMoviesComponent() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7194/api/Movies1").then((resp) => resp.json()).then((data) => {
            setMovie(data);
            console.log(data);
        })
    }, [])

    // 'https://localhost:7194/api/Movies1/update/1'

    


    return (
        <div>
            <h1>MOVIES</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>ReleaseDate</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody> {
                    movie.map((item) => <tr key={
                        item.id
                    }>
                        <td>{
                            item.id
                        }</td>
                        <td>{
                            item.title
                        }</td>
                        <td>{
                            item.genre
                        }</td>
                        <td>{
                            item.releaseDate
                        }</td>
                        <td><button primary>Update</button></td>
                    </tr>)
                } </tbody>
            </Table>
        </div>
    )
}
