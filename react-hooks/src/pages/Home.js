import React, { Fragment, useContext } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../github/githubContext'

export const Home = () => {

  // const cards = new Array(15).fill('').map((_, i) => i)
  const {loading, users} = useContext(GithubContext)

  return (
    <Fragment>
      <Search />
      <div className="row">

        {
          loading
          ? <p className='text-center'>Loading...</p>
          : users.map(user => (
              <div className="col-sn-4 mb-4" key={user.id}>
                <Card user={user}/>
              </div>
            ))
        }

        {/* { cards.map((card, index) => (
          <div className="col-sn-4 mb-4" key={index}>
            <Card />
          </div>
        )) } */}
      </div>
    </Fragment>
  )
}