import {Info} from './Info.tsx'
import {useParams} from 'react-router-dom'

function GetInfo({plqyers, setPlayers}) {
  let params = useParams();
  if (!params.username){
    return(
      <div>
        <p> no params </p>
      </div>
    )
  }
  
}
