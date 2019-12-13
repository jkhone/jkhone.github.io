import React, { useState, useEffect } from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'

import PlayerSearch from "./PlayerSearch"


export default props => {
  const { players, team, allPlayers } = usePlayers()

  const handleChange = (e) => {
    props.history.push(`/players/${e.target.value}`)
  }

  console.log("players page")

  useEffect(() => {
    if (props.match.params.team) {
      team(props.match.params.team)

    } else {
      allPlayers()
    }
  },[props.match.params])
 

  return (
  <>
 
        <div><PlayerSearch /></div>
 

        <label htmlFor="team">Choose a team:</label>
        <select name="team" id="size" onChange={handleChange}>
            <option value="Hawks"> Atlanta Hawks </option>
            <option value="Celtics">Boston Celtics</option>
            <option value="Nets">Brooklyn Nets</option>
            <option value="Hornets">Charlotte Hornets</option>
            <option value="Bulls">Chicago Bulls</option>
            <option value="Mavericks">Dallas Mavericks</option>
            <option value="Nuggets">Denver Nuggets</option>
            <option value="Pistons">Detroit Pistons</option>
            <option value="Warriors">Golden State Warriors</option>
            <option value="Rockets">Houston Rockets</option>
            <option value="Pacers">Indiana Pacers</option>
            <option value="Clippers">Los Angeles Clippers</option>
            <option value="Lakers">Los Angeles Lakers</option>
            <option value="Grizzlies">Memphis Grizzlies</option>
            <option value="Heat">Miami Heat</option>
            <option value="Bucks">Milwaukee Bucks</option>
            <option value="Timberwolves">Minnesota Timberwolves</option>
            <option value="Pelicans">New Orleans Pelicans</option>
            <option value="Knicks">New York Knicks</option>
            <option value="Thunder">Oklahoma City Thunder</option>
            <option value="Magic">Orlando Magic</option>
            <option value="Sixers">Philadelphia 76ers</option>
            <option value="Suns">Phoenix Suns</option>
            <option value="Blazers">Portland Trail Blazers</option>
            <option value="Kings">Sacramento Kings</option>
            <option value="Spurs">San Antonio Spurs</option>
            <option value="Raptors">Toronto Raptors</option>
            <option value="Jazz">Utah Jazz</option>
            <option value="Wizards">Washington Wizards</option>
        </select>

       <div id="playercontainer">
        {players.map((players, i) => (
          <div id="profile"  key={'player' + i} >
          <Link to={"/player/" + players.id}>
            <div className="player">
                <img className="playerImg" src={`${players.url}`} alt="" />
                <div className="playerDesc">
                    <div className="teamName">{players.team}</div>
                    <div className="playerName">{players.player}</div>
                </div>
            </div>
         
        </Link>
      </div>
        ))}


    </div>
  </>
  )
}