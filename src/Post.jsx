import React from 'react'
import './Post.css'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


function Post({title, body}) {
  return (
    <div className="post__container">
        <div className="post__header">
            <div className="post__info">
                <span className="post__name">JJ Watt</span>
                <span className="post__handle">@JJWatt</span>
                <span className="post__headerSeparator">|</span>
                <span className="post__timeElapsed">19h</span>
            </div>
            <MoreHorizOutlinedIcon className="post__dots" fontSize="small" />
        </div>
        <div className="post__body">{body}</div>
    </div>
  )
}

export default Post