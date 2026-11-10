//const DataURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerData';
//const EventURL = 'https://secure.runescape.com/m=adventurers-log/api/v1/playerEvents';
//
//export const getPlayerData = async (username: string) => {
//	const url = `${DataURL}/${username}?includeQuests=true&includeSkills=true`;
//	const resp = await axios.get(url);
//	if (resp.status !== 200) {
//		throw new Error(resp.statusText)
//	}
//	return resp.data
//}
//
//export const getPlayerEvents = async (username: string) => {
//	const resp = await fetch(`${EventURL}/${username}`);
//	if (!resp.ok){
//		throw new Error(`${resp.status}: ${resp.statusText}`);
//	}
//	return resp.body;
//};
//
//export const getPlayer = {
//	events: getPlayerEvents,
//	data: getPlayerData
//}
const fetchPlayer = async (username: string) => {
	const resp = await fetch(`http://localhost:3001/${username}`)
	if (!resp.ok){
		throw new Error(`Couldn't find user: ${username}`)
	}
	return resp.json();
}

function isValidNic(nic: string): boolean{
	if(nic.length > 12){
		return false;
	}
	return nic.match(/^[a-zA-Z0-9_]+$/) !== null;
}
export async function getPlayer(id: string){
	if(!isValidNic(id)){
		throw new Error(`${id} is not a proper username`);
	}
	return await fetchPlayer(id);
}
