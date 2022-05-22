import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { urlAPI } from '../../apis/githubUsers'

const LookForUser = () => {
  const [userSearched, setUserSearched] = useState('')

  // const handleInputChange = (event) => {
  //   const target = event.target
  //   const value = target.value

  //   setUserSearched(value)
  // }

  useEffect(() => {}, [userSearched])

  return (
    <div>
      <h5>Look for an user:</h5>
      <form className="search-form">
        <input type="text" name="userSearched" value={userSearched} onChange={e => setUserSearched(e.target.value)}/>
        <a href={userSearched}>
          <Link to={`/users/${userSearched}`}><button type="submit">Buscar</button></Link>
        </a>
      </form>
    </div>
  )
}

export default LookForUser