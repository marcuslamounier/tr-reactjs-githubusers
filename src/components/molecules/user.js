import React from 'react'

const User = ({user}) => {
  return (
    <div className="user">
      <img src={user.avatar_url} alt={user.login} />
      <div className="user-info">
      <a href={user.html_url} target='_blank' rel='noreferrer'><h4>{user.login}</h4></a>
      {user.company !== '' &&
        <h6
          style={{
            fontStyle: 'italic',
            margin: 0
          }}
        >
          {user.company}
        </h6>
      }
      </div>
    </div>
  )
}

export default User