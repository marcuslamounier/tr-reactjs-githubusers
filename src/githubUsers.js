import { useEffect, useState } from 'react';
import './App.css';
import User from './components/molecules/user';

import { urlAPI } from './apis/githubUsers';
import PageTemplate from './components/templates/pageTemplate';

const GithubUsers = () => {
  const [users, setUsers] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)
  // const [user, setUser]

  const getUsers = async () => {
    const response = await fetch(urlAPI)
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <PageTemplate>
      <h3>GitHub Users</h3>
      <div style={{padding: '0 20px'}}>
        <div className="user-list">
          {users.map((user) => {
            return (
              <User key={user.id} user={user} />
            )
          })}
        </div>
      </div>
    </PageTemplate>
  );
}

export default GithubUsers
