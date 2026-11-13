import {Event} from './Event.tsx';

// using date as key ought to work but I think secure mode messes that up.
// random keys isn't good practice but I rather not see the errors
function genKey(){
  return Math.floor(Math.random()*100000000000)
  
}
export function Events({events}){
  if(!events){
    return;
  }
  return(
    <ul>
      {events.map(e => {
        return(
          <Event key={genKey()} event={e}/>
        ) 
      })}
    </ul>
  )
}
