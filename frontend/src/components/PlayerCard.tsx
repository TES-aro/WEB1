
export const PlayerCard = ({ player }) => {
	if(!player.skills){
		console.log('player in PlayerCard:');
		console.log(player);
		return(
			<>
				<h4> fetching info... </h4>
			</>
		);
	}
	console.log(player.skills);
	return(
		<>
			<h3> Showing info of {player.name} </h3>
			<p> total level: {totalLevel(player)}  combat level: {combatLevel(player.skills)} </p>
		</>
	);
};

function combatLevel(s){
	const meele = s.attack.level + s.strength.level;
	const mage = 2*s.magic.level;
	const range = 2*s.ranged.level;
	const necro = 2*s.necromancy.level;
	const def = s.defence.level;
	const hp = s.hitpoints.level;
	const pray = s.prayer.level;
	const summ = s.summoning.level;

	const offensive = (13*Math.max(meele,mage,range,necro))/10;
	return Math.trunc((offensive+def+hp+0.5*pray+0.5*summ)/4);
}

function totalLevel(player){
	const skills = player.skills;
	const skillKeys = Object.keys(skills);
	let total = 0;
	skillKeys.forEach(k => {
		total = total + skills[k].level;
	});
	return total;
}
