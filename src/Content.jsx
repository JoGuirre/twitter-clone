import React from 'react'
import './Content.css'
import Header from './Header'
import Body from './Body'

function Content() {
  return (
    <div className="content">
        {/* <Header /> */}
        {/* Sticky search bar
            settings
            5 sub columns */}
      <Header className="header" />
      {/* <Body /> */}
        {/* Trending topics
            Feed */}
      <Body className="body" />
    </div>
  )
}

export default Content