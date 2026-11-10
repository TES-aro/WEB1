import axios from 'axios';
const DataURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerData';
const EventURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerEvents';

export const getPlayerData = async (username: string) => {
	const url = `${DataURL}/${username}?includeQuests=true&includeSkills=true`;
	const resp = await axios.get(url);
	if (resp.status !== 200) {
		throw new Error(resp.statusText)
	}
	return resp.data
}

//export const getPlayerData = async (username: string) => {
//	const url = `${DataURL}/${username}?includeQuests=true&includeSkills=true`;
//	const resp = await axios.get(url)
//		if (!resp.ok){
//		throw new Error(`${resp.status}: ${resp.statusText}`);
//	}
//	return resp.body;
//};

export const getPlayerEvents = async (username: string) => {
	const resp = await fetch(`${EventURL}/${username}`);
	if (!resp.ok){
		throw new Error(`${resp.status}: ${resp.statusText}`);
	}
	return resp.body;
};

export const getPlayer = {
	events: getPlayerEvents,
	data: getPlayerData
}
