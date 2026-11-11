import {Skills} from './Skills.tsx'
import {Quests} from './Quests.tsx'
import {SearchBar} from './SearchBar.tsx'
import { PlayerCard } from './PlayerCard.tsx' 
import { useParams } from 'react-router-dom'

const Info = ({addPlayer, players}) => {
  let params = useParams();
  if (!params.username){
    return (
      <div>
        <p> no params given </p>
      </div>
    )
  }
  if (players[params.username.toLowerCase()]){
    const player = players[params.username.toLowerCase()]
    return(
      <div>
        <SearchBar url='/player' />
        <PlayerCard player={player} />
        <Skills skills={player.skills} />
        <Quests quests={player.quests} />
      </div>
    )
  }
  try{
    const player = addPlayer(params.username)
    return(
      <div>
        <SearchBar url='/player' />
        <PlayerCard player={player} />
        <Skills skills={player.skills} />
        <Quests quests={player.quests} />
      </div>
    )
  } catch {
    return(
      <div>
        <p> huh, an error happened! </p>
      </div>
    )
  }
  
}


export default Info
