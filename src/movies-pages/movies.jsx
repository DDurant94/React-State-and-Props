import { array,string } from 'prop-types';
import React, { useState } from 'react';

const Movies = () => {
  const [movies,setMovies] = useState([
    {title: 'Interstellar',genre: 'drama' ,description: 'A group of astronauts who travel through a wormhole near Saturn to find a new planet for humans to inhabit.'},
    {title: 'Star Wars',genre: 'fantasy' ,description:'Space opera film series that takes place in a fictional galaxy "a long time ago.'},
    {title:'Dune',genre: 'action' ,description:'Story of Paul Atreides, a young man who must travel to the dangerous planet Arrakis to ensure the future of his family and people.'}
  ]);

const [showAll, setShowAll] = useState(true);

const toggleDetailsOpen = (index) => {
  const updatedMovies = [...movies];
  updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
  setMovies(updatedMovies);
}

const removeMovie = (index) => {
  const updatedMovies = [...movies]; 
  updatedMovies.splice(index,1);
  setMovies(updatedMovies);
}

const toggleAllMovies = () => {
  setShowAll(!showAll)
}

  return (
    <div>

      <h2>Favorite Movies</h2>

      <button onClick={toggleAllMovies}>{showAll ? 'drama' : 'Show All Movies'}</button>

      <ul>
      {movies.map((movie, index) => (
        (showAll || movie.genre === 'drama') && (
          <li key={index}>
            
            {movie.title} <br />
            {movie.showDetails && <p>{movie.description}</p>} 
            <button onClick={() => toggleDetailsOpen(index)}>Details</button> <br />
            <button onClick={()=> removeMovie(index)}>Remove {movie.title}</button>
            
          </li>)
        ))}

      </ul>

    </div>
  )
}

export default Movies