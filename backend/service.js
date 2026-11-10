import express from 'express';

const app = express();

const DataURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerData';
const EventURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerEvents';


export const getPlayerData = async (username) => {
	const url = `${DataURL}/${username}?includeQuests=true&includeSkills=true`;
	const resp = await fetch(url);
	if (!resp.ok) {
		throw new Error(resp.statusText)
	}
	return resp.body
}

export const getPlayerEvents = async (username) => {
	const resp = await fetch(`${EventURL}/${username}`);
	if (!resp.ok){
		throw new Error(`${resp.status}: ${resp.statusText}`);
	}
	return resp.body;
}

app.get('/:name', async (req, res) => {
  //const name = req.params.name;
  const name = zezima
  try{
  	const data = await getPlayerData(name);
  	console.log(data)
  	return data
  	
  } catch (e) {
  	console.error(e)
  }
})

export default app;
