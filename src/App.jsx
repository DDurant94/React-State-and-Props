import { useState } from 'react';
import UserProfile from './user_profile/user_profile.jsx';
import Movies from './movies-pages/movies.jsx'

function App() {
  return (
    <div>

      <UserProfile />
      <h1>Movies:</h1>
      {<Movies />}

    </div>

  )
}

export default App
