import React from 'react'
import './SportWidget.css'

function SportWidget({ gameInfo, teamInfo }) {
  const gameWinner = (teams) => {
    if (teams[0].score > teams[1].score) return teams[0].abr
    else return teams[1].abr
  }
  return (
    <div className="container__sports">
        <div className="sports__header">
            <div className="sport__name">{gameInfo.game}</div>
            <span className="game__time">{gameInfo.time}</span>
            <span className="score__separator">|</span>
            <span className="winner">{gameWinner(teamInfo)} won</span>
        </div>
        <div className="teams__box">
            <div className="team" id="teamOne__box" style={{ backgroundColor: teamInfo[0].color }}>
                <div className="team__name" id="teamOne__name">{teamInfo[0].teamName}</div>
                <span className="score" id="teamOne__score">{teamInfo[0].score}</span>
            </div>
            <div className="team" id="teamTwo__box" style={{ backgroundColor: teamInfo[1].color }}>
                <div className="team__name" id="teamTwo__name">{teamInfo[1].teamName}</div>
                <span className="score" id="teamTwo__score">{teamInfo[1].score}</span>
            </div>
        </div>
    </div>
  )
}

export default SportWidget