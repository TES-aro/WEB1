const express = require('express')
const cors = require('cors')

const PORT = 3001
const DataURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerData';
const EventURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerEvents';


const getPlayerData = async (username) => {
	console.log("in get player")
	const url = `${DataURL}/${username}?includeQuests=true&includeSkills=true`;
	const resp = await fetch(url);
	console.log(resp.body)
	if (!resp.ok) {
		throw new Error(resp.statusText)
	}
	const data = await resp.json();
	console.log(data)
	return data
}

const getPlayerEvents = async (username) => {
	const resp = await fetch(`${EventURL}/${username}`);
	if (!resp.ok){
		throw new Error(`${resp.status}: ${resp.statusText}`);
	}
	const data = await resp.json();
	return data;
}

const app = express();
app.use(cors());

app.get('/:name', async (req, res) => {
  const name = req.params.name;
  try{
  	const data = await getPlayerData(name);
  	const events = getPlayerEvents(name);
  	const playerObject = {
  		name: data.name,
  		skills: data.skills,
  		quests: data.quests,
  		qp_max: data.qp_max,
  		qp: data.qp,
  		events: events.events
  	}
  	
  	res.json(playerObject)
  	
  } catch (e) {
  	res.sendStatus(500)
  	console.error(e)
  }
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})


