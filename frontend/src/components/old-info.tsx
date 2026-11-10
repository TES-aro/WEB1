import {Skills} from './Skills.tsx'
import {Quests} from './Quests.tsx'
import {SearchBar} from './SearchBar.tsx'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getPlayer } from '../services/apiFetch.ts';


const Info = ({fetchPlayer}) => {
  let params = useParams();
  let user = params.username as string;
  const [player, setPlayer] = useState()
  if (!user){
    return(
      <div>
        <h3> lorem ipsum. no user </h3>
        <SearchBar url='/player' />
      </div>
    )
  }
  const updatePlayer = async () => {
    const data = await fetchPlayer(user);
    setPlayer(data);
   }
  updatePlayer();


  if(!player){
    return(<></>)
  }
  return (
    <div>
      <h3> showing info of {player.name} </h3>
      <SearchBar url='/player' />
      <Skills skills={player.skills} />
      <Quests quests={player.quests} />
    </div>
    
  )
}


export default Info
