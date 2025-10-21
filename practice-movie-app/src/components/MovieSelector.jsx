import { useState } from "react";

function MovieSelector(){

    const [selectedGenre,setSelectedGenre] = useState('');
    const [isLoading,setisLoading] = useState(false);
    const [error,setError] = useState('');
    const [movies, setMovies] = useState([]);

    const movieDatabase = {
        action: ['John Wick', '2010', 'Taken'],
        comedy: ['Happy Gilmore', 'Bad Boys', 'Ride Along'],
        drama: ['Training Day', 'Lou', 'The Outsider']
    };

    const handleClick = ()=>{
        if(!selectedGenre){
            setError("Please select one option");
            setMovies([]);
            return;
        }
        setError("");
        setisLoading(true);
        setTimeout(()=>{
            setMovies(movieDatabase[selectedGenre]);
            setisLoading(false);
        },1000)
    }

    return(
        <div>
            <h1>Movie Selector</h1>
            <label>Choose Genre</label>
            <select value={selectedGenre} onChange={(event)=> setSelectedGenre(event.target.value)} >
                <option value={""}>--Choose Genre--</option>
                <option value={"action"}>Action</option>
                <option value={"comedy"}>Comedy</option>
                <option value={"drama"}>Drama</option>
            </select>
            <button onClick = {handleClick}>Fetch Movies</button>
            {isLoading && <p>Loading..</p>}
            {error && <p>{error}</p>}
            <div>
                <ul>
                    {
                        movies.map((movie,index)=>
                        (
                            <li key={index}>{movie}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default MovieSelector;