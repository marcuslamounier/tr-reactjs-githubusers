import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlAPI } from '../apis/githubUsers';
import User from '../components/molecules/user';
import PageTemplate from '../components/templates/pageTemplate';
import './../App.css';
import { useParams } from 'react-router-dom'


const GithubUser = () => {
  
  const githubUser = useParams()
  const username = githubUser.username

  const initialProfile = {
    login: 'default user',
    id: '',
    avatar_url: '',
    html_url: '',
    company: ''
  }

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(initialProfile)

  const getUser = async (username) => {
    return await fetch(`${urlAPI}/${username}`)
      .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json()
      }
      else {
        setIsLoading(false)
        setIsError(true)
        throw new Error(resp.statusText)
      }
    })
    .then((user) => {
      setIsError(false)
      setIsLoading(false)
      const currentUser = {
        login: user.login,
        id: user.id,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        company: user.company
      }
      setUser(currentUser)
    })
    .catch((error) => console.log(error)) 
  }

  useEffect(() => {
    getUser(username)
  }, [username])

  if (isLoading) {
    return (
      <PageTemplate>
        <div>
          <h1>Loading...</h1>
        </div>
      </PageTemplate>
    )
  }

  if (isError) {
    return (
      <PageTemplate>
        <div>
          <h1>Error...</h1>
        </div>
      </PageTemplate>
    )
  }

  return (
    <PageTemplate>
      <h3>User:</h3>
      <div style={{padding: '0 20px'}}>
        <div className="user-search">
          {/* {username} */}
          <User user={user} />
        </div>
      </div>
      <Link to='/'>Retornar</Link>
    </PageTemplate>
  );
}

export default GithubUser
