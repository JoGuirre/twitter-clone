import React from 'react'
import './TrendingWidget.css'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function TrendingWidget({ category, title, tweets }) {
  return (
    <div className="container__trending">
        <div className="trending__header">
            <div className="trending__category">{category} | Trending</div>
            <MoreHorizOutlinedIcon className="trending__menu" fontSize="small" />
        </div>
        <div className="trending__title">{title}</div>
        <div className="tweets__number">{tweets} Tweets</div>
    </div>
  )
}

export default TrendingWidget