import React, { useState, useEffect } from 'react'
import './Body.css'
import Post from './Post'
import SportWidget from './SportWidget'
import TrendingWidget from './TrendingWidget'

function Body() {
  const [posts, setPosts] = useState([])
    
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setPosts(json.map(post => <Post key={post.id} title={post.title} body={post.body} />))
      })
  }, [])

  const gameInfo = {
    game: "NHL",
    time: "Final",
    winner: "COL"
  }

  const teamInfo =[{
    teamName: "Colorado",
    abr: "COL",
    score: "5",
    color: "green"
  }, {
    teamName: "California",
    abr: "CA",
    score: "3",
    color: "gold"
  }]

  return (
    <div className="body">
        <SportWidget className="sportWidget" gameInfo={gameInfo} teamInfo={teamInfo} />
        <TrendingWidget className="trendingWidget" category="Entertainment" title="Deadpool 3" tweets="21.4k" />
        <TrendingWidget className="trendingWidget" category="Stocks" title="FOREX" tweets="62k" />
        <TrendingWidget className="trendingWidget" category="Tech" title="ReactJS" tweets="42.4k" />
        <TrendingWidget className="trendingWidget" category="Books" title="Game of Thrones" tweets="203" />
        <TrendingWidget className="trendingWidget" category="Gaming" title="Stardew Valley" tweets="30.2k" />

        <h1 className="recentPosts">Recent Posts</h1>
        {posts}
    </div>
  )
}

export default Body