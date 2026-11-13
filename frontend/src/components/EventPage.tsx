import {SearchBar} from './SearchBar.tsx'
import { useParams } from 'react-router-dom'
import { Paper } from '@mui/material'
import { Events } from './Events.tsx'

const EventPage = ({addPlayer, players}) => {
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
    console.log('known player')
    console.log(player)
    return(
      <div>
        <Paper>
          <SearchBar url='/events' />
          <ShowingInfo name={player.name} />
          <Events events={player.events} />
        </Paper>
      </div>
    )
  }
  try{
    const player = addPlayer(params.username)
    return(
      <div>
        <Paper>
          <SearchBar url='/events' />
          <ShowingInfo name={player.name} />
          <Events events={player.events} />
        </Paper>
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

function ShowingInfo({name}){
  if(!name){
    return(
      <h2> Fetching data...</h2>
    )
  }
  return(
    <h2> Showing {name}'s events </h2>
  )
}

export default EventPage
